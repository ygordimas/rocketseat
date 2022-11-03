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
import { useState } from "react";
import uuid from "react-native-uuid";

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleAddNewTask(task: string) {
    setTasks((prevValue) => [...prevValue, { task: task, key: uuid.v4() }]);
    console.log(tasks);
  }

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
        <Header handleAddNewTask={handleAddNewTask} />
        <Tasks tasks={tasks} setTasks={setTasks} />
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
