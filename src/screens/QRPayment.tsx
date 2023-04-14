import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import QRCode from 'react-native-qrcode-svg'
import { TransactionParamList } from '../navigation/Transaction'
import { convertIdrCurrency } from '../functions'

type Props = NativeStackScreenProps<TransactionParamList, "QRPayment">

const QRPayment = ({ route }: Props): JSX.Element => {
    const { merchantName, qrCode, price, tip } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.merchantTextName}>{merchantName}</Text>
            <QRCode
                value={qrCode}
                size={240}
            />
            <View style={{ width: '100%' }}>
                {String(tip) !== '0' &&
                    (
                        <View style={styles.tipContainer}>
                            <Text style={styles.titleText}>Tip</Text>
                            <View style={styles.colonContainer}>
                                <Text style={styles.colonText}>:</Text>
                            </View>
                            <Text style={styles.priceText}>{convertIdrCurrency(Number(tip))}</Text>
                        </View>
                    )
                }
                {String(price) !== '0' &&
                    (
                        <View style={styles.priceContainer}>
                            <Text style={styles.titleText}>Price</Text>
                            <View style={styles.colonContainer}>
                                <Text style={styles.colonText}>:</Text>
                            </View>
                            <Text style={styles.priceText}>{convertIdrCurrency(Number(price))}</Text>
                        </View>
                    )
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
        alignItems: 'center'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        marginLeft: 5,
        color: 'black',
        minWidth: 140 // add this line
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
        width: 80
    },
    colonContainer: {
        flexDirection: 'row',
        width: 20
    },
    colonText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
        alignSelf: 'center'
    }
})

export default QRPayment
