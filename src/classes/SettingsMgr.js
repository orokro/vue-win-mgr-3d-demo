/*
	SettingsMgr.js
	--------------

	This file provides a class to encapsulate the settings of the application.

	It will be lightly weight and mostly just a wrapper for some refs()
*/

import { ref, watch } from "vue";
import ViewportScene from "./ViewportScene";

// main export
export default class SettingsMgr {

	/**
	 * Constructor for the SettingsMgr class.
	 * 
	 * @param {Object} app - the main App instance
	 */
	constructor(app) {

		// store the app instance
		this.app = app;

		// thing to show
		this.showGrids = ref(true);
		this.showAxes = ref(true);
		
		// background settings
		this.backgroundColor = ref("#000000");
		this.showHDRBackground = ref(false);
		
		// lighting settings
		this.lightingEnabled = ref(true);		
		this.ambientLightIntensity = ref(0.5);
		this.directionalLightIntensity = ref(0.5);
		this.hdrLightIntensity = ref(1.0);

		// update threeJS settings when certain refs change
		this.setUpWatches();
	}


	/**
	 * Watches our refs and sets static ThreeJSthings
	 */
	setUpWatches(){

		// 3d items

		// lighting
		watch(
			()=>this.showHDRBackground.value, (newValue)=>{
			this.app.sceneMgr.showHDR(newValue);
		}, { immediate: true });
		watch(
			()=>this.lightingEnabled.value, (newValue)=>{
				this.app.sceneMgr.toggleLights(newValue);
		}, { immediate: true });
		watch(()=>this.ambientLightIntensity.value, (newValue) => {
			this.app.sceneMgr.lights.ambientLight.intensity = newValue;
		}, { immediate: true });
		watch(()=>this.directionalLightIntensity.value, (newValue) => {
			this.app.sceneMgr.lights.directionalLight.intensity = newValue;
		}, { immediate: true });
		watch(
			()=>this.hdrLightIntensity.value, (newValue)=>{
			this.app.sceneMgr.setHDRIntensity(newValue);
		}, { immediate: true });
	}


	/**
	 * Sets up watches for the settings that need to be applied
	 * 
	 * @param {ViewportScene} viewportScene - scene to set up watches for
	 * @returns {Array<Function>} - array of functions to remove the watches
	 */
	registerWatches(viewportScene){

		const clearWatches = [];
		return clearWatches;
	}
}
