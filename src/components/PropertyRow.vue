<template>
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

<style scoped>
.property-row {
	display: flex;
	align-items: center;
	padding: 4px 0;
	border-radius: 4px;
	background: rgba(255, 255, 255, 0.15);
	margin-bottom: 4px;
}
.label {
	width: 100px;
	padding-left: 10px;
}
.value {
	flex: 1;
	display: flex;
	flex-wrap: wrap;
}
</style>
