<!--
	App.vue
	-------

	The main entry component for the application.
-->
<template>

	<div class="testSpot a">
		<Viewport />
	</div>
	<div class="testSpot b">
		<!-- <Notes /> -->
		<About />
	</div>

</template>
<script setup>

// vue
import { onMounted, provide } from 'vue';

// components
import Viewport from './components/windows/Viewport.vue';
import Notes from './components/windows/Notes.vue';
import About from './components/windows/About.vue';

// our app classes
import App from './classes/App.js';


// instantiate the app
const app = new App();

// we'll provide the app for dependency injection in whatever windows mount
provide('app', app);

// for debug, we'll provide it to the window context so it will be available in the console
onMounted(() => {
	window.app = app;
});

</script>
<style lang="scss" scoped>

	body {
		background: rgb(5, 5, 66);
		/* background: red; */
	}

	// before we introduce the window manager, we'll use some fixed-positioned boxes to test
	// out the components
	.testSpot {

		// for now, fixed sized box
		position: absolute;
		left: 50px;
		top: 50px;
		width: 640px;
		height: 480px;

		&.a {
			left: 50px;
		}
		&.b {
			left: 700px;
		}

		// border & bg
		border: 2px solid gray;
		border-radius: 5px;
		background: gray;

	}// .testSpot

</style>
