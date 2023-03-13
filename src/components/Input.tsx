import {
    StyleSheet,
    Text,
    TextInput
} from 'react-native'

type InputProps = {
    label: string,
    type: 'number-pad' | 'default'
    setter: Function
    value: string
}

const Input = (props: InputProps) => {

    const onChangeHandler = (val: String):void => {
        props.setter(val)
    }
    return (
        <>
            <Text style={styles.labelTextInput}>{props.label}</Text>
            <TextInput style={styles.textInput} keyboardType={props.type} onChangeText={onChangeHandler} value={props.value} maxLength={100}/>
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