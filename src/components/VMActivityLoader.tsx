import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

export interface IVMActivityLoader {
  title?: string;
}

//TODO: Localisation
const VMActivityLoader = (props: IVMActivityLoader) => {
  const { title } = props;
  return (
    <View style={style.container}>
      <ActivityIndicator style={style.loader} />
      <Text style={style.title}>{title ?? "Loading...."}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "helvetica",
  },
  loader: {
    marginRight: 10,
  },
});

export default VMActivityLoader;
