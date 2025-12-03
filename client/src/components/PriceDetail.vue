<template>
  <div>
    <h2 style="margin:0 0 12px">费用明细</h2>
    <div style="display:grid;gap:10px">
      <div style="display:flex;justify-content:space-between"><span>PCB 制作费</span><strong>{{ fmt(result.fees.pcb) }}</strong></div>
      <div style="display:flex;justify-content:space-between"><span>运费</span><strong>{{ fmt(result.fees.ship) }}</strong></div>
      <div style="display:flex;justify-content:space-between"><span>税费</span><strong>{{ fmt(result.fees.tax) }}</strong></div>
      <div style="display:flex;justify-content:space-between"><span>活动折扣</span><strong>-{{ fmt(result.fees.discount).slice(1) }}</strong></div>
      <div style="display:flex;justify-content:space-between;border-top:1px dashed #2a3350;padding-top:8px"><span>预估总价</span><strong>{{ fmt(result.fees.total) }}</strong></div>
    </div>
    <div style="margin-top:10px;color:#aab0c0">{{ result.lead_time.text }}</div>
  </div>
</template>
<script setup>
const props=defineProps({ result:Object })
function fmt(n){return '￥'+Number(n||0).toFixed(2)}
</script>
