import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import dark from "../../../src/themes/dark.style";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function MyCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function onCheckmarkPress() {
    setIsChecked(!isChecked);
  }

  return (
    <Pressable
      style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {isChecked && <AntDesign name="check" size={8} color="black" />}
    </Pressable>
  );
}

interface MyTrashProps {
  key?: string | number[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

function MyTrash({ key, setTasks }: MyTrashProps) {
  function onTrashPress() {}
  return (
    <Pressable style={styles.trash} onPress={onTrashPress}>
      <Entypo name="trash" size={24} color="black" />
    </Pressable>
  );
}

export function Task({ task, key, setTasks }: TaskProps & HeaderProps) {
  return (
    <>
      <View style={styles.task}>
        <MyCheckbox />
        <Text style={styles.taskText}>{task}</Text>
        <MyTrash setTasks={setTasks} />
      </View>
    </>
  );
}
