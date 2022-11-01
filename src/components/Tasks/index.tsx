import { View, Text } from "react-native";
import dark from "../../themes/dark.style";
import { styles } from "./styles";
import Clipboard from "../../../assets/Clipboard.svg";

export function Tasks() {
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
          <Clipboard width={56} />
          <Text>Você ainda não tem tarefas cadastradas</Text>
          <Text>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      </View>
    </View>
  );
}
