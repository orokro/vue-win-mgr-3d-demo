<!--
	App.vue
	-------

	The main entry component for the application.
-->
<template>
	<main>
		3D app
	</main>
</template>
<script setup>

// vue
import { onMounted } from 'vue';

// our app classes
import App from './classes/App.js';

// instantiate the app
const app = new App();

// for debug, we'll provide it to the window context so it will be available in the console
onMounted(() => {
	window.app = app;
});

</script>
<style lang="scss" scoped>
	header {
		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
