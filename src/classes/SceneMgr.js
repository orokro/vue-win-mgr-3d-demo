/*
	SceneMgr.js
	-----------

	This file projects a class to manage the state for our logical scene.

	This will both instantiate a sharable ThreeJS scene, that can be reused
	with different camera's and renderers in the various components.

	However, it will also track any scene related stuff outside of ThreeJS,
	if needed, such as the list of objects in the scene, their properties.
*/

// our app classes
import App from "./App";

// lib/misc
import ThreeQuery from "three-query";

// vue
import { shallowRef, ref, watch } from "vue";

// three
import * as THREE from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

// main export
export default class SceneMgr {

	// for generating unique item IDs
	static itemIDCounter = 1;

	/**
	 * Constructor for the SceneMgr class.
	 * 
	 * @param {App} app - the main App instance
	 */
	constructor(app) {

		// store the app instance
		this.app = app;

		// create a ThreeQuery scene, which will also create a ThreeJS scene
		const container = document.createElement("div");
		this.sceneDetails = ThreeQuery.createScene(container, {
			autoSize: false,
			autoRender: false,
			addLights: true,
			addControls: false,
			addCube: false,
		});
		this.scene = this.sceneDetails.scene;
		this.lights = this.sceneDetails.lights;

		this.lights.directionalLight.position.set(5, 10, 5);
		this.lights.directionalLight.intensity = 2.5;

		// add some helpers

		// add grid and axes (hidden by default)
		this.gridHelper = new THREE.GridHelper(10, 10);
		this.gridHelper.visible = false;
		this.scene.add(this.gridHelper);

		this.axesHelper = new THREE.AxesHelper(2);
		this.axesHelper.visible = false;
		this.scene.add(this.axesHelper);

		// add HDR environment map
		this.loadHDR();

		// When an item is selected, we'll move it's properties from the ThreeJS Object3D to these
		// Refs for the templates to bind to.
		this.selectedItem = {
			id: ref(null),
			item: null,
			name: ref(''),
			mesh: null,
			visible: ref(true),
			position: { x: ref(0), y: ref(0), z: ref(0) },
			rotation: { x: ref(0), y: ref(0), z: ref(0) },
			scale: { x: ref(1), y: ref(1), z: ref(1) },
			color: ref('#000000'),
			roughness: ref(0.5),
			metalness: ref(0.5),
			wireframe: ref(false),
		};

		// keep track of the items we've added here
		this.sceneItems = shallowRef([]);

		// for our events, we'll store them in a simple object
		this._eventListeners = {};

		// add some demo data to start with
		this.addDemoItems();

		// watch for when our selection refs change
		this.watchSelection();
	}


	/**
	 * Loads an HDR environment map and applies it to the scene.
	 * 
	 * @param {String} path - Path to the HDR file
	 */
	async loadHDR(path = '/img/hdr/venice_sunset_1k.hdr') {

		// load our image
		const loader = new RGBELoader();
		return new Promise((resolve, reject) => {
			loader.load(path, (hdrEquirect) => {

				// set it up as an equirectangular mapping
				hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;

				this.scene.environment = hdrEquirect;
				this.scene.background = hdrEquirect;

				// store it for future updates
				this.hdrTexture = hdrEquirect; 

				// hidden by default
				this.showHDR(false);

				resolve(hdrEquirect);

			}, undefined, reject);
		});
	}


	/**
	 * Adds a few demo items to the scene
	 */
	addDemoItems(){

		// this.addItem("Cube");
		// this.addItem("Sphere");
		// this.addItem("Torus");
		// this.addItem("Cone");
		// this.addItem("Cylinder");
		// this.addItem("Dodecahedron");
		// this.addItem("Icosahedron");
		// this.addItem("Octahedron");
		// this.addItem("Tetrahedron");
		// return;

		// add a few demo items to the scene
		const a = this.addItem("Cube");
		const b = this.addItem("Sphere");
		const c = this.addItem("Torus");

		// move the others
		b.mesh.position.set(2, 0, 0);
		c.mesh.position.set(-2, 0, 0);

		// select the first item by default
		if(this.sceneItems.value.length > 0)
			this.selectItem(this.sceneItems.value[0]);
	}


	/**
	 * Controls whether the HDR texture is shown as the scene background.
	 * If false, sets a transparent background while keeping HDR lighting.
	 * 
	 * @param {Boolean} show - Whether to display the HDR as background.
	 */
	showHDR(show = true) {

		if (!this.hdrTexture)
			return;

		this.scene.background = show ? this.hdrTexture : null;

		// Enable transparency when HDR is hidden
		if (this.threeBits?.renderer) {
			this.threeBits.renderer.setClearAlpha(show ? 1.0 : 0.0);
		}
	}


	/**
	 * Show or hide the grid helper.
	 * 
	 * @param {Boolean} on - Whether to show the grid
	 */
	showGrid(on = true) {
		if (this.gridHelper) {
			this.gridHelper.visible = on;
		}
	}


	/**
	 * 
	 * Show or hide the axes helper.
	 * 
	 * @param {Boolean} on - Whether to show the axes
	 */
	showAxes(on = true) {
		if (this.axesHelper) {
			this.axesHelper.visible = on;
		}
	}


