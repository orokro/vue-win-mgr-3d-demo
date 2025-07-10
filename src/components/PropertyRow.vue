<!--
	PropertyRow.vue
	---------------

	For the properties panel, there will be several rows of settings that can be adjusted.
	This will be one of the rows, so the table is built consistently.
-->
<template>

	<!-- main row outer wrapper -->
	<div class="property-row">

		<div class="label">{{ label }}</div>
		<div class="value">
			<slot />
		</div>

	</div>
</template>
<script setup>

	defineProps({
		label: String
	});

</script>
<style lang="scss" scoped>

	// main row
	.property-row {

		border-radius: 4px;
		background: rgba(255, 255, 255, 0.15);
		
		display: flex;
		align-items: center;

		padding: 4px 0;
		margin-bottom: 4px;

		.label {
			width: 100px;
			padding-left: 10px;

		}// .label

		.value {
			flex: 1;
			display: flex;
			flex-wrap: wrap;

		}// .value

	}// .property-row

</style>
