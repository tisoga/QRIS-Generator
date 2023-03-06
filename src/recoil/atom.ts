import { atom } from "recoil"

const tipeQRIS = {
    title: 'Pilih Tipe QRIS',
    buttons:
    [
        { buttonText: 'Dynamic' },
        { buttonText: 'Static' },
    ]
}

const jenisTip = {
    title: 'Jenis TIP / Biaya Layanan',
    buttons:
    [
        { buttonText: 'Dynamic' },
        { buttonText: 'Static' },
        { buttonText: 'Percentage' }
    ]
}

const initialQrisTransaction = {
    merchantName: '',
    tipeQris: 'Dynamic',
    jenisTip: 'Dynamic',
    price: 0,
    tip: 0
}

export const tipeQrisStaticState = atom({
    key: 'tipeQrisStaticState',
    default: tipeQRIS
})

export const jenisTipStaticState = atom({
    key: 'jenisTipStaticState',
    default: jenisTip
})

export const qrisTransactionState = atom({
    key: 'qrisTransactionState',
    default: initialQrisTransaction
})