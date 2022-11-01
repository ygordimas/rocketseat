import { StyleSheet } from "react-native";
import dark from "../../../src/themes/dark.style";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export const styles = StyleSheet.create({
  container: {
    height: 104,
    alignItems: "center",
    marginTop: 70,
    position: "relative",
  },
  inputSection: {
    // marginTop: 40,
    bottom: 0,
    transform: [{ translateY: 26 }],
    flexDirection: "row",
    width: 327,
    height: 52,
    position: "absolute",
    zIndex: 2,
  },
  input: {
    flex: 1,
    backgroundColor: dark.GRAY_500,
    borderWidth: 1,
    borderColor: dark.GRAY_700,
    borderRadius: 6,
    paddingLeft: 16,
    color: dark.GRAY_100,
    fontFamily: "Inter_400Regular",
  },
  button: {
    backgroundColor: dark.BLUE_DARK,
    height: 52,
    width: 52,
    marginLeft: 4,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "bold",
  },
  buttonText: {
    color: dark.GRAY_100,
    width: 16,
    height: 16,
    lineHeight: 16,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: dark.GRAY_100,
    textAlign: "center",
  },
});
