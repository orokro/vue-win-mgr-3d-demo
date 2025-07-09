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
		<div ref="viewportContainerEl" class="container">

		</div>
	</div>
	
</template>
<script setup>

// vue
import { onMounted, ref, inject } from 'vue';

// lib/misc
import ThreeQuery from 'three-query';

// get our app & instantiate a local ThreeQuery
const app = inject('app');
const scene = app.sceneMgr.scene;
const tq = new ThreeQuery(scene);

// our element to mount the viewport to
const viewportContainerEl = ref(null);

// build in Mount ThreeQuery renderer stuffs when we mount
onMounted(()=>{

	const container = viewportContainerEl.value;
	ThreeQuery.useScene(scene, container, {
		autoSize: true,
		autoRender: true,
		addCube: false,
		addLights: false,
		addControls: true
	});
})

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