	/**
	 * Turns all lights in the scene on or off, including HDR lighting and manual lights.
	 * 
	 * @param {Boolean} on - Whether to enable all lights
	 */
	toggleLights(on = true) {

		// Manual lights
		if (this.lights) {
			const { ambientLight, directionalLight } = this.lights;

			if (ambientLight) 
				ambientLight.visible = on;
			if (directionalLight)
				directionalLight.visible = on;
		}

		// HDR lighting
		if (on) {
			this.scene.environment = this.hdrTexture || null;
		} else {
			this.scene.environment = null;
		}
	}


	/**
	 * Normalizes a questionable color input into a valid THREE.Color instance.
	 * Accepts hex, rgb/rgba, named colors, integers, etc.
	 * @param {string|number} questionableColor - The questionable input color
	 * @returns {THREE.Color} A valid THREE.Color instance
	 */
	getThreeColor(questionableColor) {
		if (questionableColor instanceof THREE.Color) {
			return questionableColor;
		}
	
		try {
			// Handle integer input
			if (typeof questionableColor === 'number') {
				return new THREE.Color(questionableColor);
			}
	
			if (typeof questionableColor !== 'string') {
				throw new Error('Color must be a string or number');
			}
	
			let colorStr = questionableColor.trim();
	
			// Handle hex without #
			if (/^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(colorStr)) {
				colorStr = `#${colorStr}`;
				return new THREE.Color(colorStr);
			}
	
			// Handle rgb/rgba
			const rgbMatch = colorStr.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)/i);
			if (rgbMatch) {
				const r = parseInt(rgbMatch[1]);
				const g = parseInt(rgbMatch[2]);
				const b = parseInt(rgbMatch[3]);
				return new THREE.Color((r / 255), (g / 255), (b / 255));
			}
	
