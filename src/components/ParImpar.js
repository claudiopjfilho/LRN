import React from "react";
import { View, Text } from "react-native";
import Estilo from "./estilo";
import estilo from "./estilo";

export default ({ num = 0 }) => {
  return (
    <View>
      <Text style={estilo.txtG}>O resultado é</Text>

      {num % 2 === 0 ? (
        <Text style={estilo.txtS}>Par</Text>
      ) : (
        <Text style={estilo.txtS}>Impar</Text>
      )}
    </View>
  );
};
