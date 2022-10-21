import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GiftScreen from "../screens/GiftScreen";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const GiftNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="GiftScreen"
        component={GiftScreen}
        options={{
          headerTitle: () => (
            <Image
              style={{
                height: 30,
                width: 70,
              }}
              source={require("../../assets/getirlogo.png")}
            />
          ),

          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#5D3EBD",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default GiftNavigator;
