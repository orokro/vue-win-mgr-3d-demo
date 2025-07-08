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
		this.backgroundColor = ref("#000000");
		this.showGrid = ref(true);
		this.lightingEnabled = ref(true);		
	}

}
