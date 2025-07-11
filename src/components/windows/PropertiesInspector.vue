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
				<div v-if="!sceneMgr.selectedItem.item==null" class="no-selection">
					Select an item to see and edit its properties
				</div>

				<!-- Properties Table -->
				<template v-else>

					<!-- Properties Section -->
					<div class="section-header">Properties</div>

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

					<!-- Transform Section -->
					<div class="section-header">Transform</div>

					<Vector3Row label="Position" :vector="sceneMgr.selectedItem.position" />
					<Vector3Row label="Rotation" :vector="sceneMgr.selectedItem.rotation" isRotation />
					<Vector3Row label="Scale" :vector="sceneMgr.selectedItem.scale" />

					<!-- Material Section -->
					<div class="section-header">Material</div>

					<PropertyRow label="Color">
						<input type="color" :value="sceneMgr.selectedItem.color.value" @input="onColorInput($event)" />
					</PropertyRow>

					<PropertyRow label="Roughness">
						<input type="range" min="0" max="1" step="0.01" v-model.number="sceneMgr.selectedItem.roughness.value" />
					</PropertyRow>

					<PropertyRow label="Metalness">
						<input type="range" min="0" max="1" step="0.01" v-model.number="sceneMgr.selectedItem.metalness.value" />
					</PropertyRow>

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

	.properties-inspector-window {

		position: absolute;
		inset: 0px;
		width: 100%;
		height: 100%;
		background: lightgray;

		.ro {
			background: #CCC;
			color: rgba(0, 0, 0, 0.75);
			/* font-style: italic; */
		}
		
		.items-list {

			user-select: none;
			-webkit-user-select: none;
			position: absolute;
			inset: 0;
			background: rgba(0, 0, 0, 0.5);
			border-right: 1px solid rgba(255, 255, 255, 0.2);

			overflow-x: auto;

			.list {

				min-width: 320px;
				/* border: 1px solid red; */

				position: absolute;
				inset: 10px 10px 10px 10px;
				background: rgba(0, 0, 0, 0.7);
				border-radius: 5px;
				overflow-y: auto;
				overflow-x: hidden;
				padding: 10px;
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

				.property-row {
					display: flex;
					align-items: center;
					padding: 4px 0;
					border-radius: 4px;
					background: rgba(255, 255, 255, 0.15);
					margin-bottom: 4px;

					&:nth-child(even) {
						background: rgba(255, 255, 255, 0.2);

					}// &:nth-child(even)

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

			}// .list

		}// ..items-list

	}// .properties-inspec
</style>
