import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

type Props = {
    label: string,
    value: string,
    group?: boolean
}

const TextDetail = ({label, value, group = false}: Props): JSX.Element => {
    return (
        <View style={group ? { flex: 1 } : { flex: 0 }}>
            <Text style={styles.textLabel}>{label}</Text>
            <TextInput style={styles.textInput} editable={false} value={value} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        paddingVertical: 1,
        borderRadius: 7,
        color: 'black',
        textAlign: 'center'
    },
    textLabel: {
        fontWeight: 'bold',
        color: 'black'
    },
})

export default TextDetail