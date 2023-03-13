import axios, { AxiosError } from "axios"
import { main_url } from "../config/api_urls"

type DataTransaction = {
    qrCode: string
    merchantName: string
    tipeQris: string
    jenisTip: string
    price: number
    tip: number
}

export const makeTransaction = async (data: DataTransaction) => {
    const url = main_url + '/qr/create_qris/'
    const sendData = {
        qr_code: data.qrCode,
        data: {
            qris_type: data.tipeQris.toLowerCase(),
            tip_type: data.jenisTip.toLowerCase(),
            price: data.price,
            tip: data.tip,
            merchant_name: data.merchantName,
         }
    }
    console.log(sendData)
    try {
        const res = await axios.post(url, sendData)
        console.log(res.data)
    }
    catch (error) {
        const err = error as AxiosError
        console.log(err.response?.data)
      }
} 