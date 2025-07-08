/*
	AssetMgr.js
	-----------

	This file will provide a class that manages the list of 3D objects
	that the user can drag-and-drop into the scene.

	It will mainly be hardcoded state for the sake of this example,
	but maybe in the future we could support importing models from files.
*/

// vue
import { shallowRef } from "vue";

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

		/*
			Items we'll support:
			Cube
			Sphere
			Torus
			Cone
			Cylinder
			Dodecahedron
			Icosahedron
			Octahedron
			Tetrahedron
		*/

		// initialize the assets list with some hardcoded assets
		this.assets = shallowRef([
			{ id: 1, name: "Cube" },
			{ id: 2, name: "Sphere" },
			{ id: 3, name: "Torus" },
			{ id: 4, name: "Cone" },
			{ id: 5, name: "Cylinder" },
			{ id: 6, name: "Dodecahedron" },
			{ id: 7, name: "Icosahedron" },
			{ id: 8, name: "Octahedron" },
			{ id: 9, name: "Tetrahedron" }
		]);
	}
	
}
