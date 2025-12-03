<template>
  <main class="page theme-hq">
    <div class="container pcb-grid">
      <aside class="card side">
        <div class="side-tabs">
          <button class="side-tab active">基本信息</button>
          <button class="side-tab">工艺信息</button>
          <button class="side-tab">服务信息</button>
        </div>
      </aside>
      <section class="card content">
        <div class="hint">温馨提示 请仔细填写PCB相关参数，并确保与相关文件参数一致；PCB生产将以下单参数为准</div>
        <div class="panel upload">
          <div class="upload-box">
            <div class="upload-icon">⬆</div>
            <div class="upload-text">上传Gerber/PCB文件，自动解析计价参数<br/><small>zip, rar格式（小于50MB）</small></div>
          </div>
          <div class="upload-note">暂不支持：CAD、Allegro、Gerber274-D、Protel98及以下版本</div>
        </div>

        <div class="panel">
          <h3>产品类别</h3>
          <Segmented v-model="category" :options="categoryOptions" />
        </div>

        <div class="panel">
          <h3>板子层数 <span class="tag-hot">2/4/6层板爆款</span></h3>
          <Segmented v-model="layers" :options="layerOptions" />
        </div>

        <div class="panel">
          <h3>HDI（盲埋孔）</h3>
          <Segmented v-model="hdi" :options="hdiOptions" />
        </div>

        <div class="panel">
          <h3>板材</h3>
          <MaterialTable v-model="material" :rows="materialRows" />
        </div>

        <div class="panel">
          <h3>出货形式</h3>
          <Segmented v-model="shipment" :options="shipmentOptions" />
        </div>

        <div class="panel grid-3">
          <div>
            <label class="label">单片尺寸</label>
            <div class="inline">
              <input class="input" type="number" placeholder="长" />
              <input class="input" type="number" placeholder="宽" />
              <span class="unit">cm</span>
            </div>
          </div>
          <div>
            <label class="label">单片数量</label>
            <div class="inline">
              <input class="input" type="number" placeholder="Pcs" />
            </div>
          </div>
          <div>
            <label class="label">工艺边框</label>
            <div class="inline">
              <input class="input" type="number" placeholder="mm" />
            </div>
            <div class="note">如需贴片，建议不小于5mm；无工艺边可能增加治具费用</div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import Segmented from '../components/Segmented.vue'
import MaterialTable from '../components/MaterialTable.vue'
const category=ref('FR-4')
const layers=ref(2)
const hdi=ref('无')
const material=ref('RANDOM')
const shipment=ref('单片出货')
const categoryOptions=[{label:'FR-4',value:'FR-4'},{label:'罗杰斯高频板',value:'ROGERS',badge:'NEW',badgeClass:'pill-new'}]
const layerOptions=[1,2,4,6,8,10,12,14,16,18,20].map(n=>({label:String(n),value:n}))
const hdiOptions=['无','1阶','2阶','3阶'].map(x=>({label:x,value:x}))
const shipmentOptions=['单片出货','连片(按文件)','连片(代拼)'].map(x=>({label:x,value:x}))
const materialRows=[
  { value:'RANDOM', brand:'随机品牌（A级）', model:'不指定', tg:'TG130', flame:'94V-0', fee:'不加价' },
  { value:'KB6164_TG135', brand:'建滔KB（A级）', model:'KB6164', tg:'TG135', flame:'94V-0', fee:'起步价20+10元/㎡' },
  { value:'S1000H_TG155', brand:'生益（A级）', model:'S1000H', tg:'TG155', flame:'94V-0', fee:'起步价40+80元/㎡' }
]
</script>
