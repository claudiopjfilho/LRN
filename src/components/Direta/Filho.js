import React from "react";
import { Text } from "react-native";

export default props => {
  return (
    <>
      <Text>{props.b}</Text>
      <Text> {props.a}</Text>
    </>
  );
};
