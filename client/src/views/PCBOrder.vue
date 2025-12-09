<template>
  <main class="page theme-hq">
    <div class="container pcb-grid quote-container">
      <aside class="side">
        <AnchorNav :items="anchors" />
      </aside>
      <div class="main-wrap">
        <section class="card content quote-section" id="basic-info" style="padding: 24px;">
          <div class="quote-header">
            <div class="quote-title">PCB下单(硬板)</div>
          </div>
          
          <div class="quote-hint">
            <div>
              <span class="hint-tag">温馨提示</span>
              请仔细填写PCB相关参数，并确保与相关文件参数一致；PCB生产将以下单参数为准
              <a href="#" style="color:#1890ff;margin-left:8px;text-decoration:none">下单必看 »</a>
            </div>
            <a href="#" style="color:#17c964;text-decoration:none">我知道了</a>
          </div>

          <div class="upload-area">
            <div class="upload-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </div>
            <div class="upload-text">上传Gerber/PCB文件，<span style="color:#ff4d4f">自动解析</span>计价参数</div>
            <div class="upload-sub">zip, rar格式（小于50MB）</div>
            <div class="upload-unsupported">暂不支持：CAD、Allegro、Gerber274-D、Protel98及以下版本</div>
          </div>

          <div style="margin-top: 30px;">
            <div class="form-row">
              <div class="form-label">产品类别</div>
              <div class="form-control">
                <Segmented v-model="category" :options="categoryOptions" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-label">板子层数 <i class="icon" data-tooltip="选择所需的PCB层数">?</i></div>
              <div class="form-control" style="position:relative">
                <span class="tag-hot" style="position:absolute;top:-20px;left:50px;z-index:5;font-size:10px;padding:1px 6px;border-radius:10px">2/4/6层板爆款</span>
                <Segmented v-model="layers" :options="layerOptions" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-label">HDI(盲埋孔) <i class="icon" data-tooltip="高密度互连技术，支持盲孔和埋孔">?</i></div>
              <div class="form-control">
                <Segmented v-model="hdi" :options="hdiOptions" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-label">板材 <i class="icon" data-tooltip="选择PCB的基础材料">?</i></div>
              <div class="form-control">
                <MaterialTable v-model="material" :rows="materialRows" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-label">拼版款数 <i class="icon" data-tooltip="如果文件包含多个不同设计，请填写款数">?</i></div>
              <div class="form-control">
                 <div class="input-group">
                    <input class="input" style="width:160px" v-model="panelCount" type="number" />
                    <span style="font-size:12px;color:#999;margin-left:8px">指文件内有多少款不同的板子 <a href="#" style="color:#17c964">示例</a></span>
                 </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-label">出货形式 <i class="icon" data-tooltip="选择单片出货或连片出货">?</i></div>
              <div class="form-control">
                <Segmented v-model="shipment" :options="shipmentOptions" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-label"><span class="req-star">*</span>单片尺寸 <i class="icon" data-tooltip="单个PCB板的物理尺寸">?</i></div>
              <div class="form-control">
                <div class="input-group">
                  <input class="input" style="width:100px" placeholder="长/x" />
                  <span style="color:#ccc">x</span>
                  <input class="input" style="width:100px" placeholder="宽/y" />
                  <div class="input-suffix input-has-suffix">cm</div>
                  <span class="req-tip">* 请填写</span>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-label"><span class="req-star">*</span>单片数量 <i class="icon" data-tooltip="需要生产的PCB数量">?</i></div>
              <div class="form-control">
                <div class="input-group">
                  <select class="select" style="width:220px">
                    <option>请选择</option>
                  </select>
                  <div class="input-suffix input-has-suffix">Pcs</div>
                  <span class="req-tip">* 请选择</span>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-label">工艺边框 <i class="icon" data-tooltip="便于SMT贴片的辅助边框">?</i></div>
              <div class="form-control">
                <div class="input-group">
                  <select class="select" style="width:80px">
                    <option>无</option>
                  </select>
                  <input class="input" style="width:80px" placeholder="0" />
                  <span style="font-size:12px;color:#666">mm</span>
                  <span style="font-size:12px;color:#fa8c16;margin-left:8px">如需在华秋贴片，建议设置不小于5mm的工艺边框；无工艺边可能会增加额外的治具费用</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="card content quote-section" id="process-info" style="padding: 24px;">
          <h2 style="margin:0 0 20px;font-size:18px">工艺信息</h2>
          
          <div class="form-row">
            <div class="form-label">板子厚度 <i class="icon" data-tooltip="成品板厚度，含铜箔和阻焊层">?</i></div>
            <div class="form-control">
              <Segmented v-model="thickness" :options="thicknessOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">外层铜厚 <i class="icon" data-tooltip="PCB外层铜箔的厚度">?</i></div>
            <div class="form-control">
              <Segmented v-model="copper" :options="copperOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">最小线宽线距 <i class="icon" data-tooltip="走线宽度和间距的最小值">?</i></div>
            <div class="form-control">
              <Segmented v-model="lwls" :options="lwlsOptions" />
              <div class="note">单位 mil</div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">最小孔径 <i class="icon" data-tooltip="PCB上最小钻孔直径">?</i></div>
            <div class="form-control">
              <Segmented v-model="hole" :options="holeOptions" />
              <div class="note">单位 mm</div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">阻焊颜色 <i class="icon" data-tooltip="PCB板表面的油墨颜色">?</i></div>
            <div class="form-control">
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
          </div>

          <div class="form-row">
            <div class="form-label">字符颜色 <i class="icon" data-tooltip="PCB板上的文字颜色">?</i></div>
            <div class="form-control">
              <div class="seg seg-color">
                <button class="seg-item" :class="{active:silkscreen==='黑色'}" @click="silkscreen='黑色'"><span class="swatch black"></span> 黑色</button>
                <button class="seg-item" :class="{active:silkscreen==='白色'}" @click="silkscreen='白色'"><span class="swatch white"></span> 白色</button>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">阻焊覆盖 <i class="icon" data-tooltip="过孔的处理方式">?</i></div>
            <div class="form-control">
              <Segmented v-model="viaCover" :options="viaCoverOptions" />
              <div class="notice-list">
                <div class="item"><span class="dot">*</span><span>如果是 gerber 文件，此选项中【过孔盖油】、【过孔开窗】选项无效，我司一律按文件中过孔属性加工</span></div>
                <div class="item"><span class="dot">*</span><span>过孔盖油检验标准是过孔在过锡炉的时候不沾锡，过孔盖油会出现孔口发红现象，属于工艺正常现象</span></div>
                <div class="item"><span class="dot">*</span><span>喷锡板存在过孔藏锡珠风险，如不接受过孔藏锡珠，请按过孔塞油墨下单</span></div>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">盘中孔 <i class="icon" data-tooltip="焊盘内打孔工艺">?</i></div>
            <div class="form-control">
              <Segmented v-model="panHole" :options="panHoleOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">表面处理 <i class="icon" data-tooltip="焊盘表面的抗氧化处理">?</i></div>
            <div class="form-control">
              <Segmented v-model="finish" :options="finishOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">阻抗 <i class="icon" data-tooltip="是否需要控制线路阻抗">?</i></div>
            <div class="form-control">
              <Segmented v-model="impedance" :options="impedanceOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">手指斜边 <i class="icon" data-tooltip="金手指边缘的倒角处理">?</i></div>
            <div class="form-control">
              <Segmented v-model="fingerBevel" :options="fingerBevelOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">半孔 <i class="icon" data-tooltip="板边的金属化半孔">?</i></div>
            <div class="form-control">
              <Segmented v-model="halfHole" :options="halfHoleOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">包边 <i class="icon" data-tooltip="板边的金属包边工艺">?</i></div>
            <div class="form-control">
              <Segmented v-model="edgeWrap" :options="edgeWrapOptions" />
            </div>
          </div>
        </section>

        <section class="card content quote-section" id="service-info" style="padding: 24px;">
          <h2 style="margin:0 0 20px;font-size:18px">服务信息</h2>
          
          <div class="form-row">
            <div class="form-label">测试方式 <i class="icon" data-tooltip="电路通断测试方式">?</i></div>
            <div class="form-control">
              <Segmented v-model="testMethod" :options="testMethodOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">确认生产稿 <i class="icon" data-tooltip="是否需要确认工程资料">?</i></div>
            <div class="form-control">
              <Segmented v-model="confirmFile" :options="confirmFileOptions" />
              <div class="note">选择"需要"会增加生产周期，请知悉</div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">产品报告 <i class="icon" data-tooltip="需要的出货检验报告">?</i></div>
            <div class="form-control">
              <div class="checkbox-group">
                 <label v-for="opt in reportOptions" :key="opt.value" class="checkbox-label">
                   <input type="checkbox" :value="opt.value" v-model="reports">
                   {{ opt.label }}
                 </label>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">打叉板 <i class="icon" data-tooltip="是否接受拼版中有报废板">?</i></div>
            <div class="form-control">
              <Segmented v-model="crossBoard" :options="crossBoardOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">隔纸 <i class="icon" data-tooltip="板与板之间的包装隔纸">?</i></div>
            <div class="form-control">
              <Segmented v-model="paperSep" :options="paperSepOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">客户编号 <i class="icon" data-tooltip="您自定义的内部编号">?</i></div>
            <div class="form-control">
               <input class="input" v-model="customerNo" placeholder="选填" style="width:200px" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">内部标识 <i class="icon" data-tooltip="打印在板上的内部标识">?</i></div>
            <div class="form-control">
               <input class="input" v-model="internalLabel" placeholder="选填" style="width:200px" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">少数处理方式 <i class="icon" data-tooltip="生产数量不足时的处理">?</i></div>
            <div class="form-control">
              <Segmented v-model="shortage" :options="shortageOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label">订单支付方式 <i class="icon" data-tooltip="选择如何支付订单">?</i></div>
            <div class="form-control">
              <Segmented v-model="paymentMethod" :options="paymentMethodOptions" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-label"><span class="req-star">*</span>品质赔付方式 <i class="icon" data-tooltip="选择品质异常时的赔付方案">?</i></div>
            <div class="form-control">
              <Segmented v-model="qualityComp" :options="qualityCompOptions" />
              <div class="inline" style="margin-top:8px;font-size:12px">
                 <a href="#" style="color:#1890ff">品质赔付标准说明</a>
              </div>
            </div>
          </div>

          <div class="form-row" style="margin-top:20px;padding-top:20px;border-top:1px dashed #eee">
            <div class="form-label"><span class="req-star">*</span>DAPE SMT贴片 <i class="icon" data-tooltip="是否需要后续贴片服务">?</i></div>
            <div class="form-control">
              <Segmented v-model="smt" :options="smtOptions" />
              <span style="font-size:12px;color:#ff4d4f;margin-left:12px">* 请选择</span>
              <a href="#" style="font-size:12px;color:#17c964;margin-left:12px">DAPE 贴片优势</a>
            </div>
          </div>
        </section>
      </div>
      <aside class="quote-right">
        <div class="side-section">
          <div class="side-title">生产周期 <a href="#" style="font-size:12px;color:#000">出货标准</a></div>
          <div class="fee-box" style="text-align:center">暂无交期</div>
        </div>
        <div class="side-section">
          <div class="side-title">发货时间</div>
          <ul class="lead-list">
            <li>当天18:00后付款，交期顺延1天</li>
            <li>当天21:00后EQ处理完成的订单，交期顺延1天</li>
            <li>周日只接单不安排生产，交期同周一下单一致</li>
          </ul>
        </div>
        <div class="side-section">
          <div class="side-title">PCB费用明细</div>
          <div class="fee-box" style="text-align:center">还未有价格，请填写具体参数</div>
        </div>
        <div class="side-section">
          <div class="side-title">运费/税费试算</div>
          <div class="field">
            <label class="label">配送至</label>
            <select class="select">
              <option>请选择</option>
              <option>广东省</option>
              <option>北京市</option>
            </select>
          </div>
          <div class="field">
            <label class="label">快递公司</label>
            <select class="select">
              <option>请选择</option>
              <option>顺丰</option>
              <option>京东</option>
            </select>
          </div>
          <div class="field">
            <label class="label">开票类型</label>
            <select class="select">
              <option>请选择</option>
              <option>普票</option>
              <option>专票</option>
            </select>
          </div>
          <div class="fee-row"><span>PCB制作费：</span><span>￥0.00</span></div>
          <div class="fee-row"><span>运费：</span><span>￥0.00</span></div>
          <div class="fee-row"><span>税费：</span><span>￥0.00</span></div>
          <div class="fee-row"><span>活动折扣：</span><span>-￥0.00</span></div>
          <div class="fee-total"><span>预估总价：</span><span class="price">￥0.00</span></div>
          <div style="font-size:12px;margin-top:6px;color:#000">仅供参考，最终价格以审核后为准</div>
          <button class="cta" style="margin-top:10px">立即下单</button>
        </div>
      </aside>
    </div>
  </main>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Segmented from '../components/Segmented.vue'
