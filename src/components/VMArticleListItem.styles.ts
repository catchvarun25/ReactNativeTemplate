import { StyleSheet } from "react-native";
import { Colors, FontSizes, Spacing } from "../StyleVariables";

export default StyleSheet.create({
  containerPortrait: {
    flexDirection: "row",
    borderColor: Colors.lightGrey,
    paddingBottom: 10,
  },
  containerLandscape: {
    flexDirection: "column",
    borderColor: Colors.lightGrey,
    paddingBottom: 20,
  },
  imagePortrait: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imageLandscape: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  contentPortrait: {
    marginLeft: 10,
    width: "70%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contentLandscape: {
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: FontSizes.sm,
    color: Colors.black,
    marginBottom: Spacing.s,
    fontWeight: "bold",
  },
  description: {
    fontSize: FontSizes.xs,
    color: Colors.grey,
    marginTop: 6,
  },
  author: {
    fontSize: FontSizes.xs,
    color: Colors.green,
  },
  source: {
    fontSize: FontSizes.xs,
    color: Colors.grey,
  },
});
