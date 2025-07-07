/*
	SettingsMgr.js
	--------------

	This file provides a class to encapsulate the settings of the application.

	It will be lightly weight and mostly just a wrapper for some refs()
*/

import { ref, shallowRef } from "vue";

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

		// initialize settings with some default values
		this.settings = shallowRef({
			backgroundColor: "#000000",
			showGrid: true,
			cameraPosition: { x: 0, y: 0, z: 5 },
			lightingEnabled: true
		});
	}
}
