import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";

import Primeiro from "./components/Primeiro";

export default () => (
  <View style={styles.container}>
    <Primeiro />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adadaf",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
