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
    qrCode: '00020101021126660014ID.LINKAJA.WWW011893600911002164800102152009170916480010303UME51450015ID.OR.GPNQR.WWW02150000000000000000303UME520454995802ID5903KAI6009Indonesia61051532562210117ESP1663719323KBQH53033606304',
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