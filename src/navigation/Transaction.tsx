import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QRPaymentScreen, ResultScreen, TransactionScreen } from "../screens";

export type TransactionParamList = {
    Transaction: undefined;
    QRPayment: { qrCode: string, merchantName: string, tip?: number, price?: number };
    Result: { errorMsg: 'qrisNotSupported' | 'networkError' }
}

const Stack = createNativeStackNavigator<TransactionParamList>();

export const TransactionNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Transaction" component={TransactionScreen} options={{ headerShown: false }} />
            <Stack.Screen name="QRPayment" component={QRPaymentScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}