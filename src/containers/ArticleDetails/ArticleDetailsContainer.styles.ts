import { StyleSheet } from "react-native";
import { Colors, FontSizes } from "../../StyleVariables";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionContainer: {
    flex: 3,
    backgroundColor: Colors.white,
  },
  descriptionTitle: {
    fontSize: FontSizes.md,
    color: Colors.black,
    fontWeight: "500",
    marginTop: 6,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    lineHeight: 22,
  },
  descriptionDetail: {
    fontSize: FontSizes.md,
    color: Colors.black,
    fontWeight: "300",
    marginTop: 6,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    lineHeight: 22,
  },
});
