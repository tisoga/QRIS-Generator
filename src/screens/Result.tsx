import {
    View,
    StyleSheet,
    Text,
    Image,
    Button
} from 'react-native';
import { crossIcon, qrisNotSupportedIcon } from '../assets';

const Result = (): JSX.Element => {

    const errorSelector = {
        qrisNotSupported: {
            imageSrc: qrisNotSupportedIcon,
            styleSrc: styles.qrisIcon,
            text: "QRIS Code Tidak Support, Silahkan gunakan QRIS yang lain"
        },
        anotherError: {
            imageSrc: crossIcon,
            styleSrc: styles.crossIcon,
            text: 'Koneksi internet anda atau server sedang tidak dapat diakses, silahkan coba kembali.'
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTop}>Terjadi Kesalahan,</Text>
            <Image
                source={errorSelector.anotherError.imageSrc}
                style={errorSelector.anotherError.styleSrc} />
            <Text style={styles.textBottom}>{errorSelector.anotherError.text}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Scan Ulang' color={'green'} />
                <Button title='Kembali ke Menu Utama' />
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