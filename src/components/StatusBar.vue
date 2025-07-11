<!--
	StatusBar.vue
	-------------

	Bar with status infos along the bottom of the screen.
-->
<template>
	
	<div class="statusBar">
		<div class="version-number">v1.0.0</div>
	</div>
</template>
<script setup>

</script>
<style lang="scss" scoped>

	.statusBar {

		// fill parent element
		position: absolute;
		inset: 0px 0px 0px 0px;

		// for debug
		/* border: 1px solid red; */

		// fixed on bottom right
		.version-number {

			position: absolute;
			top: 8px;
			right: 10px;
			color:rgba(239, 239, 239, 0.36);
			font-size: 12px;
			font-family: 'Courier New', Courier, monospace;

		}// .version-number

	}// .statusBar
</style>
