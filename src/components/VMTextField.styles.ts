import { StyleSheet } from "react-native";
import { Colors, FontSizes, IconSizes, ButtonSizes } from "../StyleVariables";

export default StyleSheet.create({
  container: {
    height: ButtonSizes.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    gap: 3,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingRight: 10,
  },
  titleText: {
    color: Colors.black,
    fontSize: FontSizes.xs,
  },
  clearButton: {
    height: IconSizes.small,
    width: IconSizes.small,
    backgroundColor: Colors.lightGrey,
    borderRadius: IconSizes.small / 2,
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: FontSizes.xl,
  },
});
