import { StyleSheet } from "react-native";
import dark from "../../../src/themes/dark.style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: dark.GRAY_600,
  },
  text: {
    color: dark.GRAY_100,
    fontFamily: "Inter_700Bold",
  },
  tasks: {
    marginTop: 55,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  label: {
    flexDirection: "row",
  },
  labelText: {
    color: dark.GRAY_100,
    marginRight: 8,
    fontFamily: "Inter_700Bold",
  },
  counter: {
    color: dark.GRAY_200,
    backgroundColor: dark.GRAY_400,
    fontFamily: "Inter_700Bold",
    width: 25,
    textAlign: "center",
    borderRadius: 999,
  },
  taskList: {
    marginTop: 20,
    paddingTop: 48,
    borderColor: dark.GRAY_300,
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    width: "100%",
  },
  flatList: {
    width: "100%",
    marginBottom: 48,
  },
  taskPlaceholder: {
    color: dark.GRAY_300,
  },
});
