import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

type ButtonProps = {
    buttonText: String,
}

type SectionProps = {
    title: String,
    buttons: ButtonProps[]
}

const ButtonWithText = (props: SectionProps): JSX.Element => {
    return (
        <>
            <Text style={styles.textH1}>{props.title}</Text>
            <View style={styles.buttonContainer}>
                {props.buttons.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.7} style={styles.buttonMenu}>
                        <Text style={styles.textButton}>{item.buttonText}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textH1: {
        fontSize: 30,
        color: 'blue',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row', 
        gap: 10, 
        justifyContent: 'space-evenly', 
        flexWrap: 'wrap',
        marginVertical: 10
    },
    textButton: {
        color: 'black',
        textAlign: 'center'
    },
    textButtonClicked: {
        color: 'white',
        textAlign: 'center'
    },
    buttonMenu: {
        backgroundColor: 'white',
        width: 100,
        height: 40,
        justifyContent: 'center',
        borderRadius: 9,
        borderWidth: 1
    },
    buttonMenuClicked: {
        backgroundColor: 'green',
        width: 100,
        height: 40,
        justifyContent: 'center',
        borderRadius: 9,
        borderWidth: 1,
    },
})

export default ButtonWithText