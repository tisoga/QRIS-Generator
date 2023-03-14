import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import QRCode from 'react-native-qrcode-svg'
import { TransactionParamList } from '../navigation/Transaction'

type Props = NativeStackScreenProps<TransactionParamList, "QRPayment">

const QRPayment = ({ navigation, route }: Props): JSX.Element => {
    const { merchantName, qrCode, price, tip } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.merchantTextName}>{merchantName}</Text>
            <QRCode
                value={qrCode}
                size={240}
            />
            <View style={{ width: '100%' }}>
                {tip &&
                    <View style={styles.tipContainer}>
                        <Text style={styles.titleText}>Tip</Text>
                        <Text style={styles.colonText}>:</Text>
                        <Text style={styles.priceText}>Rp. 100.000</Text>
                    </View>
                }
                {price &&
                    <View style={styles.priceContainer}>
                        <Text style={styles.titleText}>Price</Text>
                        <Text style={styles.colonText}>:</Text>
                        <Text style={styles.priceText}>Rp. 100.000</Text>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87ceeb',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: 0.6,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    merchantTextName: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black'
    },
    priceText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
        width: 60
    },
    colonText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
        width: 10
    }
})
export default QRPayment
