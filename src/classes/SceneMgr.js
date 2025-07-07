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

// main export
export default class SceneMgr {

	/**
	 * Constructor for the SceneMgr class.
	 * 
	 * @param {App} app - the main App instance
	 */
	constructor(app){

		// store the app instance
		this.app = app;

	}

}
