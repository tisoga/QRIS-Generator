import { TouchableOpacity, StyleSheet, Image } from "react-native"

type Props = {
    onPress: Function
    type: 'merchant' | 'transaction'
}

const DrawerMenu = ({ onPress, type }: Props): JSX.Element => {

    const toggleDrawer = () => {
        onPress()
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={toggleDrawer}
            style={type === 'merchant' ? styles.containerMerchant : styles.containerTransaction }>
            <Image
                source={require('../assets/toggle-drawer-icon.png')}
                style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerMerchant: {
        position: 'absolute',
        top: 7,
        left: 10,
    },
    containerTransaction: {
        width: 30,
    }
})

export default DrawerMenu