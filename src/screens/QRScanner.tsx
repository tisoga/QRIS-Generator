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
import { CompositeScreenProps } from '@react-navigation/native';
import { RootParams } from '../navigation/RootNavigator';
import { DrawerScreenProps } from '@react-navigation/drawer';

type Props = CompositeScreenProps<
    NativeStackScreenProps<MerchantParamList, 'addMerchant'>,
    DrawerScreenProps<RootParams, 'TransactionDrawer'>
>;

const QRScanner = ({ navigation }: Props) => {
    const [loading, setLoading] = useState(false)
    const onSuccess = async (e: any) => {
        setLoading(true)
        const res = await checkQRISCode(e.data)
        console.log(res)
        if (res?.data) {
            setLoading(false)
            const { acquirer_name, bussiness_type, is_tip_activated, merchant_city, merchant_name, qr_code, qris_type } = res.data;
            navigation.navigate('merchantDetail', {
                index: 0,
                newMerchant: {
                    id: '',
                    acquirerName: acquirer_name,
                    bussinessType: bussiness_type,
                    is_tip_activated: is_tip_activated,
                    merchantCity: merchant_city,
                    merchantName: merchant_name,
                    qrCode: qr_code,
                    qrisType: qris_type
                }
            })
            // console.log(res.data)
        }
        else {
            // console.log(res.error)
            if (res.error?.detail) {
                navigation.navigate('TransactionDrawer', {
                    screen: 'Result', params: { errorMsg: 'qrisNotSupported' }
                })
            }
            else {
                navigation.navigate('TransactionDrawer', {
                    screen: 'Result', params: { errorMsg: 'networkError' }
                })
            }
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