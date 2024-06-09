import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import MyGames from "../screens/MyGames";
import User from "../screens/User";

function HomeScreen() {
  return <Home />;
}

function UserScreen() {
  return <User />;
}

function MyGamesScreen() {
  return <MyGames />;
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <HomeStack.Screen name="UserSettings" component={UserScreen} /> */}
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Application() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "User") {
            iconName = "person-circle-outline";
          } else if (route.name == "MyGames") {
            iconName = "football";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#fb3737",
        tabBarInactiveTintColor: "#FFFFFF",
        headerShown: false,
        tabBarStyle: {
          height: 56,
          paddingBottom: 10,
          paddingTop: 10,
          position: "absolute",
          bottom: 20,
          marginHorizontal: 24,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          backgroundColor: "#171717",
          borderBlockColor: "#171717",
        },
        tabBarLabelStyle: { display: "none" },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="MyGames" component={MyGamesScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
