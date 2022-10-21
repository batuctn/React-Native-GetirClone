import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserScreen from "../screens/UserScreen";
import { Image, Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();
const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
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

export default UserNavigator;
