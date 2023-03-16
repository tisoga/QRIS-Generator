import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { TextDetail, TitleText } from '../components'
import { MerchantParamList } from '../navigation/Merchant'

type Props = NativeStackScreenProps<MerchantParamList, 'merchantDetail'>

const QrisMerchantDetail = ({ navigation }: Props): JSX.Element => {
    return (
        <View style={{ backgroundColor: '#87ceeb', flex: 1 }}>
            <TitleText title='Qris Merchant Detail' />
            <View style={styles.containerMerchantDetail}>
                <TextDetail label='Acquirer QRIS' value='TEst' />
                <TextDetail label='Nama Merchant' value='TEst' />
                <TextDetail label='Lokasi Kota Merchant' value='TEst' />
                <View style={styles.containerGroup}>
                    <TextDetail label='Tipe Qris' value='QRIS Static' group />
                    <TextDetail label='Tipe Bisnis' value='Usaha Menengah' group />
                </View>
                <View style={{ gap: 10, borderBottomWidth: 1, paddingBottom: 10 }}>
                    <Text style={styles.textFiturQris}>Fitur QRIS</Text>
                    <View style={styles.containerFitur}>
                        <Text style={styles.textLabel}>TIP/Biaya Layanan</Text>
                        <BouncyCheckbox
                            fillColor='green'
                            style={{ flex: 1 }}
                            disabled
                        />
                    </View>
                    <View style={styles.containerFitur}>
                        <Text style={styles.textLabel}>Tipe Tip/Biaya Layanan</Text>
                        <TextInput style={styles.textInput} editable={false} value={'Percentage'} />
                    </View>
                </View>
                <View style={styles.containerButtons}>
                    <Button title='Save Merchant' color={'blue'} />
                    <Button title='Use Merchant' color={'green'} />
                    <Button title='Delete Merchant' color={'red'} />
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