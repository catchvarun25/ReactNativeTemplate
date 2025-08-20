import { StyleSheet } from "react-native";
import { Colors, FontSizes } from "../../StyleVariables";

export default StyleSheet.create({
  loginPage: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  container: {
    width: "90%",
    position: "absolute",
    top: "50%",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 25,
  },
  message: {
    position: "absolute",
    top: "40%",
    fontSize: FontSizes.xxxl,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: Colors.black,
  },
  button: {
    height: 44,
    backgroundColor: Colors.blue,
    borderRadius: 8,
    borderColor: Colors.black,
  },
});
