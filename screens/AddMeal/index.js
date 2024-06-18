import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AddMeal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default AddMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
