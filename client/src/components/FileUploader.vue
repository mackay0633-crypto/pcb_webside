<template>
  <div class="field">
    <label class="label">上传文件</label>
    <input class="input" type="file" accept=".zip,.rar" @change="onChange" />
  </div>
</template>
<script setup>
const emit=defineEmits(['update:modelValue'])
function onChange(e){ emit('update:modelValue', e.target.files?.[0]||null) }
</script>
