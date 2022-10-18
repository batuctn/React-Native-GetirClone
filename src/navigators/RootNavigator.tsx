import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import UserNavigator from "./UserNavigator";
import GiftNavigator from "./GiftNavigator";
import { TouchableOpacity } from "react-native";
import CustomButtonNavigator from "./CustomButtonNavigator";
import { useNavigation } from "@react-navigation/native";

const CustomTabBarButton = ({ children }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CustomButtonNavigator");
      }}
      style={{
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 32,
        justifyContent: "center",
        marginTop: -8,
        alignItems: "center",
        backgroundColor: "#5C3EBC",
        width: 55,
        height: 55,
      }}
    >
      <Entypo name="list" size={32} color="#FFD00C" />
    </TouchableOpacity>
  );
};
const Tab = createBottomTabNavigator();
function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="CustomButtonNavigator"
        component={CustomButtonNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="UserNavigator"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="GiftNavigator"
        component={GiftNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="gift" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
