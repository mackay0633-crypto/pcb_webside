<template>
  <div>
    <div class="field">
      <label class="label">单片尺寸 X（cm）</label>
      <input class="input" type="number" min="0" step="0.1" :value="width" @input="$emit('update:width',$event.target.value)" />
    </div>
    <div class="field">
      <label class="label">单片尺寸 Y（cm）</label>
      <input class="input" type="number" min="0" step="0.1" :value="height" @input="$emit('update:height',$event.target.value)" />
    </div>
    <div class="field">
      <label class="label">单片数量（pcs）</label>
      <input class="input" type="number" min="1" step="1" :value="qty" @input="$emit('update:qty',$event.target.value)" />
    </div>
  </div>
</template>
<script setup>
defineProps({ width:String, height:String, qty:String })
defineEmits(['update:width','update:height','update:qty'])
</script>
