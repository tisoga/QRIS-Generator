import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useRecoilState, useRecoilValue, useSetRecoilState, useRecoilValueLoadable } from 'recoil'
import { ButtonWithText, DrawerMenu, Input } from '../components'
import { makeTransaction } from '../functions/fetching'
import { jenisTipStaticState, qrisTransactionState, tipeQrisStaticState } from '../recoil/atom'
import { changeMerchantName, changePriceQris, changeTipeQris, changeTipQris, changeTipTipeQris } from '../recoil/selector'
import { TransactionParamList } from '../navigation/Transaction'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { RootParams } from '../navigation/RootNavigator'
import Loading from './Loading'


type Props = CompositeScreenProps<
    NativeStackScreenProps<TransactionParamList, 'Transaction'>,
    DrawerScreenProps<RootParams, 'TransactionDrawer'>
>;

const Transaction = ({ navigation }: Props): JSX.Element => {
    const merchantState = useRecoilValueLoadable(qrisTransactionState);
    const [isLoading, setLoading] = useState(false);
    const [initialMerchantName, setInitialMerchantname] = useState('');
    const tipeQrisStatic = useRecoilValue(tipeQrisStaticState);
    const jenisTipStatic = useRecoilValue(jenisTipStaticState);
    const [activeButtonTipe, setTipeQris] = useRecoilState(changeTipeQris);
    const [activeButtonTip, setTipTipeQris] = useRecoilState(changeTipTipeQris);
    const [isChangeMerchantName, setStatusMerchantName] = useState<boolean>(false);
    const setMerchantName = useSetRecoilState(changeMerchantName);
    const setPrice = useSetRecoilState(changePriceQris);
    const setTip = useSetRecoilState(changeTipQris);

    useEffect(() => {
        if (merchantState.state === 'hasValue') {
            setInitialMerchantname(merchantState.contents.merchantName);
        }
    }, [merchantState]);

    const changeCheckBoxStatus = (): void => {
        if (!isChangeMerchantName) {
            Alert.alert('Perhatian', 'Tidak semua merchant setelah pergantian nama dapat melakukan transaksi, jika pembayaran tidak dapat dilakukan silahkan matikan fitur ini.')
        }
        setMerchantName(initialMerchantName);
        setStatusMerchantName(!isChangeMerchantName);
    };

    const generateQRCode = async () => {
        if (!merchantState.contents.price && activeButtonTip === 'static') return Alert.alert('Perhatian', 'Harga Barang Harus lebih dari 0')
        else if (merchantState.contents.tip && merchantState.contents.tip > 100 && activeButtonTip === 'Percentage') return Alert.alert('Perhatian', 'Tip Tidak boleh lebih dari 100%')
        setLoading(true);
        const res = await makeTransaction(merchantState.contents);
        if (!res.error) {
            setLoading(false);
            navigation.navigate('QRPayment', {
                qrCode: res.data,
                merchantName: merchantState.contents.merchantName,
                price: merchantState.contents.price,
                tip: merchantState.contents.tip
            })
        }
        else {
            setLoading(false);
            navigation.navigate('Result',{
                errorMsg: 'networkError'
            })
        }
    };

    if (merchantState.state === 'loading' || isLoading) {
        return (
            <Loading textBottom='' />
        )
    }

    return (
        <View style={{ backgroundColor: '#87ceeb', flex: 1 }}>
            <View style={styles.containerTitle}>
                <DrawerMenu onPress={() => navigation.toggleDrawer()} type={'transaction'} />
                <View style={styles.containerMerchantName}>
                    <Text style={styles.textTitle}>{initialMerchantName}</Text>
                </View>
            </View>
            <View style={styles.containerMain}>
                <BouncyCheckbox
                    isChecked={isChangeMerchantName}
                    onPress={changeCheckBoxStatus}
                    text='Ganti Nama Merchant'
                    fillColor='green'
                    textStyle={{ textDecorationLine: 'none', color: 'black' }}
                    disableBuiltInState />
                <View style={styles.containerSecond}>
                    <ButtonWithText
                        title={tipeQrisStatic.title}
                        buttons={tipeQrisStatic.buttons}
                        changeState={setTipeQris}
                        activeButton={activeButtonTipe} />
                    <ButtonWithText
                        title={jenisTipStatic.title}
                        buttons={jenisTipStatic.buttons}
                        changeState={setTipTipeQris}
                        activeButton={activeButtonTip} />
                    {isChangeMerchantName &&
                        <Input label={'Masukan Nama Merchant'} type={'default'} setter={setMerchantName} value={merchantState.contents.merchantName} />
                    }
                    <View style={{ marginTop: 20 }}>
                        {activeButtonTipe === 'Static' &&
                            <Input label={'Masukan Harga'} type={'number-pad'} setter={setPrice} value={String(merchantState.contents.price)} />
                        }
                        {activeButtonTip === 'Dynamic' ||
                            <Input
                                label={`Masukan Jumlah ${activeButtonTip === 'Percentage' ? 'Persentase ' : ''}Tip`}
                                type={'number-pad'}
                                setter={setTip}
                                value={String(merchantState.contents.tip)} />
                        }
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button title={`Generate ${activeButtonTipe} QRIS`} onPress={generateQRCode} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        marginTop: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2
    },
    containerMain: {
        marginTop: 10,
        marginHorizontal: 10,
        flex: 1,
    },
    containerSecond: {
        marginVertical: 5,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    containerMerchantName: {
        alignSelf: 'center',
        width: '60%'
    },
    textTitle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textInput: {
        borderWidth: 1,
        paddingVertical: 5,
        borderRadius: 5,
    },
    labelTextInput: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2
    },
    container: {
        position: 'absolute',
        top: 7,
        left: 10,
    },
})

export default Transaction