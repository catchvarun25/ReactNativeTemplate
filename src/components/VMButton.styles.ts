import { StyleSheet } from "react-native";
import { Colors, FontSizes } from "../StyleVariables";

export default StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: Colors.black,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentStyle: {
    flexDirection: "row",
  },
  leftIcon: {
    width: 24,
    height: 24,
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: FontSizes.lg,
    fontFamily: "Helvetica",
  },
  rightIcon: {
    width: 24,
    height: 24,
  },
});
