import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { checkQRISCode } from '../functions/fetching';
import Loading from './Loading';
import { MerchantParamList } from '../navigation/Merchant';

type Props = NativeStackScreenProps<MerchantParamList, 'addMerchant'>

const QRScanner = ({ navigation }: Props) => {
    const [loading, setLoading] = useState(false)
    const onSuccess = async (e: any) => {
        setLoading(true)
        const res = await checkQRISCode(e.data)
        if (res?.data) {
            setLoading(false)
            navigation.navigate('merchantDetail', {
                index: 0,
                newMerchant: {
                    acquirerName: res.data?.acquirer_name,
                    bussinessType: res.data?.bussiness_type,
                    is_tip_activated: res.data?.is_tip_activated,
                    merchantCity: res.data?.merchant_city,
                    merchantName: res.data?.merchant_name,
                    qrCode: res.data?.qr_code,
                    qrisType: res.data?.qris_type
                }
            })
            console.log(res.data)
        }
        else {
            setLoading(false)
            navigation.navigate('merchantDetail', {
                index: 0
            })
        }
    };

    if (loading) {
        return (
            <Loading textBottom='Kode QRIS, sedang di cek!' />
        )
    }

    return (
        <QRCodeScanner
            onRead={onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.centerText}>
                    Silahkan Scan kode QRIS anda.
                </Text>
            }
            bottomContent={
                <TouchableOpacity onPress={() => console.log(loading)} >
                    <Text >OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    );
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
        fontWeight: 'bold'
    },
});

export default QRScanner