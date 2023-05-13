import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default function App(props) {
  return (
    <Text style={estilo.txtG}>
      O mínimo é {props.min} e o máximo é {props.max}{" "}
    </Text>
  );
}
