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
		<div ref="viewportContainerEl" class="container"></div>

		<!-- a select combo for view modes -->
		<div class="view-mode-select">
			<select @change="setCamera(tq.camera, $event.target.value)">
				<option value="free">Free</option>
				<option value="top">Top</option>
				<option value="bottom">Bottom</option>
				<option value="left">Left</option>
				<option value="right">Right</option>
				<option value="front">Front</option>
				<option value="back">Back</option>
			</select>
		</div>

	</div>
	
</template>
<script setup>

// vue
import { onMounted, onUnmounted, ref, inject } from 'vue';

// our app
import ViewportScene from '@/classes/ViewportScene';

// get our app & instantiate a local ThreeQuery
const app = inject('app');
const scene = app.sceneMgr.scene;

// our element to mount the viewport to
const viewportContainerEl = ref(null);

// build in Mount ThreeQuery renderer stuffs when we mount
let viewportScene = null;
onMounted(()=>{

	// create a new ViewportScene instance
	viewportScene = new ViewportScene(scene, viewportContainerEl.value);

	// set the camera to the default view
	viewportScene.setCamera('free');

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

			// fill container, but observer padding
			width: 100%;
			height: 100%;
			
			border-radius: 5px;
			overflow: clip;
			
		}// .container

		// for debug
		/* border: 2px solid red; */

	}// .viewport-window

</style>
