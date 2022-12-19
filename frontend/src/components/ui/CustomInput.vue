<template>
  <label>
    <span class="inline-block w-16">{{ label }}:</span>
    <input class="mx-2 border px-1 w-52" :type="input_type" :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"/>
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: ['input_type', 'label', 'modelValue'],
}
</script>

<style scoped>

</style>