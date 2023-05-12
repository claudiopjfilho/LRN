import React from "react";
import { Button } from "react-native";

export default props => {
  const executar = () => {
    console.warn("Exec!!!");
  };

  return (
    <>
      <Button title="Executar!" onPress={executar} />

      <Button
        title="Exec #02"
        onPress={function () {
          console.warn("Exec #02!!!!!!");
        }}
      />

      <Button title="Exec #03" onPress={() => console.warn("Exec #03!!!!!!")} />
    </>
  );
};
