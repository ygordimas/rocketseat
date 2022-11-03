import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../../../assets/logo.svg";
import { styles } from "./styles";
import dark from "../../../src/themes/dark.style";
import { useState } from "react";
import uuid from "react-native-uuid";

export function Header({ setTasks }: HeaderProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    setTasks((prevValue) => [...prevValue, { task: task, taskId: uuid.v4() }]);
  }
  return (
    <>
      <View style={styles.container}>
        <Logo height={32} />
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={dark.GRAY_300}
            onChangeText={(newText) => setTask(newText)}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
