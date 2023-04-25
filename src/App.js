import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Primeiro from "./components/Primeiro";

export default () => (
  <SafeAreaView style={styles.container}>
    <Primeiro />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afafaf",
    alignItems: "center",
    justifyContent: "center",
  },
});
