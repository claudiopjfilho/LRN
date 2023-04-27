import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";

import Primeiro from "./components/Primeiro";

export default () => (
  <View style={styles.container}>
    <Primeiro min={3} max={20} />
    <Primeiro min="3" max="20" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adfdff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
