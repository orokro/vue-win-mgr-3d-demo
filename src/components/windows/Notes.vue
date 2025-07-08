<!--
	Notes.vue
	---------

	This is the component that shows our note-editor window.

	It will simply show a (left) column of notes & a (right) column of the note editor.

	It will also have a button to add notes, the ability to delete notes via (x), & 
	rename them inline if clicked.
-->
<template>

	<div class="note-window">

		<!-- left column of notes -->
		<div class="notes-list">

			<div class="header">My Notes:</div>

			<!-- list box containing the notes & add button -->
			<div class="list">

				<!-- loop through notes -->
				<div 
					v-for="note in noteMgr.notes.value"
					:key="note.id"
					class="note-item"
					:class="{ selected: noteMgr.selectedNote.value === note.id }"
					@click="noteMgr.selectNote(note)"
				>
					<!-- note title, editable on click -->
					<div class="note-title">
						{{ note.title.value }}
					</div>

					<!-- delete button -->
					<div class="delete-button" @click.stop="noteMgr.deleteNote(note)">
						<span class="icon">x</span>
					</div>
				</div>

				<!-- button to add notes -->
				<div class="add-note-button" @click="noteMgr.addNote()">
					<span class="icon">+</span>
				</div>

			<!-- /.list -->
			</div>

		<!-- /.notes-list -->
		</div>

		<!-- the right column w/ the title edit box & the content edit box -->
		<div
			v-if="noteMgr.selectedNote.value!=null"
			class="note-editor"
		>
			<!-- input for the selected note's title -->
			<div class="note-title-input">
				<input 
					type="text" 
					placeholder="Note Title"
					v-model="noteMgr.selectedNoteObject.value.title.value"
				/>
			</div>

			<!-- content text area, not resizable -->
			<div class="note-content-input">
				<textarea 
					placeholder="Note Content"
					v-model="noteMgr.selectedNoteObject.value.content.value"
					rows="10"
					style="width: 100%; resize: none;"
				></textarea>
			</div>

		<!-- /.note-editor -->
		</div>

		<!-- show blurb if no valid note is selected -->
		<div v-else class="note-select-blurb">
			<p>Select a note to edit it, or click the "+" button to create a new note.</p>
		</div>

	</div>

</template>
<script setup>

// vue
import { ref, onMounted, inject } from 'vue';

// get our app & note manager state systems
const app = inject('app');
const noteMgr = app.noteMgr;

</script>
<style lang="scss" scoped>

	// outermost wrapper, fills the container it's mounted in
	.note-window {

		// fill container
		position: absolute;
		inset: 0px 0px 0px 0px;
		width: 100%;
		height: 100%;

		// notes box styles
		background: lightgray;

		// for debug
		/* border: 1px solid rgba(255, 255, 255, .2); */
		
		// abso-lutely positioned left column
		.notes-list {

			// no text selection
			user-select: none;
			-webkit-user-select: none;

			// fit on left
			position: absolute;
			inset: 0px auto 0px 0px;
			width: 170px;

			// box styling
			background: rgba(0, 0, 0, 0.5);
			border-right: 1px solid rgba(255, 255, 255, .2);

			// header fixed on top
			.header {

				// fixed on top of left column
				position: absolute;
				inset: 0px 0px auto 0px;
				height: 30px;

				// for debug
				/* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */

				// text settings
				color: #EFEFEF;
				font-weight: bolder;
				padding: 4px 15px;

			}// .header

			// the list box containing notes:
			.list {

				// fixed under the header
				position: absolute;
				inset: 30px 10px 10px 10px;

				// darker than container	
				background: rgba(0, 0, 0, 0.7);
				border-radius: 5px;

				// scroll settings
				overflow-y: auto;
				overflow-x: hidden;

				// the row for a note in the list
				.note-item {

					// fixed height
					height: 40px;
					position: relative;

					// alternate bg color
					background: rgba(255, 255, 255, 0.2);
					&:nth-child(even) {
						background: rgba(255, 255, 255, 0.15);
					}

					&:first-child {
						border-top-left-radius: 3px;
						border-top-right-radius: 3px;
					}

					&:last-child {
						border-bottom-left-radius: 3px;
						border-bottom-right-radius: 3px;
					}

					// title for the note
					.note-title {

						// fill container, but leave room for (X)
						position: absolute;
						inset: 0px 15px 0px 0px;

						padding: 10px 10px;
						// text settings
						color: white;
						font-weight: bolder;
						text-wrap: nowrap;
						text-overflow: ellipsis;

						// for debug
						/* border: 1px solid red; */
					}// .note-title

					&:hover {
						// show the delete button on hover
						.delete-button {
							opacity: 1;
						}
					}

					// delete button on right
					.delete-button {

						// hidden until we over over the entire thing
						opacity: 0;

						// fixed on right
						position: absolute;
						inset: 0px 0px 0px auto;
						width: 30px;
						height: 100%;

						// center the "x"
						text-align: center;
						line-height: 40px;

						// text settings
						color: white;
						font-weight: bolder;
						cursor: pointer;

						// fade & hover
						transition: all .2s ease-in-out;
						&:hover {
							background: rgba(255, 255, 255, 0.3);
						}

						// the "x" icon
						.icon {
							font-size: 24px;
							position: relative;
							top: -2px;
						}

					}// .delete-button

					// mmm teal when selected
					&.selected {
						background: #00ABAE
					}

				}// .note-item

				// teal button to add notes
				.add-note-button {

					// teal circle
					background: #00ABAE;
					width: 30px;
					height: 30px;
					border-radius: 50%;

					// fixed on bottom-right
					position: absolute;
					inset: auto 10px 10px auto;
					text-align: center;

					// appear clickable to user
					cursor: pointer;
					
					// fade & hover
					transition: all .2s ease-in-out;
					&:hover {
						background: #00CBCE;
					}
					
					// the "+" icon
					span {
						font-size: 24px;
						font-weight: bolder;
						color: white;
						position: relative;
						top: -3px;
					}

				}// .add-note-button

			}// .list

		}// .notes-list

		// right column, the note editor w/ title text box & content text box
		.note-editor {

			// fixed on right side
			position: absolute;	
			inset: 0px 0px 0px 170px;
			min-width: 150px;
			min-height: 150px;			

			// title row
			.note-title-input {

				position: absolute;
				inset: 0px 0px auto 0px;
				height: 60px;
				padding: 10px;

				input {
					width: 100%;
					height: 100%;

					padding: 10px;
					border-radius: 6px;
					border: 2px solid rgba(0, 0, 0, .5);
					outline: none;
					background: rgba(255, 255, 255, .5);

				}// input

			}// .note-title-input

			// actual content input box
			.note-content-input {

				position: absolute;
				inset: 60px 10px 10px 10px;

				// text area
				textarea {
					width: 100%;
					height: 100%;
					padding: 10px;
					border-radius: 6px;
					border: 2px solid rgba(0, 0, 0, .5);
					outline: none;
					background: rgba(255, 255, 255, .5);
					color: black;
					font-family: monospace;
				}// textarea

			}// .note-content-input

		}// .note-editor

		// show msg w/ instructions if no note is selected
		.note-select-blurb {

			// fill right column
			position: absolute;
			inset: 0px 0px 0px 170px;
			min-width: 150px;
			min-height: 150px;

			p {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				// text settings
				color: gray;
				font-size: 22px;
				text-align: center;
				font-style: italic;

				// padding
				padding: 20px;

				background: rgba(255, 255, 255, .5);
				border-radius: 10px;


				/* border: 1px solid red; */
			}

		}// .note-select-blurb

	}// .note-window

</style>
