<template>
	<div class="properties-inspector-window">
		<div class="items-list">
			<div class="header">Properties Inspector</div>

			<div class="list">
				<!-- No item selected -->
				<div v-if="!selectedItem" class="no-selection">
					Select an item to see and edit its properties
				</div>

				<!-- Properties Table -->
				<template v-else>
					<!-- Properties Section -->
					<div class="section-header">Properties</div>

					<PropertyRow label="ID">
						<input type="text" :value="selectedItem.id" readonly />
					</PropertyRow>

					<PropertyRow label="Name">
						<input type="text" v-model="selectedItem.name.value" />
					</PropertyRow>

					<PropertyRow label="Visible">
						<input type="checkbox" v-model="selectedItem.mesh.visible" />
					</PropertyRow>

					<!-- Transform Section -->
					<div class="section-header">Transform</div>

					<Vector3Row label="Position" :vector="selectedItem.mesh.position" />
					<Vector3Row label="Rotation" :vector="selectedItem.mesh.rotation" isRotation />
					<Vector3Row label="Scale" :vector="selectedItem.mesh.scale" />

					<!-- Material Section -->
					<div class="section-header">Material</div>

					<PropertyRow label="Color">
						<input type="color" :value="selectedItem.mesh.material.color.getStyle()" @input="onColorInput($event)" />
					</PropertyRow>

					<PropertyRow label="Roughness">
						<input type="range" min="0" max="1" step="0.01" v-model.number="selectedItem.mesh.material.roughness" />
					</PropertyRow>

					<PropertyRow label="Metalness">
						<input type="range" min="0" max="1" step="0.01" v-model.number="selectedItem.mesh.material.metalness" />
					</PropertyRow>
				</template>
			</div>
		</div>
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

// computed item from selection
const selectedItem = computed(() => {
	const id = sceneMgr.selectedItemID.value;
	return id ? sceneMgr.getItemByID(id) : null;
});

// update material color from input
function onColorInput(e) {
	if (!selectedItem.value) return;
	selectedItem.value.mesh.material.color.setStyle(e.target.value);
}


</script>
<style lang="scss" scoped>
	.properties-inspector-window {
		position: absolute;
		inset: 0px;
		width: 100%;
		height: 100%;
		background: lightgray;

		.items-list {
			user-select: none;
			-webkit-user-select: none;
			position: absolute;
			inset: 0;
			background: rgba(0, 0, 0, 0.5);
			border-right: 1px solid rgba(255, 255, 255, 0.2);

			.header {
				position: absolute;
				inset: 0px 0px auto 0px;
				height: 30px;
				color: #efefef;
				font-weight: bolder;
				padding: 4px 15px;
			}

			.list {
				position: absolute;
				inset: 30px 10px 10px 10px;
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
				}

				.section-header {
					font-weight: bold;
					color: #00abae;
					margin: 10px 0 5px;
				}

				.property-row {
					display: flex;
					align-items: center;
					padding: 4px 0;
					border-radius: 4px;
					background: rgba(255, 255, 255, 0.15);
					margin-bottom: 4px;

					&:nth-child(even) {
						background: rgba(255, 255, 255, 0.2);
					}

					.label {
						width: 100px;
						padding-left: 10px;
					}

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
							}
						}
					}
				}
			}
		}
	}
</style>
