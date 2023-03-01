import {
    StyleSheet,
    Text,
    TextInput
} from 'react-native'

type InputProps = {
    label: String,
}

const Input = (props: InputProps) => {
    return (
        <>
            <Text style={styles.labelTextInput}>{props.label}</Text>
            <TextInput style={styles.textInput} />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        paddingVertical: 5,
        borderRadius: 5,
    },
    labelTextInput: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2
    }
})

export default Input