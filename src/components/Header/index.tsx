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

export function Header() {
  return (
    <>
      <View style={styles.container}>
        <Logo height={32} />
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={dark.GRAY_300}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