import MaterialTable from '../components/MaterialTable.vue'
import AnchorNav from '../components/AnchorNav.vue'

const route = useRoute()
const router = useRouter()

const category=ref(route.query.category || 'FR-4')

watch(category, (val) => {
  router.replace({ query: { ...route.query, category: val } })
})

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
  { value:'KB6164_TG135', brand:'建滔KB（A级）', model:'KB6164', tg:'TG135', flame:'94V-0', fee:'起步价20+10元/㎡', pdf:true },
  { value:'S1000H_TG155', brand:'生益（A级）', model:'S1000H', tg:'TG155', flame:'94V-0', fee:'起步价40+80元/㎡', pdf:true }
]
const anchors=[
  { id:'basic-info', label:'基本信息' },
  { id:'process-info', label:'工艺信息' },
  { id:'service-info', label:'服务信息' }
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

const testMethod=ref('飞针测试')
const confirmFile=ref('不需要')
const reports=ref([])
const crossBoard=ref('接受')
const paperSep=ref('无')
const customerNo=ref('')
const internalLabel=ref('')
const qtyHandling=ref('拒绝多余')
const panelCount=ref(1)

const testMethodOptions=['飞针测试','测试架测试'].map(x=>({label:x,value:x}))
const confirmFileOptions=['不需要','需要'].map(x=>({label:x,value:x}))
const reportOptions=['成品检测报告','铜厚切片报告','板材切片报告','阻抗报告','可焊性报告'].map(x=>({label:x,value:x}))
const crossBoardOptions=['接受','不接受'].map(x=>({label:x,value:x}))
const paperSepOptions=['无','一张一隔'].map(x=>({label:x,value:x}))
const qtyHandlingOptions=['拒绝多余','接受多余'].map(x=>({label:x,value:x}))
const shortage=ref('不设置')
const paymentMethod=ref('手动确认支付')
const qualityComp=ref('标准赔付')
const smt=ref('不需要')

const shortageOptions=['不设置','少数默认退款','少数默认补料'].map(x=>({label:x,value:x}))
const paymentMethodOptions=['自动扣款并确认','手动确认支付'].map(x=>({label:x,value:x}))
const qualityCompOptions=['标准赔付','元器件全额赔付（特定品质，收费）'].map(x=>({label:x,value:x}))
const smtOptions=['需要','不需要'].map(x=>({label:x,value:x}))
</script>
