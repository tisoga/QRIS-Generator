import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

type props = {
    textBottom: string
}

const Loading = ({ textBottom }: props): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTop}>Mohon Tunggu ...</Text>
            <ActivityIndicator size={100} animating={true} color={'green'} />
            <Text style={styles.textBottom}>{textBottom}</Text>
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
    textTop: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    textBottom: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Loading