import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";

//import Primeiro from "./components/Primeiro";
//import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
export default () => (
  <View style={styles.container}>
    <Botao />

    {/*
    <Primeiro min={3} max={20} />
    <Primeiro min="3" max="20" />
    <Aleatorio min={1} max={90} />
    <Aleatorio min={1} max={90} />
    <Aleatorio min={1} max={90} />
    <Aleatorio min={1} max={90} />
    <Aleatorio min={1} max={90} />
    <Titulo principal="Primeiro" secundario="Segundo" />
    */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474a51",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
