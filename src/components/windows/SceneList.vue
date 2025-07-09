<!--
	SceneList.vue
	-------------

	This component simply displays a list of the objects in the scene,
	allows them to be selected by clicking, or deleted by clicking the (X) button.

	This code is similar to the Notes thing, but we just have one column for the list.
-->
<template>

	<div class="scene-list-window">

		<!-- column of items in the scene -->
		<div class="items-list">

			<!-- list box containing the items & add button -->
			<div class="list mac-bar">

				<!-- loop through items in the scene -->
				<div 
					v-for="item in sceneMgr.sceneItems.value"
					:key="item.id"
					class="scene-item"
					:class="{ selected: sceneMgr.selectedItemID.value === item.id }"
					@click="sceneMgr.selectItem(item)"
				>
					<!-- item title -->
					<div class="item-title" >
						{{ item.name.value }}
					</div>

					<!-- delete button -->
					<div class="delete-button" @click.stop="sceneMgr.removeItem(item)">
						<span class="icon">x</span>
					</div>
				</div>

				<!-- button to add notes -->
				<!-- <div class="add-note-button" @click="sceneMgr.addNote()">
					<span class="icon">+</span>
				</div> -->

			<!-- /.list -->
			</div>

		<!-- /.items-list -->
		</div>

	</div>

</template>
<script setup>

// vue
import { ref, onMounted, inject } from 'vue';

// get our app & note manager state systems
const app = inject('app');
const sceneMgr = app.sceneMgr;

</script>
<style lang="scss" scoped>

	// outermost wrapper, fills the container it's mounted in
	.scene-list-window {

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
		.items-list {

			// no text selection
			user-select: none;
			-webkit-user-select: none;

			// fit on left
			position: absolute;
			inset: 0px 0px 0px 0px;

			// box styling
			background: rgba(0, 0, 0, 0.5);
			border-right: 1px solid rgba(255, 255, 255, .2);

			// the list box containing notes:
			.list {

				// fixed under the header
				position: absolute;
				inset: 10px 10px 10px 10px;

				// darker than container	
				background: rgba(0, 0, 0, 0.7);
				border-radius: 5px;

				// scroll settings
				overflow-y: auto;
				overflow-x: hidden;

				padding: 3px;

				// the row for a scene item in the list
				.scene-item {

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

					// title for the scene item
					.item-title {

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
					}// .item-title

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

				}// .scene-item

				/* // teal button to add notes
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

				}// .add-note-button */

			}// .list

		}// .items-list

	}// .scene-list-window

</style>
