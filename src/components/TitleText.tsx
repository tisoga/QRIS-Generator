import {
    View,
    Text,
    StyleSheet
} from 'react-native'

type Props = {
    title: string
}

const TitleText = ({ title }: Props): JSX.Element => {
    return (
        <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        marginTop: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    textTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black'
    },
})

export default TitleText