import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CustomButtonScreen from "../screens/CustomButtonScreen";

const Stack = createNativeStackNavigator();
const CustomButtonNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CustomButtonScreen" component={CustomButtonScreen} />
    </Stack.Navigator>
  );
};

export default CustomButtonNavigator;
