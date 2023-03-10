import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthMain, Home, ScanPrds } from './src/Screens';
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

        <Stack.Screen 
        name='AuthMain'
        component={AuthMain}
        />

        <Stack.Screen 
        name='Home'
        component={Home}
        />

        <Stack.Screen 
        name='ScanPrds'
        component={ScanPrds}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}


