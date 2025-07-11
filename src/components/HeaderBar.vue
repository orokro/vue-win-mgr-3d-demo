<!--
	HeaderBar.vue
	-------------

	The bar with buttons & links a long the top of the page
-->
<template>
	<div class="header-bar">
		
		<!-- application title -->
		<div class="block title">
			<span>vue-win-mgr 3d demo</span>
		</div>

		<!-- block with a select to select one of our available layouts -->
		<div class="block layout-select">
			Layout:
			<select v-model="currentLayout">
				<option 
					v-for="layout in availableLayouts" 
					:key="layout.slug" 
					:value="layout.slug"
				>
					{{ layout.name }}
				</option>
			</select>
			
		</div>
		<div class="block layout-select">
			<button type="button" class="add-layout-button" @click="addLayout()">
				<span class="material-icons">add</span>
			</button>
		</div>

	</div>
</template>
<script setup>

// vue
import { ref, inject, shallowRef, watch } from 'vue';

// import our layouts
import { defaultLayout, quadLayout } from '@/assets/layouts';

// which layout to show
const currentLayout = ref("default");

// available layouts:
const availableLayouts = shallowRef([
	{ name: 'Default', slug: 'default', layout: defaultLayout },
	{ name: 'Quad', slug: 'quad', layout: quadLayout }
]);

const app = inject('app');

// switch layout when the component the select box changes
watch(()=>currentLayout.value, (newLayout) => {

	// when the layout changes, update the app's layout
	const layout = availableLayouts.value.find(l => l.slug === newLayout);
	if (layout) {
		app.wc.loadLayout(layout.layout);
	}
});


/**
 * Add the users current custom layout as a new layout to the available layouts.
 */
function addLayout(){

	// get current layout from window manager context
	const layoutData = app.wc.getLayoutDetails();

	// prompt for a name w/ lazy prompt
	const layoutName = prompt("Enter a name for the new layout:", "New Layout");

	// add to our available layouts
	if (layoutName) {

		availableLayouts.value.push({
			name: layoutName,
			slug: layoutName.toLowerCase().replace(/\s+/g, '-'),
			layout: layoutData
		});

		// switch to the new layout
		currentLayout.value = availableLayouts.value[availableLayouts.value.length - 1].slug;
	}
}

</script>
<style lang="scss" scoped>

	// fill container where we mount
	.header-bar {

		// for debug:
		/* border: 1px solid red; */

		position: absolute;
		inset: 0px 0px 0px 0px;

		display: flex;

		.block {
			height: 100%;
			flex-grow: 0;
			flex-shrink: 0;

			// for debug
			/* border: 1px solid blue; */
		}

		.title {

			font-size: 20px;
			color:rgb(6, 230, 219);
			font-weight: bold;
			font-family: 'Courier New', Courier, monospace;
			text-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
			padding: 8px 10px;

			span {
				font-weight: bolder;
				background: rgba(255, 255, 255, 0.2);
				border-radius: 10px;
				padding: 2px 10px;
			}

		}// .title

		// the box with the layout settings
		.layout-select {

			padding: 7px 0px;
			color: #AAA;
			margin-left: 10px;

			select {

				// make round pretty select box
				border-radius: 5px;
				background: rgba(0, 0, 0, 0.5);
				color: #EFEFEF;
				border: 2px solid rgba(255, 255, 255, 0.8);
				padding: 2px 10px;
				font-size: 14px;
				font-family: 'Courier New', Courier, monospace;
				cursor: pointer;

				&:hover {
					background: rgba(255, 255, 255, 0.5);
				}

				&:active, &:focus {
					background: rgba(0, 0, 0, 0.5);
				}

			}// select

			// add button to add a new layout
			.add-layout-button {

				position: relative;

				border-radius: 5px;
				background: rgba(0, 0, 0, 0.5);
				color: #EFEFEF;
				border: 2px solid rgba(255, 255, 255, 0.8);
				padding: 2px 10px;

				height: 26px;
				width: 26px;

				cursor: pointer;

				span {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}

				&:hover {
					background: rgba(255, 255, 255, 0.5);
				}

				&:active, &:focus {
					background: rgba(0, 0, 0, 0.5);
				}

			}// .add-layout-button

		}// .layout-select

	}// .header-bar

</style>
