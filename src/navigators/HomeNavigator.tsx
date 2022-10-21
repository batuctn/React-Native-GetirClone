import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreens from "../screens/HomeScreen";
import { Image, Text, TouchableOpacity } from "react-native";
import CategoryFiltersScreen from "../screens/CategoryFiltersScreen";
import ProductDetailsScreen from "../../src/screens/ProductDetailsScreen";
import {
  Entypo,
  Ionicons,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const HomeNavigator = ({ navigation }: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreens}
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
      <Stack.Screen
        name="CategoryFilters"
        component={CategoryFiltersScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
              Ürünler
            </Text>
          ),

          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#5D3EBD",
          },
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,

          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 8 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation
                style={{ marginRight: 8 }}
                name="heart"
                size={26}
                color="#32177a"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
