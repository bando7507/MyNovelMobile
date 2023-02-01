import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Walkthrough from './src/Screens/Walkthrough/Walkthrough';
import Welcome from './src/Screens/Walkthrough/Welcome';


export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName={'Welcome'}
      >
        <Stack.Screen 
        name='Welcome'
        component={Welcome}
        />
        <Stack.Screen
        name='Walkthrough'
        component={Walkthrough}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}


