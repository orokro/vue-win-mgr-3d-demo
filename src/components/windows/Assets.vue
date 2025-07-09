<!--
	Assets.vue
	----------

	This component shows al ist of icons for 3D primitives the users can add to the scene.

	This is similar to the "assets drawer / panel" in programs like Unity or Blender.

	For now the state will hard-code a list of available shapes to drag to the scene,
	but maybe for fun in the future I'll add some file drag-n-drop support for importing
	various mesh types.
-->
<template>

	<div class="asset-list-window">

		<!-- panel of assets to add in the scene -->
		<div class="assets-list">

			<div class="header">Click and Drag Any Asset Type to the Scene:</div>

			<!-- list box containing the available primitives to add to the scene -->
			<div class="list mac-bar">

				<div class="flex-wrapper">

					<!-- loop through assets in the asset manager -->
					<div 
						v-for="item in assetMgr.assets.value"
						:key="item.id"
						class="asset-item"
						@click="sceneMgr.addItem(item.name)"
						:title="`${item.name}`"
					>
						<!-- item thumb -->
						<div class="thumbnail" align="center">
							<img
								:src="`/img/shapes/${item.name.toLowerCase()}.png`"
								height="100%"
								:alt="`${item.name}`"
							/>
						</div>

						<!-- item title -->
						<div class="item-title" >
							{{ item.name }}
						</div>

					</div>

				</div>

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
const assetMgr = app.assetMgr;

</script>
<style lang="scss" scoped>

	// outermost wrapper, fills the container it's mounted in
	.asset-list-window {

		// fill container
		position: absolute;
		inset: 0px 0px 0px 0px;
		width: 100%;
		height: 100%;

		// notes box styles
		background: lightgray;

		// for debug
		/* border: 1px solid rgba(255, 255, 255, .2); */
		
		// fill the entire space
		.assets-list {

			// no text selection
			user-select: none;
			-webkit-user-select: none;

			// fit on left
			position: absolute;
			inset: 0px 0px 0px 0px;

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

			// the list box containing assets:
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

				// so we can flex wrap without 100% height
				.flex-wrapper {

					// flex layout these items
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: 16px;
					/* align-items: flex-start; */
					justify-content: flex-start;

					padding: 5px;
					box-sizing: border-box;

					// the row for a asset in the list
					.asset-item {

						/* border: 1px solid red; */

						// fixed size
						width: 130px;
						height: 130px;
						position: relative;

						// no changey-sizey
						flex-shrink: 0;
						flex-grow: 0;

						// look clickable
						cursor: pointer;

						// light box on over
						border-radius: 5px;
						background: rgba(255, 255, 255, 0.0);
						transition: background-color 0.2s ease-in-out;
						&:hover {
							background: rgba(255, 255, 255, 0.1);
						}

						// thumbnail
						.thumbnail {

							position: absolute;
							inset: 10px 0px 20px 0px;
							/* border: 1px solid red; */
						}// .thumbnail

						// title for the note
						.item-title {

							// fill container, but leave room for (X)
							position: absolute;
							inset: auto 0px 0px 0px;

							padding: 0px 10px;

							// text settings
							text-align: center;
							color: white;
							font-weight: bolder;
							text-wrap: nowrap;
							text-overflow: ellipsis;

						}// .item-title

						&:hover {
							// show the delete button on hover
							.delete-button {
								opacity: 1;
							}
						}

					}// .asset-item

				}// .flex-wrapper

			}// .list

		}// .assets-list

	}// .asset-list-window

</style>
