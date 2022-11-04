import { View, Text, FlatList } from "react-native";
import dark from "../../themes/dark.style";
import { styles } from "./styles";
import Clipboard from "../../../assets/Clipboard.svg";
import { useState } from "react";
import { Task } from "../Task";

type TasksProps = {
  tasks: TaskProps[];
} & HeaderProps &
  CheckProps &
  DeleteProps;

export function Tasks({
  tasks,
  setTasks,
  handleCheck,
  handleDelete,
}: TasksProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <View style={styles.header}>
          <View style={styles.label}>
            <Text style={[styles.labelText, { color: dark.BLUE }]}>
              Criadas
            </Text>
            <Text style={styles.counter}>{tasks.length}</Text>
          </View>
          <View style={styles.label}>
            <Text style={[styles.labelText, { color: dark.PURPLE }]}>
              Concluídas
            </Text>
            <Text style={styles.counter}>
              {tasks.filter((task) => task.completed == true).length}
            </Text>
          </View>
        </View>
        <View style={styles.taskList}>
          {tasks.length == 0 ? (
            <>
              <Clipboard width={56} style={{ marginBottom: 16 }} />
              <Text
                style={[
                  styles.taskPlaceholder,
                  { fontFamily: "Inter_700Bold" },
                ]}
              >
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.taskPlaceholder}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </>
          ) : (
            <View style={styles.flatList}>
              <FlatList
                data={tasks}
                keyExtractor={(item) => item.id as string}
                renderItem={({ item }) => (
                  <Task
                    id={item.id}
                    task={item.task}
                    completed={item.completed}
                    setTasks={setTasks}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                  />
                )}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
