/*
	NoteMgr.js
	----------

	As mentioned in the description on top of App.js,
	this App will provide a note-taking system as a way to demonstrate
	state shared between windows.

	This file provides a class will manage the list of notes, their contents,
	and provide methods to add, remove, and update notes.
*/

// vue
import { shallowRef, ref, computed } from "vue";

// our app classes
import App from "./App";

// main export
export default class NoteMgr {

	// for generating unique note IDs
	static noteIDCounter = 0;

	/**
	 * Constructor for the NoteMgr class.
	 * 
	 * @param {App} app - the main App instance
	 */
	constructor(app){

		// store the app instance
		this.app = app;

		// initialize the notes list
		this.notes = shallowRef([]);

		// we'll store the ID of the currently selected note, or null if none
		this.selectedNote = ref(null);
		this.selectedNoteObject = computed(() => {
			return (
				this.selectedNote.value!=null
				? 
				this.getNoteByID(this.selectedNote.value) 
				: 
				null);
		});

		// populate with demo notes if needed
		this.addDemoNotes();
	}


	/**
	 * To demonstrate the app, we'll populate it with some demo content
	 */
	addDemoNotes(){

		// add a welcome note first
		const welcomeNote = this.addNote();
		this.setNoteName(welcomeNote.id, "Welcome Note");
		this.setNoteContent(welcomeNote.id, 
			`This is a demo note to show how the note-taking system works.
			\n\nYou can add, remove, and update notes as you wish.
			\n\nEnjoy! :)`
		);

		// add a fun second note
		const funNote = this.addNote();
		this.setNoteName(funNote.id, "Fun Note");
		this.setNoteContent(funNote.id, 
			`This is a fun note to show how the note-taking system works.
			\n\nYou can add, remove, and update notes as you wish.
			\n\nHave fun! :)`
		);

		// add a third note for good measure
		const thirdNote = this.addNote();
		this.setNoteName(thirdNote.id, "Third Note");
		this.setNoteContent(thirdNote.id, 
			`This is the third note to show how the note-taking system works.
			\n\nYou can add, remove, and update notes as you wish.
			\n\nThis is just a demo note.`
		);
		
		// select our welcome msg by default
		this.selectNote(welcomeNote.id);
	}


	/**
	 * Selects a note
	 * 
	 * @param {Object|Number} noteOrNoteID - the note object or its ID to select
	 * @returns {Boolean} - true if the note was found and selected, false otherwise
	 */
	selectNote(noteOrNoteID){

		// if we got a note, use its ID, otherwise use the note ID directly
		const noteID = typeof noteOrNoteID === "object" ? noteOrNoteID.id : parseInt(noteOrNoteID, 10);

		// find the note by ID
		const note = this.getNoteByID(noteID);
		if(note) {

			// set the selected note to this one
			this.selectedNote.value = noteID;
			return true;
		}

		// if not found, set selected to null
		this.selectedNote.value = null;
		return false;
	}


	/**
	 * Clears the selection, if any
	 * 
	 * @returns {Boolean} - true if a note is selected, false otherwise
	 */
	selectNone(){
		
		// clear selection & gtfo
		this.selectedNote.value = null;
		return true;
	}


	/**
	 * Creates a note
	 * 
	 * @returns {Object} - the newly created note object
	 */
	addNote(){

		// make new note details.
		const newNote = {
			id: NoteMgr.noteIDCounter++,
			title: ref(`Note ${NoteMgr.noteIDCounter}`),
			content: ref(""),
			createdAt: new Date(),
			updatedAt: ref(new Date())
		};

		// add it to the notes list
		this.notes.value = [...this.notes.value, newNote];

		// select new note automatically
		this.selectNote(newNote.id);
		
		// return the new note
		return newNote;
	}


	/**
	 * Gets a note by its ID
	 * 
	 * @param {Number} id - the ID of the note to remove
	 * @returns {note|null} - the removed note or null if not found
	 */
	getNoteByID(id) {

		// find the note by ID
		id = parseInt(id, 10);
		const note = this.notes.value.find(n => n.id === id);

		// return the note if found, otherwise null
		return note || null;
	}


	/**
	 * Deletes note
	 * @param {Object} note - note ref to delete
	 * @returns {Boolean} - true if the note was deleted, false if not
	 */
	deleteNote(note){

		// gtfo if note is not an object or has no ID
		if(note==null || typeof note !== "object" || !note.id)
			return false;
		this.deleteNoteByID(note.id);
	}


	/**
	 * Deletes note via ID
	 */
	deleteNoteByID(id) {

		// ensure the ID is an integer
		id = parseInt(id, 10);

		// before we delete it, deselect it if it was selected
		if(this.selectedNote.value === id)
			this.selectNone();
		
		// filter that sombitty out of the notes list
		this.notes.value = this.notes.value.filter(n => n.id !== id);
	}


	/**
	 * Updates / sets notes name
	 * 
	 * @param {Number} id - the ID of the note to update
	 * @param {String} name - the new name for the note
	 * @returns {note|boolean} - the updated note or false if not found
	 */
	setNoteName(id, name) {

		// get the note to update
		const note = this.getNoteByID(id);
		if(note==null)
			return false;

		// update the note's title & timestamp
		note.title.value = name;
		note.updatedAt.value = new Date();

		// just cuz we can
		return note;
	}


	/**
	 * Updates / sets notes content
	 * 
	 * @param {Number} id - the ID of the note to update
	 * @param {String} content - the new content for the note
	 * @returns {note|boolean} - the updated note or false if not found
	 */
	setNoteContent(id, content) {

		// get the note to update
		const note = this.getNoteByID(id);
		if(note==null)
			return false;

		// update the note's content & timestamp
		note.content.value = content;
		note.updatedAt.value = new Date();

		// just cuz we can
		return note;
	}

}
