import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../StyleVariables";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  bottomContainer: {
    marginTop: Spacing.xxl,
  },
  dismissButton: {
    position: "absolute",
    backgroundColor: Colors.white,
    top: -16,
    left: 10,
    padding: 6,
  },
  dismissIcon: {
    width: 24,
    height: 24,
  },
});
