import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListMerchantsScreen, QrisMerchantDetailScreen, QRScannerScreen } from "../screens";

type MerchantDetailProps = {
    qrisType: string;
    acquirerName: string;
    merchantName: string;
    merchantCity: string;
    bussinessType: string;
    is_tip_activated: string;
    qrCode?: string
}

export type MerchantParamList = {
    listMerchant: undefined;
    merchantDetail: { index: number, newMerchant?: MerchantDetailProps };
    addMerchant: undefined;
}

const Stack = createNativeStackNavigator<MerchantParamList>()

export const MerchantNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'listMerchant'} component={ListMerchantsScreen} options={{ headerShown: false }} />
            <Stack.Screen name={'merchantDetail'} component={QrisMerchantDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name={'addMerchant'} component={QRScannerScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}