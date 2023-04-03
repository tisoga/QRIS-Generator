export interface QrisTransaction {
    id: string | number[]
    qrCode: string
    merchantName: string
    qrisType: string
    jenisTip: string
    price?: number
    tip?: number
}

export interface QrisMerchant extends QrisTransaction {
    acquirerName: string
    merchantCity: string
    bussinessType: string
    is_tip_activated: string
}