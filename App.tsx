import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

const Contain = () => {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={{ paddingTop: top }}>
      <RootNavigator />
    </SafeAreaProvider>
  );
};
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Contain />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
