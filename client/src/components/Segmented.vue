<template>
  <div class="seg">
    <button 
      v-for="o in options" 
      :key="o.value" 
      class="seg-item" 
      :class="{ active: modelValue === o.value }" 
      @click="$emit('update:modelValue', o.value)"
    >
      <span>{{ o.label }}</span>
      <span v-if="o.badge" class="seg-badge" :class="o.badgeClass">{{ o.badge }}</span>
      <!-- Checkmark triangle for active state -->
      <div v-if="modelValue === o.value" class="active-mark">
        <svg viewBox="0 0 12 12" width="12" height="12"><path d="M10.5 3.5L4.5 9.5L1.5 6.5" fill="none" stroke="white" stroke-width="2"></path></svg>
      </div>
    </button>
  </div>
</template>
<script setup>
defineProps({ options: Array, modelValue: [String, Number] })
defineEmits(['update:modelValue'])
</script>
