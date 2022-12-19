<template>
  <label>
    <span class="inline-block w-16">{{ label }}:</span>
    <input class="mx-2 border px-1 w-52" :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs"/>
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: ['label', 'modelValue'],
}
</script>

<style scoped>

</style>