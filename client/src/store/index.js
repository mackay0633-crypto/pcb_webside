import { defineStore } from 'pinia'

export const useFormStore=defineStore('form',{ state:()=>({ basic:{}, process:{}, service:{} }) })
export const usePricingStore=defineStore('pricing',{ state:()=>({ area_sqm:0, fees:{ pcb:0, ship:0, tax:0, discount:0, total:0 }, breakdown:{}, lead_time:{ text:'' } }) })
