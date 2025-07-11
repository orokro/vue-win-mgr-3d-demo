/*
	App.js
	------

	This file will provide the main application class for the project.

	It will be instantiated once in our App.vue component & will
	be the entry point for the application State.

	------

	Overview:

	This application is a mainly a pointless app just to demonstrate the use of my vue-win-mgr library.

	However, because a static example is boring, we'll build a little 3D app to show it off.

	At the time of writing, this app will consist of a few different views, that will be "windows" in the
	vue-win-mgr library.

	The way it works is like this - you create a number of components, that work on their own,
	and have their own state solution - completely unrelated to the vue-win-mgr library. In this case,
	I'm using vanilla-JS classes with refs, shallowRefs, and etc, to manage the state of the application.

	However, any state solution could be used.

	Anyway, these components, can then be passed in as an array to the vue-win-mgr library, which will
	allow them to be mounted, moved, snapped, dragged, split, docked, tabbed, etc.

	Therefore, let's discuss the views (windows) we'll be building;
	- 3D view port - this will show a number of objects loaded into our logical 'scene' using ThreeJS (specifically also three-query)
	- Scene view - this will allow the user to see the objects in the scene, and select them, as well as add new objects to the scene.
	- Assets view - show list of available 3d models to add to the scene
	- Inspector view - this will allow the user to inspect the objects in the scene, and change their properties, such as position, rotation, scale, etc.
	- Settings view - this will allow the user to change the settings of the application, such as the background color, camera position, etc.
	- Notes - a basic text editor in a window
	- About - a basic about page, with some information about the app, library, and its author

	Right, so the application state will be pretty simple:
	- List of available objects to add to the scene
	- List of objects in the scene
	- List of notes & their contents
	- Settings like:
		- lighting
		- bg color
		- show grid
	
	For the actual objects in the scene themselves, we'll use their ThreeQuery state for stuff like color, position, rotation, scale, etc.

	We'll use a an orbit controller for the camera & a grid helper for the scene.
*/

// our app classes
import SceneMgr from "./SceneMgr";
import AssetMgr from "./AssetMgr";
import NoteMgr from "./NoteMgr";
import SettingsMgr from "./SettingsMgr";

import { WindowManagerContext } from "vue-win-mgr";

// main export
export default class App {

	/**
	 * Constructor for the App class.
	 */
	constructor(){

		// once the app mounts this will be set
		// so we can interact with the window manager system
		this.wc = null;

		// build a new scene, asset, note, and settings managers
		this.sceneMgr = new SceneMgr(this);
		this.assetMgr = new AssetMgr(this);
		this.noteMgr = new NoteMgr(this);
		this.settingsMgr = new SettingsMgr(this);
	}


	/**
	 * Saves the window manager context to the app instance.
	 * 
	 * @param {WindowManagerContext} winMgrContext - context for our window manager
	 */
	setWindowManagerContext(winMgrContext) {
		this.wc = winMgrContext;
	}

}
