import React from "react";
import { View, Text } from "react-native";

export default props => {
  return (
    <React.Fragment>
      <Text style={Estilo.txtG}>{props.principal}</Text>

      <Text style={Estilo.txtS}>{props.secundario}</Text>
    </React.Fragment>
  );
};
