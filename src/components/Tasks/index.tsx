import { View, Text } from "react-native";
import dark from "../../themes/dark.style";
import { styles } from "./styles";
import Clipboard from "../../../assets/Clipboard.svg";
import { useState } from "react";
import { Task } from "../Task";

export function Tasks({ tasks, setTasks }: TasksProps & HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <View style={styles.header}>
          <View style={styles.label}>
            <Text style={[styles.labelText, { color: dark.BLUE }]}>
              Criadas
            </Text>
            <Text style={styles.counter}>0</Text>
          </View>
          <View style={styles.label}>
            <Text style={[styles.labelText, { color: dark.PURPLE }]}>
              Concluídas
            </Text>
            <Text style={styles.counter}>0</Text>
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
            <>
              {tasks.map((task) => (
                <Task
                  task={task.task}
                  taskId={task.taskId}
                  setTasks={setTasks}
                />
              ))}
            </>
          )}
        </View>
      </View>
    </View>
  );
}
