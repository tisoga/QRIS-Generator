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

type Props = CompositeScreenProps<
    NativeStackScreenProps<MerchantParamList, 'merchantDetail'>,
    DrawerScreenProps<RootParams, 'TransactionDrawer'>
>;

const QrisMerchantDetail = ({ navigation, route }: Props): JSX.Element => {
    const { index, newMerchant } = route.params;
    const merchantDetail = newMerchant ? newMerchant : useRecoilValue(savedQrisState)[index]
    const setMerchant = useSetRecoilState(qrisTransactionState)

    const chooseMerchant = (): void => {
        // setMerchant(merchantDetail)
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
                            <TextInput style={styles.textInput} editable={false} value={'Percentage'} />
                        </View>
                    }
                </View>
                <View style={styles.containerButtons}>
                    <Button title='Use Merchant' color={'green'} />
                    {newMerchant
                        ?<Button title='Save Merchant' color={'blue'} />
                        :<Button title='Delete Merchant' color={'red'} />
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