import {
    View,
    StyleSheet,
    Text,
    Image,
    Button
} from 'react-native';
import { crossIcon, qrisNotSupportedIcon } from '../assets';
import { CompositeScreenProps, CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootParams } from '../navigation/RootNavigator';
import { MerchantParamList } from '../navigation/Merchant';

type Props = CompositeScreenProps<
    NativeStackScreenProps<MerchantParamList, 'Result'>,
    DrawerScreenProps<RootParams, 'TransactionDrawer'>
>;

const Result = ({ navigation, route }: Props): JSX.Element => {
    const { errorMsg } = route.params
    const errorSelector = {
        qrisNotSupported: {
            imageSrc: qrisNotSupportedIcon,
            styleSrc: styles.qrisIcon,
            text: "QRIS Code Tidak Support, Silahkan gunakan QRIS yang lain"
        },
        networkError: {
            imageSrc: crossIcon,
            styleSrc: styles.crossIcon,
            text: 'Koneksi internet anda atau server sedang tidak dapat diakses, silahkan coba kembali.'
        }
    }

    const onPressScanAgain = () => {
        navigation.goBack()
    }

    const onPressBackHome = () => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'listMerchant' },
            ],
        }));
        navigation.navigate('TransactionDrawer', {
            screen: 'Transaction',
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTop}>Terjadi Kesalahan,</Text>
            <Image
                source={errorSelector[errorMsg].imageSrc}
                style={errorSelector[errorMsg].styleSrc} />
            <Text style={styles.textBottom}>{errorSelector[errorMsg].text}</Text>
            <View style={styles.buttonContainer}>
                {errorMsg === 'qrisNotSupported' && (
                    <Button title='Scan Ulang' color={'green'} onPress={onPressScanAgain} />
                )}
                <Button title='Kembali ke Menu Utama' onPress={onPressBackHome} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87ceeb',
        flex: 1,
        gap: 10,
        justifyContent: 'center'
    },
    buttonContainer: {
        gap: 5,
        paddingHorizontal: 40
    },
    textTop: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    qrisIcon: {
        width: '100%',
        height: 200,
        alignSelf: 'center'
    },
    crossIcon: {
        width: '30%',
        height: 100,
        alignSelf: 'center'
    }
})

export default Result