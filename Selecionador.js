import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Selecionador = () => {
  const [selectedValue, setSelectedValue] = useState("1");
  return (
    <View style={styles.container}>
      <Picker

        prompt={'Selecione quantas pessoas'}
        selectedValue={selectedValue}
        style={{ height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#f5f5f5'
  }
});

export default Selecionador;
