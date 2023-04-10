import axios, { AxiosError } from "axios";
import { main_url } from "../config/api_urls";

interface TransactionData {
    qrCode: string;
    merchantName: string;
    qrisType: string;
    jenisTip: string;
    price?: number;
    tip?: number;
}

interface ApiResponse {
    data?: any;
    error?: any;
}

export const makeTransaction = async (data: TransactionData): Promise<ApiResponse> => {
    const url = `${main_url}/qr/create_qris/`;
    const sendData = {
        qr_code: data.qrCode,
        data: {
            qris_type: data.qrisType.toLowerCase(),
            tip_type: data.jenisTip.toLowerCase(),
            price: data.price,
            tip: data.tip,
            merchant_name: data.merchantName,
        },
    };

    try {
        const res = await axios.post(url, sendData);
        return { data: res.data };
    }
    catch (error) {
        const err = error as AxiosError;

        if (err.response) {
            return {
                error: {
                    ...(typeof err.response?.data === "object" && err.response?.data),
                    statusCode: err.response?.status,
                },
            };
        }
        else {
            return { error: "Network Error" };
        }
    }
};

export const checkQRISCode = async (qrCode: string): Promise<ApiResponse> => {
    const url = `${main_url}/qr/check_qr/`;
    const sendData = { qr_code: qrCode };

    try {
        const res = await axios.post(url, sendData);
        return { data: res.data };
    }
    catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            return {
                error: {
                    ...(typeof err.response?.data === "object" && err.response?.data),
                    statusCode: err.response?.status,
                },
            };
        }
        else {
            return { error: "Network Error" };
        }
    }
};
