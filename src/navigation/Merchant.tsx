import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListMerchantsScreen, QrisMerchantDetailScreen } from "../screens";


export type MerchantParamList = {
    listMerchant: undefined;
    merchantDetail: { index: number };
    // merchantDetail: {
    //     qrisType: string;
    //     acquirerName: string;
    //     merchantName: string;
    //     merchantCity: string;
    //     bussinessType: string;
    //     isTipActivated: string;
    //     qrCode?: string
    // }
}

const Stack = createNativeStackNavigator<MerchantParamList>()

export const MerchantNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'listMerchant'} component={ListMerchantsScreen} options={{ headerShown: false }} />
            <Stack.Screen name={'merchantDetail'} component={QrisMerchantDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}