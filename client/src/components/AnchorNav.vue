<template>
  <ul class="anchor-nav">
    <li v-for="it in items" :key="it.id">
      <a href="#" class="anchor-item" :class="{active:activeId===it.id}" @click.prevent="scrollTo(it.id)">
        <span v-if="activeId===it.id" class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </span>
        {{ it.label }}
      </a>
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
  if(el){
    const offset = 120
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
    activeId.value=id
  }
}
onMounted(()=>{
  observer=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ activeId.value=e.target.id } })
  },{ rootMargin: '-120px 0px -70% 0px', threshold: 0 })
  props.items.forEach(it=>{ const el=document.getElementById(it.id); if(el) observer.observe(el) })
})
onBeforeUnmount(()=>{ observer?.disconnect() })
</script>
