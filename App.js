//import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./src/screens/HomeScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import Login from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import { Box, NativeBaseProvider, VStack, useColorModeValue } from 'native-base';
import theme from './theme';
import ToggleDarkMode from './TogleDarkMode';
import ProfileScreen from './src/screens/Profile';
import Competencias from "./src/screens/Competencias";
import ConfigurationScreen from "./src/screens/ConfigScreen";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'document-text' : 'document-text';
          } else if (route.name === 'Monitor') {
            iconName = focused ? 'bar-chart' : 'bar-chart';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Config') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="Reports" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Monitor" component={NotificationsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Home" component={OrdersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Competencias" component={Competencias} options={{ headerShown: false }} />
      <Tab.Screen name="Configuracion" component={ConfigurationScreen} options={{ headerShown: false }} />

    </Tab.Navigator>
  );
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <VStack flex={1} bg={useColorModeValue("light.background.50", "dark.background.900")}>
          <Box safeAreaTop bg={useColorModeValue('light.background.100', 'dark.background.900')}>
            <ToggleDarkMode />
          </Box>
          <Stack.Navigator initialRouteName={isAuthenticated ? "MainTab" : "Login"}>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {() => <Login setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
              {() => <RegisterScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
          </Stack.Navigator>
        </VStack>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;