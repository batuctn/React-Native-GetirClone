import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./redux/store";

const Contain = () => {
  const { top } = useSafeAreaInsets();
  return (
    // <SafeAreaProvider style={{ paddingTop: top }}>
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
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
