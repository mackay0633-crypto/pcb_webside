<template>
  <div class="seg">
    <button v-for="o in options" :key="o.value" class="seg-item" :class="{active:modelValue===o.value}" @click="$emit('update:modelValue',o.value)">
      <span>{{ o.label }}</span>
      <span v-if="o.badge" class="seg-badge" :class="o.badgeClass">{{ o.badge }}</span>
    </button>
  </div>
</template>
<script setup>
defineProps({ options:Array, modelValue:[String,Number] })
defineEmits(['update:modelValue'])
</script>
