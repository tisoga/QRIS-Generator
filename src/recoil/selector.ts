import { DefaultValue, selector } from "recoil";
import { qrisTransactionState } from "./atom";

export const guardRecoilDefaultValue = (
    candidate: any
  ): candidate is DefaultValue => {
    if (candidate instanceof DefaultValue) return true;
    return false;
  };

export const changeTipeQris = selector({
    key: 'changeTipeQris',
    get: ({ get }) => {
        return get(qrisTransactionState).tipeQris
    },
    set: ({ get, set }, val) => {
        if(guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, tipeQris: val
        }
        set(qrisTransactionState, newData)
    }
})

export const changeTipTipeQris = selector({
    key: 'changeTipTipeQris',
    get: ({ get }) => {
        return get(qrisTransactionState).jenisTip
    },
    set: ({ get, set }, val) => {
        if(guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, jenisTip: val
        }
        set(qrisTransactionState, newData)
    }
})

export const changePriceQris = selector({
    key: 'changePriceQris',
    get: ({get}) => {
        return get(qrisTransactionState).price
    },
    set: ({get, set}, val) => {
        if(guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, price: val
        }
        set(qrisTransactionState, newData)
    }
})

export const changeTipQris = selector({
    key: 'changeTipQris',
    get: ({get}) => {
        return get(qrisTransactionState).tip
    },
    set: ({get, set}, val) => {
        if(guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, tip: val
        }
        set(qrisTransactionState, newData)
    }
})