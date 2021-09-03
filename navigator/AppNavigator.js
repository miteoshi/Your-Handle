import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DashBoardScreen from "../source/screens/DashBoardScreen";
//screens
import LoginScreen from "../source/screens/LoginScreen";

const MainStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="DashBoard" component={DashBoardScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator
