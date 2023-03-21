import { NavigationContainer } from '@react-navigation/native'
import { MerchantNavigator } from './src/navigation/Merchant'
import { RootNavigator } from './src/navigation/RootNavigator'
import { TransactionNavigator } from "./src/navigation/Transaction"

const App = () => {
  return (
    <NavigationContainer>
      {/* <TransactionNavigator /> */}
      {/* <MerchantNavigator /> */}
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App