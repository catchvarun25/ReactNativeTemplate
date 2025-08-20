import { StyleSheet } from "react-native";
import { Colors, FontSizes, Spacing } from "../../StyleVariables";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listContainer: {
    padding: Spacing.xxl,
  },
  header: {
    alignItems: "center",
    marginBottom: Spacing.xxxxl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: Spacing.xl,
    backgroundColor: Colors.lightGrey,
  },
  name: {
    fontSize: FontSizes.xl,
    fontWeight: "600",
    color: Colors.grey,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  label: {
    fontSize: FontSizes.md,
    color: Colors.grey,
  },
  signOut: {
    marginTop: Spacing.xxxxl,
    alignItems: "center",
    padding: Spacing.m,
    backgroundColor: "#f44336",
    borderRadius: 8,
  },
  signOutText: {
    color: Colors.white,
    fontSize: FontSizes.md,
    fontWeight: "600",
  },
});