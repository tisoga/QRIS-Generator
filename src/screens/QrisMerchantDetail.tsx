import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { TextDetail, TitleText } from '../components'
import { MerchantParamList } from '../navigation/Merchant'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { RootParams } from '../navigation/RootNavigator'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { qrisTransactionState, savedQrisState } from '../recoil/atom'
import { deleteMerchant, saveMerchant } from '../recoil/selector'
import uuid from 'react-native-uuid';
import { convertTipCode } from '../functions'

type Props = CompositeScreenProps<
    NativeStackScreenProps<MerchantParamList, 'merchantDetail'>,
    DrawerScreenProps<RootParams, 'TransactionDrawer'>
>;

const QrisMerchantDetail = ({ navigation, route }: Props): JSX.Element => {
    const id = uuid.v4()
    const { index, newMerchant } = route.params;
    const merchantDetail = newMerchant ? newMerchant : useRecoilValue(savedQrisState)[index]
    const jenisTip = convertTipCode(merchantDetail.is_tip_activated)
    const setUseMerchant = useSetRecoilState(qrisTransactionState)
    const setSaveMerchant = useSetRecoilState(saveMerchant)
    const setDeleteMerchant = useSetRecoilState(deleteMerchant)

    const onPressUseMerchantBtn = (): void => {
        if (!merchantDetail.qrCode) return
        setUseMerchant({
            id: id,
            jenisTip: jenisTip,
            merchantName: merchantDetail.merchantName,
            qrCode: merchantDetail.qrCode,
            qrisType: merchantDetail.qrisType,
            price: 0,
            tip: 0
        })
        navigation.navigate('TransactionDrawer', {
            screen: 'Transaction'
        })
    }

    const onPressSaveBtn = (): void => {
        if (!merchantDetail.qrCode) return
        setSaveMerchant({
            id: id,
            qrisType: merchantDetail.qrisType,
            jenisTip: jenisTip,
            acquirerName: merchantDetail.acquirerName,
            bussinessType: merchantDetail.bussinessType,
            merchantCity: merchantDetail.merchantCity,
            merchantName: merchantDetail.merchantName,
            is_tip_activated: merchantDetail.is_tip_activated,
            qrCode: merchantDetail.qrCode,
        })
        navigation.navigate('listMerchant')
        console.log('success')
    }

    const onPressDeleteBtn = (): void => {
        const id = merchantDetail.id
        if (typeof id !== 'string') return
        setDeleteMerchant(id)
        navigation.goBack()
    }

    return (
        <View style={{ backgroundColor: '#87ceeb', flex: 1 }}>
            <TitleText title='Qris Merchant Detail' onPress={() => navigation.toggleDrawer()} />
            <View style={styles.containerMerchantDetail}>
                <TextDetail label='Acquirer QRIS' value={merchantDetail.acquirerName} />
                <TextDetail label='Nama Merchant' value={merchantDetail.merchantName} />
                <TextDetail label='Lokasi Kota Merchant' value={merchantDetail.merchantCity} />
                <View style={styles.containerGroup}>
                    <TextDetail label='Tipe Qris' value={`QRIS ${merchantDetail.qrisType.toUpperCase()}`} group />
                    <TextDetail label='Tipe Bisnis' value={merchantDetail.bussinessType} group />
                </View>
                <View style={{ gap: 10, borderBottomWidth: 1, paddingBottom: 10 }}>
                    <Text style={styles.textFiturQris}>Fitur QRIS</Text>
                    <View style={styles.containerFitur}>
                        <Text style={styles.textLabel}>TIP/Biaya Layanan</Text>
                        <BouncyCheckbox
                            fillColor='green'
                            style={{ flex: 1 }}
                            isChecked={merchantDetail.is_tip_activated === '00000' ? false : true}
                            disabled
                        />
                    </View>
                    {merchantDetail.is_tip_activated !== '00000' &&
                        <View style={styles.containerFitur}>
                            <Text style={styles.textLabel}>Tipe Tip/Biaya Layanan</Text>
                            <TextInput style={styles.textInput} editable={false} value={jenisTip} />
                        </View>
                    }
                </View>
                <View style={styles.containerButtons}>
                    <Button title='Use Merchant' color={'green'} onPress={onPressUseMerchantBtn} />
                    {newMerchant
                        ? <Button title='Save Merchant' color={'blue'} onPress={onPressSaveBtn} />
                        : <Button title='Delete Merchant' color={'red'} onPress={onPressDeleteBtn} />
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black'
    },
    containerMerchantDetail: {
        flexDirection: 'column',
        marginTop: 10,
        paddingHorizontal: 10,
        gap: 5
    },
    textInput: {
        borderWidth: 1,
        paddingVertical: 1,
        borderRadius: 7,
        color: 'black',
        textAlign: 'center',
        flex: 1
    },
    textLabel: {
        color: 'black',
        fontWeight: 'bold',
        flex: 1
    },
    containerGroup: {
        flexDirection: 'row',
        gap: 5
    },
    textInputGroup: {
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 4,
        borderRadius: 7,
        textAlign: 'center',
        color: 'black'
    },
    textFiturQris: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
        flexWrap: 'wrap',
        gap: 10
    },
    containerFitur: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default QrisMerchantDetail