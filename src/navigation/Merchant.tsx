import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListMerchantsScreen, QrisMerchantDetailScreen, QRScannerScreen, ResultScreen } from "../screens";

type MerchantDetailProps = {
    id: string | number[]
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
    Result: { errorMsg: 'qrisNotSupported' | 'networkError' }
}

const Stack = createNativeStackNavigator<MerchantParamList>()

export const MerchantNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'listMerchant'} component={ListMerchantsScreen} options={{ headerShown: false }} />
            <Stack.Screen name={'merchantDetail'} component={QrisMerchantDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name={'addMerchant'} component={QRScannerScreen} options={{ headerShown: false }} />
            <Stack.Screen name={"Result"} component={ResultScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}