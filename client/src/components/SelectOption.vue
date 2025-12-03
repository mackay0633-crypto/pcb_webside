<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <select class="select" :value="modelValue" @change="$emit('update:modelValue',$event.target.value)">
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
  </div>
</template>
<script setup>
defineProps({ label:String, options:Array, modelValue:[String,Number] })
defineEmits(['update:modelValue'])
</script>
