<!--
	Viewport.vue
	------------

	This will use ThreeJS / ThreeQuery to render the scene.

	It will use the scene provided in our state, but it will make it's own:
	- ThreeQuery instance
	- Camera
	- OrbitControls
	- Renderer
-->
<template>

	<div class="viewport-window">

		<!-- we'll mount the ThreeJS renderer canvas in this element -->
		<div 
			ref="viewportContainerEl"
			class="container"
			:style="{
				background: app.settingsMgr.backgroundColor.value || 'black',
			}"
		></div>

		<!-- a select combo for view modes -->
		<div class="view-mode-select">
			<select 
				@change="viewportScene.setCamera($event.target.value)"
				v-model="initialSide"
			>
				<option value="free">Free</option>
				<option value="top">Top</option>
				<option value="bottom">Bottom</option>
				<option value="left">Left</option>
				<option value="right">Right</option>
				<option value="front">Front</option>
				<option value="back">Back</option>
			</select>
		</div>

		<!-- home button, only shown if we're in orbit mode -->
		<div 
			v-if="showOrbit"
			class="home-button"
			@click="viewportScene.setOrbitCameraToDefaultView()"
		>
			<span class="material-icons">home</span>
		</div>

	</div>
	
</template>
<script setup>

// vue
import { onMounted, onUnmounted, ref, shallowRef, inject, computed } from 'vue';

// our app
import ViewportScene from '@/classes/ViewportScene';

// get our app & instantiate a local ThreeQuery
const app = inject('app');
const scene = app.sceneMgr.scene;

// our element to mount the viewport to
const viewportContainerEl = ref(null);

// take the initial side as a property
const props = defineProps({

	// initial side to start with
	side: {
		type: String,
		default: 'free'
	}
});

const initialSide = ref(props.side);


// build in Mount ThreeQuery renderer stuffs when we mount
let viewportScene = shallowRef(null);
onMounted(()=>{

	// create a new ViewportScene instance
	viewportScene.value = new ViewportScene(app, scene, viewportContainerEl.value);

	// set the camera to the default view
	viewportScene.value.setCamera(props.side);

});

const showOrbit = computed(() => {
  return viewportScene.value?.orbit?.value === true;
});



// clean up when we unmount
onUnmounted(()=>{

	// destroy the viewport scene
	if (viewportScene) {
		viewportScene.destruct();
		viewportScene = null;
	}

});


</script>
<style lang="scss" scoped>

	// simply fill the parent container with some optional debug border
	.viewport-window {

		// fill container
		position: absolute;
		inset: 0px 0px 0px 0px;
		width: 100%;
		height: 100%;

		background: RGB(105,105,105);
		padding: 10px;

		// container where we'll mount the canvas for 3js
		.container {

			// for debug
			// border: 1px solid red;
			background: black;

			// fill container, but observer padding
			width: 100%;
			height: 100%;
			
			border-radius: 5px;
			overflow: clip;
			
		}// .container

		// for debug
		/* border: 2px solid red; */


		// select box for view modes
		.view-mode-select {

			// fixed on top left
			position: absolute;
			top: 20px;
			left: 20px;

			select {

				// make pretty round select
				border-radius: 5px;
				background: rgba(0, 0, 0, 0.5);
				color: #EFEFEF;
				border: 2px solid rgba(255, 255, 255, 0.8);
				padding: 5px 10px;
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

		}// .view-mode-select

		// reset view home button
		.home-button {

			// fixed on top right
			position: absolute;
			top: 20px;
			right: 20px;

			width: 32px;
			height: 32px;

			// make it look like a button
			background: rgba(0, 0, 0, 0.5);
			color: #EFEFEF;
			border: 2px solid rgba(255, 255, 255, 0.8);
			padding: 5px 10px;
			border-radius: 5px;
			cursor: pointer;
			text-align: center;

			&:hover {
				background: rgba(255, 255, 255, 0.5);
			}
			
			span {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

		}// .home-button

	}// .viewport-window

</style>
