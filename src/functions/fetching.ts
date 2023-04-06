import axios, { AxiosError } from "axios"
import { main_url } from "../config/api_urls"

type DataTransaction = {
    qrCode: string
    merchantName: string
    qrisType: string
    jenisTip: string
    price?: number
    tip?: number
}

export const makeTransaction = async (data: DataTransaction) => {
    const url = main_url + '/qr/create_qris/'
    const sendData = {
        qr_code: data.qrCode,
        data: {
            qris_type: data.qrisType.toLowerCase(),
            tip_type: data.jenisTip.toLowerCase(),
            price: data.price,
            tip: data.tip,
            merchant_name: data.merchantName,
        }
    }
    try {
        const res = await axios.post(url, sendData)
        return res.data
    }
    catch (error) {
        const err = error as AxiosError
        return err.response?.data
    }
}

export const checkQRISCode = async (qrCode: string) => {
    const url = main_url + '/qr/check_qr/'
    const sendData = {
        qr_code: qrCode
    }
    try {
        const res = await axios.post(url, sendData)
        return {
            data: res.data
        }
    }
    catch (e) {
        const err = e as AxiosError
        return {
            error: {
                ...(typeof err.response?.data === 'object' && err.response?.data),
                statusCode: err.response?.status
            },
        }
    }
}