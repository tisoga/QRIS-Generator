import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { TransactionNavigator } from "./Transaction";
import { MerchantNavigator } from "./Merchant";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerContentComponentProps
} from "@react-navigation/drawer";


export type RootParams = {
    TransactionDrawer: undefined
    MerchantListDrawer: undefined
}

const Drawer = createDrawerNavigator<RootParams>()


const CustomDrawer = (props: DrawerContentComponentProps): JSX.Element => {
    // console.log(props.state.index)
    return (
        <DrawerContentScrollView>
            <Text style={styles.drawerTitleText}>Qris Generator</Text>
            <View style={styles.seperator} />
            <DrawerItemList {...props} />
            {/* <DrawerItem
                // focused={props.state.index == 0}
                label={'Transaction'}
                onPress={() => props.navigation.navigate('TransactionDrawer')}
            /> */}
        </DrawerContentScrollView>
    )
}

export const RootNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="TransactionDrawer"
            screenOptions={{ headerShown: false, headerTitle: '', unmountOnBlur: true }}
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="TransactionDrawer" component={TransactionNavigator} options={{ drawerLabel: 'Transaction' }} />
            <Drawer.Screen name="MerchantListDrawer" component={MerchantNavigator} options={{ drawerLabel: 'Merchant Lists' }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerTitleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    seperator: {
        borderBottomWidth: 1,
        marginHorizontal: 25
    }
})