import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SearchScreen from "../screens/SearchScreen";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
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

export default SearchNavigator;
