export const copperAdderPerSqm={1:0,2:20,3:40,4:60}
export const lwlsAdderPerSqm={"10/10":0,"8/8":10,"6/6":20,"5/5":40,"4/4":80,"3.5/3.5":120}
export const holeAdderPerSqm={0.3:0,0.25:10,0.2:40,0.15:80}
export const finishAdderPerSqm={"有铅喷锡":0,"无铅喷锡":10,"OSP":20,"沉金":60}
export function layerAdderPerSqm(n){ if(n<=2) return 0; if(n<=4) return 20; if(n<=6) return 40; if(n<=8) return 60; return 80 }
export function hdiAdderPerSqm(v){ if(v==='无') return 0; if(v==='1阶') return 80; if(v==='2阶') return 120; return 160 }
export function impedanceAdderPerSqm(v){ return v==='有' ? 20 : 0 }
