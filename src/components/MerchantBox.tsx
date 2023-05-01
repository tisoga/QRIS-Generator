import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { convertBusinessCode } from '../functions'

type Props = {
    merchantName: string,
    acquirer: string,
    tipeBisnis: string,
    onPress: Function,
    index: number
}

const MerchantBox = ({ merchantName, acquirer, tipeBisnis, onPress, index }: Props): JSX.Element => {
    return (
        <TouchableOpacity style={styles.merchantBox} activeOpacity={0.5} onPress={() => onPress(index)}>
            <View style={styles.merchantNameContainer}>
                <Text style={styles.merchantName}>{merchantName}</Text>
            </View>
            <View style={styles.acquirerContainer}>
                <Text style={styles.textAcquirer}>Acquirer : {acquirer}</Text>
            </View>
            <View style={styles.tipeBisnisContainer}>
                <Text style={styles.tipeBisnisTextLeft}>Tipe Bisnis : </Text>
                <Text style={styles.tipeBisnisTextRight}>{tipeBisnis}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    merchantBox: {
        borderWidth: 2,
        marginHorizontal: 10,
        borderRadius: 7,
        height: 120,
        padding: 5,
        backgroundColor: 'white',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2,
    },
    merchantNameContainer: {
        height: '48%',
        width: '50%',
        justifyContent: 'flex-start',
    },
    merchantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        flexWrap: 'wrap'
    },
    acquirerContainer: {
        height: '48%',
        width: '50%',
        justifyContent: 'flex-end'
    },
    textAcquirer: {
        color: 'black',
        textAlign: 'right'
    },
    tipeBisnisContainer: {
        height: '48%',
        width: '50%',
        alignSelf: 'flex-start'
    },
    tipeBisnisTextLeft: {
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    tipeBisnisTextRight: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'black'
    }
})

export default MerchantBox