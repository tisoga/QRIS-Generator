import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import DrawerMenu from './DrawerMenu'

type Props = {
    title: string,
    onPress: Function
}

const TitleText = ({ title, onPress }: Props): JSX.Element => {
    return (
        <View style={styles.containerTitle}>
            <DrawerMenu onPress={onPress} type={'merchant'} />
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
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        marginLeft: 10
    },
})

export default TitleText