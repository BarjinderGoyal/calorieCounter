// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
});
