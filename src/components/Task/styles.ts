import { StyleSheet } from "react-native";
import dark from "../../../src/themes/dark.style";

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 64,
    backgroundColor: dark.GRAY_500,
    color: dark.GRAY_100,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: dark.GRAY_400,
    marginBottom: 8,
  },
  taskText: { color: dark.GRAY_100, marginHorizontal: 8, flexGrow: 1 },
  checkboxBase: {
    width: 17.45,
    height: 17.45,
    borderRadius: 999,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: dark.BLUE,
  },
  checkboxChecked: {},
  trash: {},
});
