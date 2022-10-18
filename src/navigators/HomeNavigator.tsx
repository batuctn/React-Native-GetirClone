import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreens from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreens} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
