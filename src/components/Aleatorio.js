import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import estilo from "./Estilo";

export default props => {
  const Aleatorio = 10;
  return (
    <Text style={estilo.txtG}>
      O mínimo é {props.min} e o máximo é {props.max}{" "}
    </Text>
  );
};
