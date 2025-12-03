<template>
  <main class="page">
    <div class="container grid">
      <section class="card">
        <h2 style="margin:0 0 12px">PCB 文件</h2>
        <FileUploader v-model="file" />
        <div style="height:16px"></div>
        <h2 style="margin:0 0 12px">基本信息</h2>
        <FormInput v-model:width="form.basic.width_cm" v-model:height="form.basic.height_cm" v-model:qty="form.basic.qty_pcs" />
        <SelectOption v-if="dict" label="产品类别" v-model="form.basic.category" :options="dict.category" />
        <SelectOption v-if="materialOptions.length" label="板材" v-model="form.basic.material" :options="materialOptions" />
        <SelectOption v-if="dict" label="板子层数" v-model="form.basic.layers" :options="dict.layers.map(n=>({label:String(n),value:n}))" />
        <SelectOption v-if="dict" label="HDI（盲埋孔）" v-model="form.basic.hdi" :options="dict.hdi.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="出货形式" v-model="form.basic.shipment" :options="dict.shipment.map(x=>({label:x,value:x}))" />
        <div class="field">
          <label class="label">工艺边框（mm）</label>
          <input class="input" type="number" min="0" step="1" v-model="form.basic.rail_mm" placeholder="建议≥5mm" />
        </div>

        <div style="height:16px"></div>
        <h2 style="margin:0 0 12px">工艺信息</h2>
        <SelectOption v-if="dict" label="板子厚度" v-model="form.process.thickness_mm" :options="dict.thickness_mm.map(x=>({label:x+' mm',value:x}))" />
        <SelectOption v-if="dict" label="外层铜厚" v-model="form.process.copper_oz" :options="dict.copper_oz.map(x=>({label:x+' oz',value:x}))" />
        <SelectOption v-if="dict" label="最小线宽/线距" v-model="form.process.lwls_mil" :options="dict.lwls_mil.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="最小孔径" v-model="form.process.hole_mm" :options="dict.hole_mm.map(x=>({label:x+' mm',value:x}))" />
        <SelectOption v-if="dict" label="阻焊颜色" v-model="form.process.soldermask" :options="dict.soldermask.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="字符颜色" v-model="form.process.silkscreen" :options="dict.silkscreen.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="表面处理" v-model="form.process.finish" :options="dict.finish.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="阻抗" v-model="form.process.impedance" :options="dict.impedance.map(x=>({label:x,value:x}))" />

        <div style="height:16px"></div>
        <h2 style="margin:0 0 12px">服务信息</h2>
        <SelectOption v-if="dict" label="测试方式" v-model="form.service.test_method" :options="dict.test_method.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="确认生产稿" v-model="form.service.confirm_type" :options="dict.confirm_type.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="产品报告" v-model="form.service.report_type" :options="dict.report_type.map(x=>({label:x,value:x}))" />
        <SelectOption v-if="dict" label="打叉板" v-model="form.service.cross_board" :options="dict.cross_board.map(x=>({label:x,value:x}))" />

        <button class="btn primary" @click="tryCalc">计算价格</button>
      </section>
      <aside class="card">
        <PriceDetail :result="result" />
        <div style="height:16px"></div>
        <BoardPreview :width="form.basic.width_cm" :height="form.basic.height_cm" :qty="form.basic.qty_pcs" />
        <div style="margin-top:12px;color:#aab0c0">
          <div v-if="dict">{{ dict.lead_time_rules.cutoff_pay_18 }}</div>
          <div v-if="dict">{{ dict.lead_time_rules.cutoff_eq_21 }}</div>
          <div v-if="dict">{{ dict.lead_time_rules.sunday }}</div>
        </div>
      </aside>
    </div>
  </main>
  </template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getDictionaries, calcQuote } from '../utils/api.js'
import localDict from '../constants/dictionaries.json'
import FormInput from '../components/FormInput.vue'
import SelectOption from '../components/SelectOption.vue'
import CheckboxGroup from '../components/CheckboxGroup.vue'
import PriceDetail from '../components/PriceDetail.vue'
import BoardPreview from '../components/BoardPreview.vue'
import FileUploader from '../components/FileUploader.vue'
const dict=ref(null)
const route=useRoute()
const form=ref({ basic:{ width_cm:'', height_cm:'', qty_pcs:'', category:'FR-4', layers:2, hdi:'无', material:'RANDOM', shipment:'单片出货', rail_mm:5, material_per_sqm:0 }, process:{ thickness_mm:1.0, copper_oz:1, lwls_mil:'10/10', hole_mm:0.3, soldermask:'绿色', silkscreen:'白色', finish:'有铅喷锡', impedance:'无' }, service:{ test_method:'样品免费', confirm_type:'无需', report_type:'无需', cross_board:'接受' } })
const file=ref(null)
const result=ref({ area_sqm:0, fees:{ pcb:0, ship:0, tax:0, discount:0, total:0 }, breakdown:{}, lead_time:{ text:'' } })
const materialOptions=ref([])
onMounted(async()=>{
  try{
    const { data }=await getDictionaries()
    dict.value=data
  }catch(e){
    dict.value=localDict
  }
  materialOptions.value=dict.value.materials.map(m=>({ label:m.label, value:m.value }))
})
async function tryCalc(){
  const selected=dict.value.materials.find(m=>m.value===form.value.basic.material)
  form.value.basic.material_per_sqm=selected?.per_sqm||0
  const { data }=await calcQuote({ basic:form.value.basic, process:form.value.process, service:form.value.service })
  result.value=data
}

// 根据路由参数设置默认子类（如 PCB/HDI/FPC 等）
onMounted(()=>{
  const type=String(route.params.type||'pcb').toLowerCase()
  // 这里仅用于标记激活项，实际可根据 type 预置不同默认参数
})
</script>
