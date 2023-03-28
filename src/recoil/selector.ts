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
        return get(qrisTransactionState).qrisType
    },
    set: ({ get, set }, val) => {
        if(guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, tipeQris: val, price: 0
        }
        set(qrisTransactionState, newData)
    }
})

export const changeTipTipeQris = selector({
    key: 'changeTipTipeQris',
    get: ({ get }) => {
        return get(qrisTransactionState).qrisType
    },
    set: ({ get, set }, val) => {
        if(guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, qrisType: val, tip: 0
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
        const newPrice = Number(val)
        const newData = {
            ...data, price: isNaN(newPrice) ? 0 : newPrice
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
        const newPrice = Number(val)
        const newData = {
            ...data, tip: isNaN(newPrice) ? 0 : newPrice
        }
        set(qrisTransactionState, newData)
    }
})

export const changeMerchantName = selector({
    key: 'changeMerchantName',
    get: ({get}) => {
        return get(qrisTransactionState).merchantName
    },
    set: ({get, set}, val) => {
        if(guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, merchantName: val
        }
        set(qrisTransactionState, newData)
    }
})