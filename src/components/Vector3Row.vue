<!--
	Vector3Row.vue
	--------------

	This is basically the same as a PropertyRow (see PropertyRow.vue),
	
	But specifically, this is for the Vector3 rows b/c of the extra layout requirements.
-->

<template>

	<!-- same as the other property row, outside wrapper -->
	<div class="property-row">
		
		<div class="label">{{ label }}</div>
		<div class="value vector3">

			<label 
				v-for="axis in ['x', 'y', 'z']"
				:key="axis"
				class="vector-input"
			>
				{{ axis }}:
				<FloatInput
					v-model="vector[axis].value"
					@mousedown="(e) => startDrag(e, axis)"
					style="cursor: ns-resize"
				/>
			</label>

		</div>
	</div>

</template>
<script setup>

// vue
import { ref, watch, onMounted } from 'vue';

// components
import FloatInput from './FloatInput.vue';

// define our props
const props = defineProps({
	label: String,
	vector: Object,
	isRotation: Boolean
});

// true when our inputs are valid
const valid = {
	x: ref(true),
	y: ref(true),
	z: ref(true)
};


function startDrag(e, axis) {

	// e.preventDefault();
	const startX = e.clientX;
	const startVal = parseFloat(props.vector[axis].value);
	
	const onMove = (ev) => {

		const ctrl = ev.ctrlKey;
		const shift = ev.shiftKey;
		const step = ctrl ? 0.001 : shift ? 0.01 : 0.1;

		const dx = ev.clientX - startX;
		const delta = dx * step;
		const newVal = startVal + delta;
		props.vector[axis].value = parseFloat(newVal.toFixed(3));
		valid[axis].value = true;
	};

	const onUp = () => {
		window.removeEventListener('mousemove', onMove);
		window.removeEventListener('mouseup', onUp);
	};

	window.addEventListener('mousemove', onMove);
	window.addEventListener('mouseup', onUp);
}

</script>
<style lang="scss" scoped>

	// main row styles
	.property-row {

		display: flex;
		align-items: center;
		padding: 4px 0;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.15);
		margin-bottom: 4px;
	
		.label {
			width: 100px;
			padding-left: 10px;
			
		}// .label

		.value.vector3 {
			display: flex;
			gap: 6px;
			
		}// .value.vector3

		.vector-input {
			display: flex;
			align-items: center;
			gap: 4px;

		}// .vector-input

		input {
			width: 45px;
			text-align: center;
			padding: 3px 6px;
			border-radius: 3px;
			border: none;

		}// input

		.invalid {
			background: #ffaaaa;

		}// .invalid

	}// .property-row

</style>
