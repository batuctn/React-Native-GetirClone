import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserScreen from "../screens/UserScreen";

const Stack = createNativeStackNavigator();
const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
