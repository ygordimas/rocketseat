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

type HeaderProps = {
  handleAddNewTask: (task: string) => void;
};

export function Header({ handleAddNewTask }: HeaderProps) {
  const [task, setTask] = useState("");

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
            value={task}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAddNewTask(task);
              setTask("");
            }}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
