import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import dark from "../../../src/themes/dark.style";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type MyCheckbox = TaskProps & CheckProps;

function MyCheckbox({ task, completed, id, handleCheck }: MyCheckbox) {
  // const [isChecked, setIsChecked] = useState(false);

  // function onCheckmarkPress() {
  //   setIsChecked(!isChecked);
  // }

  return (
    <Pressable
      style={[styles.checkboxBase, completed && styles.checkboxChecked]}
      onPress={() => handleCheck(id)}
    >
      {completed && <AntDesign name="check" size={10} color={dark.GRAY_100} />}
    </Pressable>
  );
}

interface MyTrashProps {
  id: string | number[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

function MyTrash({ id, setTasks, handleDelete }: MyTrashProps & DeleteProps) {
  return (
    <Pressable style={styles.trash} onPress={() => handleDelete(id)}>
      <Entypo name="trash" size={24} color={dark.GRAY_300} />
    </Pressable>
  );
}

export function Task({
  task,
  id,
  completed,
  setTasks,
  handleCheck,
  handleDelete,
}: TaskProps & HeaderProps & CheckProps & DeleteProps) {
  return (
    <>
      <View style={styles.task}>
        <MyCheckbox
          task={task}
          id={id}
          handleCheck={handleCheck}
          completed={completed}
        />
        <Text style={[styles.taskText, completed && styles.completed]}>
          {task}
        </Text>
        <MyTrash
          id={id}
          setTasks={setTasks}
          handleDelete={() => handleDelete(id)}
        />
      </View>
    </>
  );
}
