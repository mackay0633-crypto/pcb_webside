import { copperAdderPerSqm, lwlsAdderPerSqm, holeAdderPerSqm, finishAdderPerSqm, layerAdderPerSqm, hdiAdderPerSqm, impedanceAdderPerSqm } from './pricingRules.js'
export function calculatePrice(body){
  const b=body.basic||{}
  const p=body.process||{}
  const width=Number(b.width_cm||0)
  const height=Number(b.height_cm||0)
  const qty=Number(b.qty_pcs||0)
  const area=width*height*qty/10000
  const materialPerSqm=Number(b.material_per_sqm||0)
  let per=materialPerSqm
  per+=layerAdderPerSqm(Number(b.layers||2))
  per+=copperAdderPerSqm[Number(p.copper_oz||1)]||0
  per+=lwlsAdderPerSqm[String(p.lwls_mil||'10/10')]||0
  per+=holeAdderPerSqm[Number(p.hole_mm||0.3)]||0
  per+=finishAdderPerSqm[String(p.finish||'有铅喷锡')]||0
  per+=hdiAdderPerSqm(String(b.hdi||'无'))
  per+=impedanceAdderPerSqm(String(p.impedance||'无'))
  const pcb=per*area
  const ship=0
  const tax=0
  const discount=0
  const total=pcb+ship+tax-discount
  const text=area>0? '参数已提交，交期待确认' : '暂无交期'
  return { area_sqm:area, breakdown:{ per_sqm_base:materialPerSqm, adders:{ per_layer:layerAdderPerSqm(Number(b.layers||2)), per_copper:copperAdderPerSqm[Number(p.copper_oz||1)]||0, per_lwls:lwlsAdderPerSqm[String(p.lwls_mil||'10/10')]||0, per_hole:holeAdderPerSqm[Number(p.hole_mm||0.3)]||0, per_finish:finishAdderPerSqm[String(p.finish||'有铅喷锡')]||0, per_hdi:hdiAdderPerSqm(String(b.hdi||'无')), per_impedance:impedanceAdderPerSqm(String(p.impedance||'无')) } }, fees:{ pcb, ship, tax, discount, total }, lead_time:{ text } }
}
