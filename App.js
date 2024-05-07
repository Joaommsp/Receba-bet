import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

import Intro from "./src/screens/Intro";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="inverted" />
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1821",
    alignItems: "center",
    justifyContent: "center",
  },
});
