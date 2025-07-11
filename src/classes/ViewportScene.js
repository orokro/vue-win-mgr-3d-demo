/*
	ViewportScene.js
	----------------

	This class will encapsulate the viewport scene ThreeJS logic so the component itself is
	light as possible.
*/

// vue
import { onMounted, ref, inject } from 'vue';
import * as THREE from 'three';


// lib/misc
import ThreeQuery from 'three-query';
import App from './App';

// main class export
export default class ViewportScene {

	/**
	 * Constructor for the ViewportScene class.
	 * 
	 * @param {App} app - the main App instance
	 * @param {Object} scene - the ThreeJS scene object to use
	 * @param {Element} containerElement - the element to mount the ThreeJS scene to
	 */
	constructor(app, scene, containerElement){

		// save app and our pre-existing scene set up in our state
		this.app = app;
		this.scene = scene;

		// save the element we'll mount to
		this.containerElement = containerElement;

		// true if we're using the orbit camera
		this.orbit = ref(true);

		// true when canceling rendering loop
		this.cancelRenderLoop = false;

		// build our scene
		this.buildScene();

		// set up watches on the settings 
		this.settingsWatches = this.app.settingsMgr.registerWatches(this);

		// kick off the render loop
		this.startRenderLoop();
	}


	/**
	 * Clean up things when the component unmounts.
	 */
	destruct(){

		// clean up the resize observer
		if (this.resizeObserver && this.containerElement) {
			this.resizeObserver.unobserve(this.containerElement);
			this.resizeObserver.disconnect();
			this.resizeObserver = null;
		}

		// stop the render loop
		this.stopRenderLoop();

		// stop all the watches from the settings manager
		if (this.settingsWatches) {
			this.settingsWatches.forEach(stopWatch => stopWatch());
			this.settingsWatches = null;
		}
	}
	

	/**
	 * Does the initial ThreeJS construction for the scene
	 */
	async buildScene(){

		// build generic scene with ThreeQuery
		const container = this.containerElement;
		this.threeBits = ThreeQuery.useScene(this.scene, container, {
			autoSize: true,
			autoRender: false,
			addCube: false,
			addLights: false,
			addControls: true
		});

		// save bits
		const {
			scene,
			renderer,
			camera,
			controls,
			cube,
			lights,
			resizeObserver
		} = this.threeBits
		
		// set up clear rendering
		this.threeBits.renderer.setClearAlpha(0.0);
		this.threeBits.renderer.setClearColor(0x000000, 0); // optional, for total transparency

		// the scene will come with an orbit camera, but we'll also make a static camera
		this.orbitCamera = camera;
		const width = this.containerElement.clientWidth;
		const height = this.containerElement.clientHeight;
		this.staticCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		this.staticCamera.position.set(0, 0, 10);
		this.staticCamera.lookAt(0, 0, 0);

		// make sure our orbit camera starts in a good spot
		this.setOrbitCameraToDefaultView(6);

		// update perspective matrix when the scene is resized
		this.resizeObserver = new ResizeObserver(() => {

			const newWidth = this.containerElement.clientWidth;
			const newHeight = this.containerElement.clientHeight;
	
			this.staticCamera.aspect = newWidth / newHeight;
			this.staticCamera.updateProjectionMatrix();
		});	
		this.resizeObserver.observe(this.containerElement);

		// set up three query
		this.tq = new ThreeQuery(scene);
		this.$ = this.tq.$;

	}


	/**
	 * Sets the current camera view mode
	 * 
	 * @param {String} side - case-insensitive side name like "top/bottom/left/right/front/back/free"
	 * @param {Number} distance - distance from the origin to the camera (default 10)
	 */
	setCamera(side, distance = 5) {
	
		// make sure string is uppercase
		const normalizedSide = side.toUpperCase();
	
		// if it's free, we can just set the orbit boolean & GTFO
		if (normalizedSide === "FREE") {
			this.orbit.value = true;
			return;
		}
		
		// all other views have orbit off
		this.orbit.value = false;
	
		// Map of sides to axis and direction
		const sideMap = {
			TOP:     { axis: 'y', dir:  1 },
			BOTTOM:  { axis: 'y', dir: -1 },
			LEFT:    { axis: 'x', dir: -1 },
			RIGHT:   { axis: 'x', dir:  1 },
			FRONT:   { axis: 'z', dir:  1 },
			BACK:    { axis: 'z', dir: -1 },
		};
		
		// get the config for the requested side
		const config = sideMap[normalizedSide];
		if (!config) {
			console.warn("Unknown camera side:", side);
			return;
		}
	
		// Reset position to new side
		this.staticCamera.position.set(0, 0, 0);
		this.staticCamera.position[config.axis] = config.dir * distance;	
		this.staticCamera.lookAt(0, 0, 0);
	}


	/**
	 * Positions the orbit camera at a nice 3/4 view and updates controls.
	 * Ensures the orbit controls respect this as the new starting point.
	 * 
	 * @param {number} distance - Distance from origin (default 8)
	 */
	setOrbitCameraToDefaultView(distance = 8) {
		
		if (!this.orbitCamera || !this.threeBits?.controls) return;

		const cam = this.orbitCamera;
		const controls = this.threeBits.controls;

		// Set camera to a 3/4 angle (x+, y+, z+)
		const offset = distance / Math.sqrt(3);
		cam.position.set(-offset/3, offset/2, offset);

		// Focus on origin
		controls.target.set(0, 0, 0);

		// Update controls to acknowledge new state
		controls.update();
	}


	/**
	 * Starts the render loop for the scene.
	 */
	startRenderLoop(){

		const animate = ()=>{

			// gtfo if we're canceling the render loop
			if(this.cancelRenderLoop==true){
				this.cancelRenderLoop = false;
				return;
			}

			// recursively call animate
			this.animationID = requestAnimationFrame(animate);

			// pick the camera to use based on the orbit boolean
			const cameraToUse = this.orbit.value ? this.orbitCamera : this.staticCamera;

			// render
			this.threeBits.renderer.render(this.scene, cameraToUse);
		}
		animate();
	}


	/**
	 * Stops the render loop
	 */
	stopRenderLoop(){
		
		// cancel the render loop
		this.cancelRenderLoop = true;

		// cancel the animation frame
		if(this.animationID)
			cancelAnimationFrame(this.animationID);
		this.animationID = null;
	}

}
