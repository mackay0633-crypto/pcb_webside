<template>
  <main class="page">
    <div class="container card">
      <h2 style="margin:0 0 12px">订单确认</h2>
      <div>订单号：{{ orderId }}</div>
    </div>
  </main>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route=useRoute()
const orderId=route.params.id||''
</script>
