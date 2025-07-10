<!--
	About.vue
	---------

	This window is basically just the about page for the app.
-->
<template>

	<div class="about-window">
		<div class="page mac-bar">
			<h1>About This App!</h1><br/>
			<p>
				This App is a simple Vue 3 application to demonstrate my 
				<a href="https://github.com/orokro/Vue-Window-Manager" target="_blank">vue-win-mgr</a> library.
				This application is open source, as well as the library. This application also demonstrates my
				<a href="" target="_blank">ThreeQuery</a> library, which is a wrapper around ThreeJS to make it easier to use.
				Though, in this case the ThreeQuery library is not really used to it's full potential, so this
				really isn't a good demonstration of ThreeQuery.
			</p>
			<br/><hr><br/>
			<p>
				You can find the source code for this demo app, here on github:
				<br/><br/>
				<a href="https://github.com/orokro/vue-win-mgr-3d-demo" target="_blank"><code>vue-win-mgr-3d-demo</code> on GitHub</a>
				<br/>
				<a href="https://github.com/orokro/vue-win-mgr-3d-demo" target="_blank"><img src="/img/logos/github_logo.png" alt="GitHub Logo" height="60px" style="vertical-align: middle;"></a>
			</p>
			<br/><hr><br/>
			<p>
				For the <code>vue-win-mgr</code> library, you can find the library or the source code on github / npm:
				<br/><br/>
				<a href="https://github.com/orokro/Vue-Window-Manager" target="_blank"><code>vue-win-mgr</code> on GitHub</a>
				<br/>
				<a href="https://github.com/orokro/Vue-Window-Manager" target="_blank"><img src="/img/logos/github_logo.png" alt="GitHub Logo" height="60px" style="vertical-align: middle;"></a>
				<br/><br/>
				<a href="https://www.npmjs.com/package/vue-win-mgr?activeTab=readme" target="_blank"><code>vue-win-mgr</code> on NPM</a>
				<br/>
				<a href="https://www.npmjs.com/package/vue-win-mgr?activeTab=readme" target="_blank"><img src="/img/logos/npm_logo.png" alt="GitHub Logo" height="40px" style="margin-left: 28px; vertical-align: middle;"></a>
			</p>
			<br/><hr><br/>

			<p>
				Created by Greg Miller - 2025
				<br>
				<a href="http://gmiller.net" target="_blank">gmiller.net</a>
			</p>
		</div>
	</div>
	
</template>
<script setup>

// vue
import { ref, inject } from 'vue';

</script>
<style lang="scss" scoped>

	// main wrapper for the about window
	.about-window {

		// fill the container
		position: absolute;
		inset: 0px 0px 0px 0px;
		width: 100%;
		height: 100%;

		background: RGB(105,105,105);
		// spacing
		
		padding: 10px;
		box-sizing: border-box;

		// white page
		.page {

			h1 {
				text-decoration: underline;
				margin-bottom: 10px;
			}

			// spacing
			padding: 20px;

			// lighter box / styling
			background: #d6d6d6;
			height: 100%;		
				
			// box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
			// border: 1px solid black;
			border-radius: 5px;

			// text settings
			color: #333;
			font-family: Arial, sans-serif;
			line-height: 2rem;

			overflow-y: auto;
			overflow-x: hidden;

		}// .page

	}// .about-window

</style>
