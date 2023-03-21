import { TouchableOpacity, StyleSheet, Image } from "react-native"

type Props = {
    onPress: Function
}

const DrawerMenu = ({ onPress }: Props): JSX.Element => {

    const toggleDrawer = () => {
        onPress()
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={toggleDrawer}
            style={styles.container}>
            <Image
                source={require('../assets/toggle-drawer-icon.png')}
                style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 7,
        left: 10,
    },
})

export default DrawerMenu