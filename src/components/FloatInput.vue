<!--
	FloatInput.vue
	--------------

	A component that has some built in input validation for floats
-->
<template>

	<input
		type="text"
		class="float-input"
		:class="{ invalid: invalidInput }"
		v-bind="$attrs"
		v-model="inputValue"
		@input="onInput"
		@blur="onBlur"
	/>

</template>
<script setup>

// vue
import { ref, watch, computed, onMounted, defineProps, defineEmits } from 'vue';

// props & emits
const props = defineProps({
	modelValue: {
		type: Number,
		required: true
	}
});
const emit = defineEmits(['update:modelValue']);

// state
const inputValue = ref('');
const invalidInput = ref(false);
let lastValidValue = 0;

// watch our model for external changes
watch(() => props.modelValue, (newVal) => {
	if (!invalidInput.value) {
		inputValue.value = String(newVal);
		lastValidValue = newVal;
	}
});


// methods
const isValidFloat = (val) => {
	return /^[-+]?\d*\.?\d+(e[-+]?\d+)?$/i.test(val.trim());
};


// compute if the input is valid when the user types in the box / changes it
const onInput = () => {

	if (isValidFloat(inputValue.value)) {

		const parsed = parseFloat(inputValue.value);
		lastValidValue = parsed;
		emit('update:modelValue', parsed);
		invalidInput.value = false;

	} else {
		invalidInput.value = true;
	}
};


// handle the blur event to validate the input when the user leaves the input box
const onBlur = () => {

	if (!isValidFloat(inputValue.value)) {
		invalidInput.value = false;
		inputValue.value = String(lastValidValue);

	} else {
		const parsed = parseFloat(inputValue.value);
		lastValidValue = parsed;
		emit('update:modelValue', parsed);
		invalidInput.value = false;
	}
};


// initialize
onMounted(() => {

	if (typeof props.modelValue === 'number' && !Number.isNaN(props.modelValue)) {
		lastValidValue = props.modelValue;
		inputValue.value = String(props.modelValue);

	} else {
		lastValidValue = 0;
		inputValue.value = '0';
		emit('update:modelValue', 0);
	}
});

</script>
<style lang="scss" scoped>

	// the main input element
	.float-input {
		padding: 0.5em;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1em;
	}

	// style for when the input is invalid
	.float-input.invalid {
		background-color: pink;
	}

</style>
