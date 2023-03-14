import { NavigationContainer } from '@react-navigation/native'
import { TransactionNavigator } from "./src/navigation/Transaction"

const App = () => {
  return (
    <NavigationContainer>
      <TransactionNavigator />
    </NavigationContainer>
  )
}

export default App