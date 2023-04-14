import { DefaultValue, selector } from "recoil";
import { qrisTransactionState, savedQrisState } from "./atom";
import { QrisMerchant, QrisTransaction } from "./types";

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
        if (guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, qrisType: val, price: 0
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
        if (guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, jenisTip: val, tip: 0
        }
        set(qrisTransactionState, newData)
    }
})

export const changePriceQris = selector({
    key: 'changePriceQris',
    get: ({ get }) => {
        return get(qrisTransactionState).price
    },
    set: ({ get, set }, val) => {
        if (guardRecoilDefaultValue(val)) return
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
    get: ({ get }) => {
        return get(qrisTransactionState).tip
    },
    set: ({ get, set }, val) => {
        if (guardRecoilDefaultValue(val)) return
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
    get: ({ get }) => {
        return get(qrisTransactionState).merchantName
    },
    set: ({ get, set }, val) => {
        if (guardRecoilDefaultValue(val)) return
        const data = get(qrisTransactionState)
        const newData = {
            ...data, merchantName: val
        }
        set(qrisTransactionState, newData)
    }
})

export const saveMerchant = selector({
    key: 'saveMerchant',
    get: ({ get }) => {
        const merchant: QrisMerchant = {
            id: '',
            qrisType: '',
            jenisTip: '',
            acquirerName: '',
            bussinessType: '',
            merchantCity: '',
            merchantName: '',
            is_tip_activated: '',
            qrCode: '',
        }
        return merchant
    },
    set: ({ get, set }, newMerchant) => {
        if (guardRecoilDefaultValue(newMerchant)) return
        const listMerchants = [...get(savedQrisState)]
        listMerchants.push(newMerchant)
        set(savedQrisState, listMerchants)
    }
})

export const deleteMerchant = selector({
    key: 'deleteMerchant',
    get: ({ get }) => {
        return ''
    },
    set: ({ get, set }, id) => {
        if (guardRecoilDefaultValue(id)) return
        console.log('delete')
        const listMerchants = get(savedQrisState)
        const newMerchants = listMerchants.filter((item) => item.id !== id)
        set(savedQrisState, newMerchants)
    }
})

export const useMerchant = selector({
    key: 'useMerchant',
    get: ({ get }) => {
        return get(qrisTransactionState)
    },
    set: ({ set }, merchantDetail) => {
        if (guardRecoilDefaultValue(merchantDetail)) return
        const merchant : QrisTransaction = {
            id: merchantDetail.id,
            qrisType: merchantDetail.qrisType,
            jenisTip: merchantDetail.jenisTip,
            merchantName: merchantDetail.merchantName,
            qrCode: merchantDetail.qrCode,
            price: 0,
            tip: 0
        }
        set(qrisTransactionState, merchant)
    }
})