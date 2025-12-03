<template>
  <div class="mat-table">
    <div class="mat-head">
      <div>板材品牌</div>
      <div>型号</div>
      <div>TG值</div>
      <div>阻燃性</div>
      <div>指定板材费</div>
    </div>
    <button v-for="row in rows" :key="row.value" class="mat-row" :class="{active:modelValue===row.value}" @click="$emit('update:modelValue',row.value)">
      <div>{{ row.brand }}</div>
      <div>{{ row.model }}</div>
      <div>{{ row.tg }}</div>
      <div>{{ row.flame }}</div>
      <div>{{ row.fee }}</div>
    </button>
  </div>
</template>
<script setup>
defineProps({ rows:Array, modelValue:String })
defineEmits(['update:modelValue'])
</script>
