<template>
  <label>
    <span class="inline-block w-16">{{ label }}:</span>
    <input list="optionsDatalist" class="mx-2 border px-1 w-52" :id="id" :value="modelValue"
           @input="$emit('update:modelValue',$event.target.value)"/>
  </label>
  <datalist id="optionsDatalist">
    <option v-for="option in options" :key="option" :value="option"/>
  </datalist>
</template>

<script>
export default {
  name: "CustomInputWithDatalist",
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array
    },
    id: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>