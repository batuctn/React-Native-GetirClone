import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GiftScreen from "../screens/GiftScreen";

const Stack = createNativeStackNavigator();
const GiftNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GiftScreen" component={GiftScreen} />
    </Stack.Navigator>
  );
};

export default GiftNavigator;
