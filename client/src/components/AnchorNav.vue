<template>
  <ul class="anchor-nav">
    <li v-for="it in items" :key="it.id">
      <a href="#" class="anchor-item" :class="{active:activeId===it.id}" @click.prevent="scrollTo(it.id)">{{ it.label }}</a>
    </li>
  </ul>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props=defineProps({ items:{ type:Array, default:()=>[] } })
const activeId=ref(props.items?.[0]?.id||'')
let observer
function scrollTo(id){
  const el=document.getElementById(id)
  if(el){ el.scrollIntoView({ behavior:'smooth', block:'start' }); activeId.value=id }
}
onMounted(()=>{
  observer=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ activeId.value=e.target.id } })
  },{ root:null, threshold:0.6 })
  props.items.forEach(it=>{ const el=document.getElementById(it.id); if(el) observer.observe(el) })
})
onBeforeUnmount(()=>{ observer?.disconnect() })
</script>
