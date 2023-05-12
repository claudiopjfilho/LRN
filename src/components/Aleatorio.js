import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import estilo from "./Estilo";

export default props => {
  const delta = props.max - props.min + 1;
  const aleatorio = parseInt(Math.random() * delta) + props.min;
  return <Text style={estilo.txtG}>O valor aleatório é {aleatorio}</Text>;
};
