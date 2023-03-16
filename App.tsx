import { NavigationContainer } from '@react-navigation/native'
import { MerchantNavigator } from './src/navigation/Merchant'
import { TransactionNavigator } from "./src/navigation/Transaction"

const App = () => {
  return (
    <NavigationContainer>
      {/* <TransactionNavigator /> */}
      <MerchantNavigator />
    </NavigationContainer>
  )
}

export default App