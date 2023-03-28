import { NavigationContainer } from '@react-navigation/native'
import { MerchantNavigator } from './src/navigation/Merchant'
import { RootNavigator } from './src/navigation/RootNavigator'
import { TransactionNavigator } from "./src/navigation/Transaction"
import Loading from './src/screens/Loading'
import Result from './src/screens/Result'

const App = () => {
  return (
    <NavigationContainer>
      {/* <TransactionNavigator /> */}
      {/* <MerchantNavigator /> */}
      <RootNavigator />
      {/* <Loading /> */}
      {/* <Result /> */}
    </NavigationContainer>
  )
}

export default App