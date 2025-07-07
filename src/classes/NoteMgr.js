/*
	NoteMgr.js
	----------

	As mentioned in the description on top of App.js,
	this App will provide a note-taking system as a way to demonstrate
	state shared between windows.

	This file provides a class will manage the list of notes, their contents,
	and provide methods to add, remove, and update notes.
*/

import App from "./App";

// main export
export default class NoteMgr {

	/**
	 * Constructor for the NoteMgr class.
	 * 
	 * @param {App} app - the main App instance
	 */
	constructor(app){

		// store the app instance
		this.app = app;

		// initialize the notes list
		this.notes = [];
	}

}
