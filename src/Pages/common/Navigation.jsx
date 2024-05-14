import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TodaysMenu from './TodaysMenu';
import HomePage from './HomePage';
import Details from './Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator(),
  tab = createBottomTabNavigator();

const HomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="TodaysMenu" component={TodaysMenu} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>

const DetailStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="TodaysMenu" component={TodaysMenu} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>

const MainStack = () =>
  <Stack.Navigator>
    <Stack.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false }}></Stack.Screen>
  </Stack.Navigator>

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default Navigation;
