import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "react-native-vector-icons";
import ProgressScreen from "../screens/Progress";
import Home from "../screens/Home";
import Logs from "../screens/Logs";
import AddMeal from "../screens/AddMeal";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "black", //#C0D6E8
          tabBarStyle: {
            position: "absolute",
            bottom: 10,
            left: 20,
            right: 20,
            backgroundColor: "white",
            borderRadius: 20,
            height: 60,
            ...StyleSheet.shadow,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="progress"
          component={ProgressScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-box-outline"
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="addMeal"
          component={AddMeal}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="add-circle" color={color} size={30} />
            ),
            // tabBarBadge: 3,
            // tabBarBadgeStyle: { backgroundColor: "red", color: "white" },
          }}
        />
        <Tab.Screen
          name="logs"
          component={Logs}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="calendar-month" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
