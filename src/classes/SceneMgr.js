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
import { shallowRef, ref } from "vue";

// three
import * as THREE from "three";

// main export
export default class SceneMgr {

	// for generating unique item IDs
	static itemIDCounter = 0;

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

		// keep track of a selected item ID, or null if nothing is selected
		this.selectedItemID = ref(null);

		// keep track of the items we've added here
		this.sceneItems = shallowRef([]);

		// for our events, we'll store them in a simple object
		this._eventListeners = {};

		// add some demo data to start with
		this.addDemoItems();
	}


	/**
	 * Adds a few demo items to the scene
	 */
	addDemoItems(){

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
	 * Selects item
	 * 
	 * @param {Object|Number} itemOrID - Item object or ID to select
	 * @returns {Boolean} - Returns true if item was found and selected, false otherwise
	 */
	selectItem(itemOrID) {

		const id = typeof itemOrID === "object" ? itemOrID.id : parseInt(itemOrID, 10);
		const item = this.sceneItems.value.find(i => i.id === id);
		if(!item) {
			this.selectedItemID.value = null;
			return false;
		}
		this.selectedItemID.value = id;
		return true;
	}


	/**
	 * Deselects any selected item(s)
	 * 
	 * @returns {Boolean} - Returns true if an item is selected, false otherwise
	 */
	selectNone(){
		// clear selection & GTFO
		this.selectedItemID.value = null;
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
