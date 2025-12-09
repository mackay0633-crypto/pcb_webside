<template>
  <div class="mat-table">
    <div class="mat-head">
      <div class="col-brand">板材品牌</div>
      <div class="col-model">型号</div>
      <div class="col-tg">TG值</div>
      <div class="col-flame">阻燃性</div>
      <div class="col-fee">指定板材费</div>
    </div>
    <div 
      v-for="row in rows" 
      :key="row.value" 
      class="mat-row" 
      :class="{ active: modelValue === row.value }" 
      @click="$emit('update:modelValue', row.value)"
    >
      <div class="col-brand brand-cell">
        <!-- Checkbox circle -->
        <div class="check-circle">
           <svg v-if="modelValue === row.value" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span class="brand-name">{{ row.brand }}</span>
        <span v-if="row.pdf" class="pdf-icon">
           <svg viewBox="0 0 24 24" fill="none" stroke="#e51f2b" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </span>
      </div>
      <div class="col-model">{{ row.model }}</div>
      <div class="col-tg">{{ row.tg }}</div>
      <div class="col-flame">{{ row.flame }}</div>
      <div class="col-fee">{{ row.fee }}</div>
    </div>
  </div>
</template>
<script setup>
defineProps({ rows: Array, modelValue: String })
defineEmits(['update:modelValue'])
</script>
