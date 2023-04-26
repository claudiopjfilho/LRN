import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import estilo from "./estilo";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={estilo.txtG}>Eis aqui uma frase!</Text>
    </SafeAreaView>
  );
}
