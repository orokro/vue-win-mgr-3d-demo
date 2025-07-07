/*
	AssetMgr.js
	-----------

	This file will provide a class that manages the list of 3D objects
	that the user can drag-and-drop into the scene.

	It will mainly be hardcoded state for the sake of this example,
	but maybe in the future we could support importing models from files.
*/

// our app classes
import App from "./App";

// main export
export default class AssetMgr {

	/**
	 * Constructor for the AssetMgr class.
	 * 
	 * @param {App} app - the main App instance
	 */
	constructor(app){

		// store the app instance
		this.app = app;

		// initialize the assets list with some hardcoded assets
		this.assets = [
			{ id: 1, name: "Cube", model: "cube.glb" },
			{ id: 2, name: "Sphere", model: "sphere.glb" },
			{ id: 3, name: "Torus", model: "torus.glb" }
		];
	}
}
