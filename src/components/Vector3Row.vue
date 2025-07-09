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

			<label v-for="axis in ['x', 'y', 'z']" :key="axis" class="vector-input">
				{{ axis }}:
				<input
					type="text"
					v-model="inputs[axis]"
					:class="{ invalid: !valid[axis] }"
					@blur="onBlur(axis)"
					@mousedown.stop="(e) => startDrag(e, axis)"
					@keydown.enter="onBlur(axis)"
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

const emit = defineEmits(["update:vector"]);

const inputs = {
	x: ref(''),
	y: ref(''),
	z: ref('')
};

const valid = {
	x: ref(true),
	y: ref(true),
	z: ref(true)
};

// update inputs from vector
function updateInputsFromVector() {
	inputs.x.value = props.vector.x.toFixed(3);
	inputs.y.value = props.vector.y.toFixed(3);
	inputs.z.value = props.vector.z.toFixed(3);
}

// validate + assign back
function onBlur(axis) {
	const val = parseFloat(inputs[axis].value);
	if (!isNaN(val)) {
		props.vector[axis] = val;
		emit("update:vector", props.vector);
		valid[axis].value = true;
		updateInputsFromVector();
	} else {
		valid[axis].value = false;
	}
}

// dragging
let dragging = null;
let startY = 0;
let startVal = 0;
function startDrag(e, axis) {
	e.preventDefault();
	dragging = axis;
	startY = e.clientY;
	startVal = parseFloat(inputs[axis].value);
	document.addEventListener('mousemove', onDrag);
	document.addEventListener('mouseup', stopDrag);
}
function onDrag(e) {
	if (!dragging) return;
	const dy = e.clientY - startY;
	const delta = -dy * 0.01;
	const newVal = startVal + delta;
	props.vector[dragging] = parseFloat(newVal.toFixed(3));
	emit("update:vector", props.vector);
	updateInputsFromVector();
}
function stopDrag() {
	dragging = null;
	document.removeEventListener('mousemove', onDrag);
	document.removeEventListener('mouseup', stopDrag);
}

// initialize
onMounted(updateInputsFromVector);

// sync if vector changes externally
watch(() => props.vector, updateInputsFromVector, { deep: true });

</script>

<style scoped lang="scss">
.property-row {
	display: flex;
	align-items: center;
	margin-bottom: 4px;

	.label {
		width: 100px;
		padding-left: 10px;
	}
	.value.vector3 {
		display: flex;
		gap: 4px;
		flex: 1;
		.vector-input {
			display: flex;
			align-items: center;
			gap: 2px;
			input {
				width: 50px;
			}
			.invalid {
				border: 1px solid red;
			}
		}
	}
}
</style>