			// Handle named colors or hex with #
			return new THREE.Color(colorStr.toLowerCase());
		} catch (err) {
			console.warn(`Could not parse color "${questionableColor}": ${err.message}`);
			return new THREE.Color(0x000000); // fallback to black
		}
	}
	


	/**
	 * Watch all the refs for the refs & update the corresponding ThreeJS Object3D
	 * 
	 * NOTE: this is sloppy & lazy & there's better ways.
	 * 
	 * This is just a lazy way, because the point of this project is to show of
	 * the window manager, and not the best way to manage a ThreeJS scene in Vue.
	 */
	watchSelection() {

		const watchV3 = (refPos, key)=>{
			watch(()=>refPos.x.value, (newX) => { this.selectedItem.mesh[key].x = newX;});
			watch(()=>refPos.y.value, (newY) => { this.selectedItem.mesh[key].y = newY;});
			watch(()=>refPos.z.value, (newZ) => { this.selectedItem.mesh[key].z = newZ;});
		};

		watch(this.selectedItem.name, (newName) => { 
			this.selectedItem.item.name.value = newName; });
		watch(this.selectedItem.visible, (newVisible) => {
			this.selectedItem.item.mesh.visible = newVisible; });
		watchV3(this.selectedItem.position, 'position');
		watchV3(this.selectedItem.rotation, 'rotation');
		watchV3(this.selectedItem.scale, 'scale');
		watch(this.selectedItem.color, (newColor) => {
			newColor = this.getThreeColor(newColor);
			this.selectedItem.item.mesh.material.color.set(newColor); });
		watch(this.selectedItem.roughness, (newRoughness) => {
			this.selectedItem.item.mesh.material.roughness = newRoughness; });
		watch(this.selectedItem.metalness, (newMetalness) => {
			this.selectedItem.item.mesh.material.metalness = newMetalness; });
		watch(this.selectedItem.wireframe, (newWireframe) => {
			this.selectedItem.item.mesh.material.wireframe = newWireframe;
		});
	}


	/**
	 * Selects item
	 * 
	 * @param {Object|Number} itemOrID - Item object or ID to select
	 * @returns {Boolean} - Returns true if item was found and selected, false otherwise
	 */
	selectItem(itemOrID) {

		const id = typeof itemOrID === "object" ? itemOrID.id : parseInt(itemOrID, 10);
		const item = this.sceneItems.value.find(i => i.id === id);

		const v32obj = (obj, v3) => {
			obj.x.value = v3.x;
			obj.y.value = v3.y;
			obj.z.value = v3.z;
		};

		if(!item) {

			this.selectedItem.id = null;
			this.selectedItem.item = null;
			return false;
		}

		// copy item to our refs for the UI
		this.selectedItem.item = item;
		this.selectedItem.mesh = item.mesh;
		this.selectedItem.id.value = item.id;		
		this.selectedItem.name.value = item.name.value;		
		this.selectedItem.visible.value = item.mesh.visible;
		v32obj(this.selectedItem.position, item.mesh.position);
		v32obj(this.selectedItem.rotation, item.mesh.rotation);
		v32obj(this.selectedItem.scale, item.mesh.scale);
		this.selectedItem.color.value = '#' + item.mesh.material.color.getHexString();
		this.selectedItem.roughness.value = item.mesh.material.roughness;	
		this.selectedItem.metalness.value = item.mesh.material.metalness;
		this.selectedItem.wireframe.value = item.mesh.material.wireframe;
		return true;
	}


	/**
	 * Deselects any selected item(s)
	 * 
	 * @returns {Boolean} - Returns true if an item is selected, false otherwise
	 */
	selectNone(){

		// clear selection & GTFO
		this.selectedItem.id.value = null;
		this.selectedItem.item.value = null;
		return true;
	}


	/**
	 * Adds a mesh item to the scene
	 * 
	 * @param {String} kind - Type of primitive to add
	 * @returns {Object|null} - Created item object or null if type invalid
	 */
	addItem(kind) {

		// get the geometry based on the kind, or GTFO if invalid
		const geometry = this.getGeometryByKind(kind);
		if(!geometry)
			return null;

		// make a 100% brand new material w/ random color
		const material = new THREE.MeshStandardMaterial({
			color: new THREE.Color(Math.random(), Math.random(), Math.random())
		});

		// build the new mesh & add it to the scene
		const mesh = new THREE.Mesh(geometry, material);
		this.scene.add(mesh);

		// generate a unique name for this item
		const name = this.generateUniqueName(kind);

		// build our item object to store in the sceneItems list
		const item = {
			id: SceneMgr.itemIDCounter++,
			mesh,
			name: ref(name)
		};

		// update the list & fire events
		this.sceneItems.value = [...this.sceneItems.value, item];
		this.emitEvent('items-added', this.sceneItems.value, [item]);

		return item;
	}


	/**
	 * Removes an item by object or ID
	 * 
	 * @param {Object|Number} itemOrID - Item object or ID to remove
	 * @returns {Boolean}
	 */
	removeItem(itemOrID) {

		// validate the ID & GTFO if no item found
		const id = typeof itemOrID === "object" ? itemOrID.id : parseInt(itemOrID, 10);
		const toRemove = this.sceneItems.value.find(i => i.id === id);
		if(!toRemove)
			return false;

		// fire before-items-removed event
		this.emitEvent('before-items-removed', this.sceneItems.value, [toRemove]);

		// Remove mesh from scene
		this.scene.remove(toRemove.mesh);
		if(toRemove.mesh.geometry) toRemove.mesh.geometry.dispose();
		if(toRemove.mesh.material) toRemove.mesh.material.dispose();

		// Remove from our state list & fire event
		this.sceneItems.value = this.sceneItems.value.filter(i => i.id !== id);
		this.emitEvent('items-removed', this.sceneItems.value);

		return true;
	}


	/**
	 * Returns item by ID
	 * 
	 * @param {Number} id
	 * @returns {Object|null}
	 */
	getItemByID(id) {
		id = parseInt(id, 10);
		return this.sceneItems.value.find(i => i.id === id) || null;
	}


	/**
	 * Adds an event listener
	 * 
	 * @param {String} eventName
	 * @param {Function} handler
	 */
	on(eventName, handler) {

		if(!this._eventListeners[eventName])
			this._eventListeners[eventName] = new Set();
		this._eventListeners[eventName].add(handler);
	}


	/**
	 * Removes an event listener
	 * 
	 * @param {String} eventName
	 * @param {Function} handler
	 */
	off(eventName, handler) {

		if(this._eventListeners[eventName])
			this._eventListeners[eventName].delete(handler);
	}


	/**
	 * Internal: Emits an event to all subscribers
	 */
	emitEvent(eventName, ...args) {

		const listeners = this._eventListeners[eventName];
		if(listeners)
			for(const cb of listeners)
				cb(...args);
	}


	/**
	 * Internal: Creates geometry based on primitive type
	 */
	getGeometryByKind(kind) {

		switch(kind.toLowerCase()) {
			case "cube": return new THREE.BoxGeometry(1, 1, 1);
			case "sphere": return new THREE.SphereGeometry(0.75, 32, 32);
			case "cone": return new THREE.ConeGeometry(0.5, 1, 32);
			case "cylinder": return new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
			case "torus": return new THREE.TorusGeometry(0.6, 0.2, 16, 100);
			case "dodecahedron": return new THREE.DodecahedronGeometry(0.7);
			case "icosahedron": return new THREE.IcosahedronGeometry(0.7);
			case "octahedron": return new THREE.OctahedronGeometry(0.7);
			case "tetrahedron": return new THREE.TetrahedronGeometry(0.7);
			default: return null;

		}// swatch

	}


	/**
	 * Internal: Generates a unique name for the item type
	 */
	generateUniqueName(base) {

		// ensure the base is a valid string based on the kind
		base = base.charAt(0).toUpperCase() + base.slice(1).toLowerCase();

		// get all the current names we have to see if it's unique
		const names = this.sceneItems.value.map(i => i.name.value);
		if(!names.includes(base))
			return base;

		// loop till we find a valid name
		let index = 1;
		while(names.includes(`${base} ${index}`)) {
			index++;
		}

		// return the unique name
		return `${base} ${index}`;
	}

}
