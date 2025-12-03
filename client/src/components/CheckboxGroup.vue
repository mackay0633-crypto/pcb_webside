<template>
  <div class="field">
    <label class="label">选项</label>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <label v-for="o in options" :key="o.value" style="display:flex;gap:6px;align-items:center">
        <input type="checkbox" :value="o.value" :checked="modelValue.includes(o.value)" @change="onToggle(o.value,$event.target.checked)" />
        <span>{{ o.label }}</span>
      </label>
    </div>
  </div>
</template>
<script setup>
const props=defineProps({ options:Array, modelValue:Array })
const emit=defineEmits(['update:modelValue'])
function onToggle(val,checked){
  const set=new Set(props.modelValue)
  if(checked) set.add(val); else set.delete(val)
  emit('update:modelValue',Array.from(set))
}
</script>
