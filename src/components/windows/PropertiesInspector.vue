<!--
	PropertiesInspector.vue
	-----------------------

	This is the panel with the list of settings that can be used to tweak the 3D objects in the scene.
-->
<template>

	<!-- outermost wrapper -->
	<div class="properties-inspector-window">

		<div class="items-list mac-bar">

			<div class="list mac-bar">

				<!-- No item selected -->
				<div v-if="sceneMgr.selectedItem.id.value==null" class="no-selection">
					Select an item to see and edit its properties
				</div>

				<!-- Properties Table -->
				<template v-else>

					<!-- Properties Section -->
					<div class="section-header">Properties</div>

					<div class="property-group">
						<PropertyRow label="ID">
							<input type="text" :value="sceneMgr.selectedItem.id.value" class="ro" readonly />
						</PropertyRow>

						<PropertyRow label="Name">
							<input type="text" v-model="sceneMgr.selectedItem.name.value" />
						</PropertyRow>

						<PropertyRow label="Visible">
							<input type="checkbox" v-model="sceneMgr.selectedItem.visible.value" />
						</PropertyRow>

						<PropertyRow label="Wireframe">
							<input type="checkbox" v-model="sceneMgr.selectedItem.wireframe.value" />
						</PropertyRow>
					</div>

					<!-- Transform Section -->
					<div class="section-header">Transform</div>

					<div class="property-group">
						<Vector3Row label="Position" :vector="sceneMgr.selectedItem.position" />
						<Vector3Row label="Rotation" :vector="sceneMgr.selectedItem.rotation" isRotation />
						<Vector3Row label="Scale" :vector="sceneMgr.selectedItem.scale" />
					</div>

					<!-- Material Section -->
					<div class="section-header">Material</div>

					<div class="property-group">
						<PropertyRow label="Color">
							<div class="colorInputWrapper">
								<input type="color" :value="sceneMgr.selectedItem.color.value" @input="onColorInput($event)" />
							</div>
						</PropertyRow>

						<PropertyRow label="Roughness">
							<input type="range" min="0" max="1" step="0.01" v-model.number="sceneMgr.selectedItem.roughness.value" />
						</PropertyRow>

						<PropertyRow label="Metalness">
							<input type="range" min="0" max="1" step="0.01" v-model.number="sceneMgr.selectedItem.metalness.value" />
						</PropertyRow>
					</div>

				</template>

			<!-- /.list -->
			</div>

		<!-- /.items-list -->
		</div>

	<!-- /.properties-inspector-window -->
	</div>
	
</template>
<script setup>

// vue
import { inject, computed, defineComponent, ref, watch } from 'vue';

// components
import PropertyRow from '../PropertyRow.vue';
import Vector3Row from '../Vector3Row.vue';

// app state
const app = inject('app');
const sceneMgr = app.sceneMgr;

// update material color from input
function onColorInput(e) {

	if (!sceneMgr.selectedItem.item==null)
		return;
		sceneMgr.selectedItem.color.value = (e.target.value);
}

</script>
<style lang="scss" scoped>

	// outmost window
	.properties-inspector-window {

		// fill parent container
		position: absolute;
		inset: 0px;
		width: 100%;
		height: 100%;
		background: lightgray;

		// the read-only input box
		.ro {
			background: #CCC;
			color: rgba(0, 0, 0, 0.75);
		}
		
		// the area where items are listed (i.e. the dark bg box)
		.items-list {

			// disable text selection, except for the inputs
			user-select: none;
			-webkit-user-select: none;

			// fill window basically
			position: absolute;
			inset: 0;
			background: rgba(0, 0, 0, 0.5);
			border-right: 1px solid rgba(255, 255, 255, 0.2);

			// this outer container can scroll horizontally,
			// because the props will have a min-width
			overflow-x: auto;

			// this will be the vertical scrolling list
			.list {

				// min size
				min-width: 320px;
				/* border: 1px solid red; */

				// fill the container
				position: absolute;
				inset: 10px 10px 10px 10px;
				background: rgba(0, 0, 0, 0.7);
				border-radius: 5px;
				
				padding: 10px;

				// the vertical list only needs to scroll vertically
				overflow-y: auto;
				overflow-x: hidden;

				// text settings
				color: white;
				font-size: 14px;

				.no-selection {
					padding: 10px;
					color: #ccc;
					text-align: center;

				}// .no-selection

				.section-header {
					font-weight: bold;
					color: #00abae;
					margin: 10px 0 5px;

				}// .section-header

				// group resets the nth-child styles
				.property-group {

					// our rows of properties
					.property-row {

						display: flex;
						align-items: center;
						padding: 8px 0;
						
						
						margin-bottom: 0px;

						// toggle background color for rows
						background: rgba(255, 255, 255, 0.15);
						&:nth-child(even) {
							background: rgba(255, 255, 255, 0.2);

						}// &:nth-child(even)

						// only round first/last row
						border-radius: 0px;
						&:first-child {
							border-radius: 4px 4px 0px 0px;
						}
						&:last-child {
							border-radius: 0px 0px 4px 4px;
						}
						

						.label {
							width: 100px;
							padding-left: 10px;

						}// .label

						.value {
							flex: 1;
							display: flex;
							flex-wrap: wrap;

							input[type='text'],
							input[type='range'],
							input[type='color'] {
								margin-left: 8px;
								padding: 3px 6px;
								border-radius: 3px;
								border: none;
								accent-color: #00ABAE;
							}

							input[type='checkbox'] {
								accent-color: #00abae;
								margin-left: 6px;
								transform: scale(1.2);
							}

							// wrap the color input so we can get rid of the uggo border
							.colorInputWrapper {

								// for absolute positioning of the color input
								position: relative;

								// allow nothing to escape so we can clip the uggo border on the input	
								overflow: clip;

								// fixed size box
								width: 40px;
								height: 20px;								
								margin-left: 8px;
								border: 2px solid black;
								border-radius: 5px;

								// make the input bigger than our container, so we clip it's ugly border
								input[type='color'] {
									
									// deliberately larger than the wrapper
									position:absolute;
									inset: -10px -10px -10px -20px;
									width: 60px;
									height: 40px;
									cursor: pointer;
								}

							}// .colorInputWrapper

							.vector3 {

								display: flex;
								gap: 6px;

								.vector-input {
									display: flex;
									align-items: center;
									gap: 4px;

									input {
										width: 50px;
										text-align: right;
										
									}

									.invalid {
										background: #ffaaaa;
									}

								}// .vector-input

							}// .vector3
							
						}// .value

					}// .property-row

				}// .property-group

			}// .list

		}// ..items-list

	}// .properties-inspec
</style>
