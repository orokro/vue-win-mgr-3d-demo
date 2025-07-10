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
				<input
					type="text"
					v-model="vector[axis].value"
					:class="{ invalid: !valid[axis] }"
					@blur="onBlur(axis)"
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


const props = defineProps({
	label: String,
	vector: Object,
	isRotation: Boolean
});

const valid = {
	x: ref(true),
	y: ref(true),
	z: ref(true)
};

function onBlur(axis) {

	return;

	const val = parseFloat(inputs[axis].value);
	if (isNaN(val)) {
		// reset to current vector val
		inputs[axis].value = props.vector[axis].toFixed(3);
		valid[axis].value = true;
	} else {
		props.vector[axis] = val;
	}
}

function startDrag(e, axis) {

	e.preventDefault();
	const startX = e.clientX;
	const startVal = parseFloat(props.vector[axis].value);
	const ctrl = e.ctrlKey;
	const shift = e.shiftKey;

	const step = ctrl ? 0.1 : shift ? 0.01 : 0.5;

	const onMove = (ev) => {
		const dx = ev.clientX - startX;
		const delta = dx * step;
		const newVal = startVal + delta;
		props.vector[axis].value = newVal.toFixed(3);
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
			width: 50px;
			text-align: right;
			padding: 3px 6px;
			border-radius: 3px;
			border: none;

		}// input

		.invalid {
			background: #ffaaaa;

		}// .invalid

	}// .property-row

</style>
