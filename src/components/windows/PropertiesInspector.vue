<!--
	PropertiesInspector.vue
	-----------------------

	This is the panel with the list of settings that can be used to tweak the 3D objects in the scene.
-->
<template>

	<!-- outermost wrapper -->
	<div class="properties-inspector-window">

		<div class="items-list">

			<div class="list mac-bar">

				<!-- No item selected -->
				<div v-if="!selectedItem" class="no-selection">
					Select an item to see and edit its properties
				</div>

				<!-- Properties Table -->
				<template v-else>

					<!-- PROPERTIES -->
					<div class="group">
						<div class="group-title">Properties</div>
						<PropertyRow label="ID">{{ selectedItem.id }}</PropertyRow>
						<PropertyRow label="Name"><input v-model="selectedItem.name.value" type="text" /></PropertyRow>
						<PropertyRow label="Visible"><input v-model="selectedItem.mesh.visible" type="checkbox" /></PropertyRow>
					</div>

					<!-- TRANSFORM -->
					<div class="group">
						<div class="group-title">Transform</div>
						<Vector3Row label="Position" v-model="selectedItem.mesh.position" />
						<Vector3Row label="Rotation" v-model="selectedItem.mesh.rotation" />
						<Vector3Row label="Scale" v-model="selectedItem.mesh.scale" />
					</div>

					<!-- MATERIAL -->
					<div class="group">
						<div class="group-title">Material</div>
						<PropertyRow label="Color">
							<input type="color" v-model="materialColor" />
						</PropertyRow>
						<PropertyRow label="Roughness">
							<input type="range" min="0" max="1" step="0.01" v-model.number="selectedItem.mesh.material.roughness" />
						</PropertyRow>
						<PropertyRow label="Metalness">
							<input type="range" min="0" max="1" step="0.01" v-model.number="selectedItem.mesh.material.metalness" />
						</PropertyRow>
					</div>

				</template>

			</div>
		</div>

	</div>
</template>

<script setup>

// vue
import { inject, computed } from "vue";

// widgets
import PropertyRow from "../PropertyRow.vue";
import Vector3Row from "../Vector3Row.vue";

// inject the app
const app = inject("app");

// return the selected item object
const selectedItem = computed(() => {
	const id = app.sceneMgr.selectedItemID.value;
	return app.sceneMgr.getItemByID(id);
});

// computed color string
const materialColor = computed({
	get() {
		if (!selectedItem.value) return '#000000';
		return `#${selectedItem.value.mesh.material.color.getHexString()}`;
	},
	set(value) {
		if (!selectedItem.value) return;
		selectedItem.value.mesh.material.color.set(value);
	}
});

</script>

<style scoped lang="scss">

	// outer
	.properties-inspector-window {

		height: 100%;
		display: flex;
		flex-direction: column;
		background: #1c1c1c;

		.items-list {
			flex: 1;
			overflow: auto;
			padding: 10px;
		}

		.no-selection {
			padding: 20px;
			font-size: 15px;
			color: #aaa;
			font-style: italic;
			text-align: center;
		}

		.group {
			margin-bottom: 20px;
		}

		.group-title {
			font-size: 14px;
			font-weight: bold;
			color: #0ff;
			margin: 10px 0;
			border-bottom: 1px solid #444;
			padding-bottom: 3px;
		}
	}

</style>
