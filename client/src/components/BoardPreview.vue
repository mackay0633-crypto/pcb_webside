<template>
  <div>
    <h2 style="margin:0 0 12px">拼版示意</h2>
    <div style="background:#1a2030;border:1px solid #2a3350;border-radius:8px;height:160px;display:flex;align-items:center;justify-content:center;color:#aab0c0">
      <span>{{ width }}cm × {{ height }}cm × {{ qty }}pcs</span>
    </div>
  </div>
</template>
<script setup>
defineProps({ width:[String,Number], height:[String,Number], qty:[String,Number] })
</script>
