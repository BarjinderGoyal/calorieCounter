import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomMonth from "./CustomMonth";

const { width, height } = Dimensions.get("window");

const Logs = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  return (
    <View style={styles.appContainer}>
      <CustomMonth month={currentMonth} year={currentYear} />
    </View>
  );
};

export default Logs;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
