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
    if (task == "") return;
    setTasks((prevValue) => [
      ...prevValue,
      { task: task, id: uuid.v4(), completed: false },
    ]);
  }

  function handleCheck(id: string | number[]) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : { ...task }
      )
    );
  }

  function handleDelete(id: string | number[]) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
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
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
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
