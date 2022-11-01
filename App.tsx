import {} from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Header } from "./src/components/Header";
import { Tasks } from "./src/components/Tasks";
import dark from "./src/themes/dark.style";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent barStyle="light-content" />
        <Header />
        <Tasks />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Inter_400Regular",
    flex: 1,
    backgroundColor: dark.GRAY_700,
    alignItems: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
