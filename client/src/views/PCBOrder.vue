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
      <div class="main-wrap">
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
      <section class="card content">
        <h2 style="margin:0 0 12px">工艺信息</h2>
        <div class="panel">
          <h3>板子厚度</h3>
          <Segmented v-model="thickness" :options="thicknessOptions" />
        </div>
        <div class="panel">
          <h3>外层铜厚</h3>
          <Segmented v-model="copper" :options="copperOptions" />
        </div>
        <div class="panel">
          <h3>最小线宽线距</h3>
          <Segmented v-model="lwls" :options="lwlsOptions" />
          <div class="note">单位 mil</div>
        </div>
        <div class="panel">
          <h3>最小孔径</h3>
          <Segmented v-model="hole" :options="holeOptions" />
          <div class="note">单位 mm</div>
        </div>
        <div class="panel">
          <h3>阻焊颜色</h3>
          <div class="seg seg-color">
            <button class="seg-item" :class="{active:soldermask==='绿色'}" @click="soldermask='绿色'"><span class="swatch green"></span> 绿色</button>
            <button class="seg-item" :class="{active:soldermask==='蓝色'}" @click="soldermask='蓝色'"><span class="swatch blue"></span> 蓝色</button>
            <button class="seg-item" :class="{active:soldermask==='红色'}" @click="soldermask='红色'"><span class="swatch red"></span> 红色</button>
            <button class="seg-item" :class="{active:soldermask==='黄色'}" @click="soldermask='黄色'"><span class="swatch yellow"></span> 黄色</button>
            <button class="seg-item" :class="{active:soldermask==='黑色'}" @click="soldermask='黑色'"><span class="swatch black"></span> 黑色</button>
            <button class="seg-item" :class="{active:soldermask==='哑黑'}" @click="soldermask='哑黑'"><span class="swatch matte"></span> 哑黑</button>
            <button class="seg-item" :class="{active:soldermask==='白色'}" @click="soldermask='白色'"><span class="swatch white"></span> 白色</button>
          </div>
        </div>
        <div class="panel">
          <h3>字符颜色</h3>
          <div class="seg seg-color">
            <button class="seg-item" :class="{active:silkscreen==='黑色'}" @click="silkscreen='黑色'"><span class="swatch black"></span> 黑色</button>
            <button class="seg-item" :class="{active:silkscreen==='白色'}" @click="silkscreen='白色'"><span class="swatch white"></span> 白色</button>
          </div>
        </div>
        <div class="panel">
          <h3>阻焊覆盖</h3>
          <Segmented v-model="viaCover" :options="viaCoverOptions" />
          <div class="notice-list">
            <div class="item"><span class="dot">*</span><span>如果是 gerber 文件，此选项中【过孔盖油】、【过孔开窗】选项无效，我司一律按文件中过孔属性加工</span></div>
            <div class="item"><span class="dot">*</span><span>过孔盖油检验标准是过孔在过锡炉的时候不沾锡，过孔盖油会出现孔口发红现象，属于工艺正常现象</span></div>
            <div class="item"><span class="dot">*</span><span>喷锡板存在过孔藏锡珠风险，如不接受过孔藏锡珠，请按过孔塞油墨下单</span></div>
          </div>
        </div>
        <div class="panel">
          <h3>盘中孔</h3>
          <Segmented v-model="panHole" :options="panHoleOptions" />
        </div>
        <div class="panel">
          <h3>表面处理</h3>
          <Segmented v-model="finish" :options="finishOptions" />
        </div>
        <div class="panel">
          <h3>阻抗</h3>
          <Segmented v-model="impedance" :options="impedanceOptions" />
        </div>
        <div class="panel">
          <h3>手指斜边</h3>
          <Segmented v-model="fingerBevel" :options="fingerBevelOptions" />
        </div>
        <div class="panel">
          <h3>半孔</h3>
          <Segmented v-model="halfHole" :options="halfHoleOptions" />
        </div>
        <div class="panel">
          <h3>包边</h3>
          <Segmented v-model="edgeWrap" :options="edgeWrapOptions" />
        </div>
      </section>
      </div>
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
const thickness=ref(1.6)
const copper=ref('1oz')
const lwls=ref('10/10')
const hole=ref(0.3)
const soldermask=ref('绿色')
const silkscreen=ref('白色')
const viaCover=ref('过孔盖油')
const panHole=ref('无')
const finish=ref('有铅喷锡')
const impedance=ref('无')
const fingerBevel=ref('无需')
const halfHole=ref('无需')
const edgeWrap=ref('无需')
const thicknessOptions=[0.6,0.8,1.0,1.2,1.6,2.0,2.5,3.0,3.2].map(x=>({label:String(x),value:x}))
const copperOptions=['1oz','2oz','3oz','4oz'].map(x=>({label:x,value:x}))
const lwlsOptions=['10/10','8/8','6/6','5/5','4/4','3.5/3.5'].map(x=>({label:x,value:x}))
const holeOptions=[0.3,0.25,0.20,0.15].map(x=>({label:String(x),value:x}))
const viaCoverOptions=['过孔盖油','过孔开窗','过孔塞油墨','过孔塞树脂+电镀填平'].map(x=>({label:x,value:x}))
const panHoleOptions=['无','有'].map(x=>({label:x,value:x}))
const finishOptions=['有铅喷锡','无铅喷锡','沉金','OSP'].map(x=>({label:x,value:x}))
const impedanceOptions=['无','有'].map(x=>({label:x,value:x}))
const fingerBevelOptions=['无需','需要'].map(x=>({label:x,value:x}))
const halfHoleOptions=['无需','1边半孔','2边半孔','3边半孔','4边半孔'].map(x=>({label:x,value:x}))
const edgeWrapOptions=['无需','1边包边','2边包边','3边包边','4边包边'].map(x=>({label:x,value:x}))
</script>
