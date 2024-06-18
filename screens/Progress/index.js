import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const generateDummyWeightData = (numPoints, startingWeight, targetWeight) => {
  const weightData = [];
  const weightChangePerPoint =
    (startingWeight - targetWeight) / (numPoints - 1);
  for (let i = 0; i < numPoints; i++) {
    weightData.push(startingWeight - weightChangePerPoint * i);
  }
  return weightData;
};

const generateDummyCalorieData = (
  numPoints,
  minCalorieIntake,
  maxCalorieIntake
) => {
  const calorieData = [];
  for (let i = 0; i < numPoints; i++) {
    const randomCalorieIntake =
      Math.floor(Math.random() * (maxCalorieIntake - minCalorieIntake + 1)) +
      minCalorieIntake;
    calorieData.push(randomCalorieIntake);
  }
  return calorieData;
};

const weightData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: generateDummyWeightData(12, 1000, 160),
    },
  ],
};

const calorieData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: generateDummyCalorieData(7, 1800, 2500),
    },
  ],
};

const ProgressScreen = () => {
  const userGoal = "Weight Loss";
  const currentWeight = 180;
  const targetWeight = 160;
  const calorieGoal = 2000;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Progress</Text>
        <Text style={styles.subHeader}>Current Goal: {userGoal}</Text>

        <View style={styles.goalSection}>
          <Text style={styles.sectionTitle}>Goal Summary</Text>
          <Text>Current Weight: {currentWeight} lbs</Text>
          <Text>Target Weight: {targetWeight} lbs</Text>
          <Text>Daily Calorie Goal: {calorieGoal} kcal</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weight</Text>
          <LineChart
            data={weightData}
            width={width - 20} // Adjusted to fit within padding
            height={height * 0.3}
            yAxisLabel=""
            yAxisSuffix="lbs"
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 1,
              color: (opacity = 1) => "black",
              labelColor: (opacity = 1) => "black",
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            withInnerLines={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Calorie Intake</Text>
          <BarChart
            data={calorieData}
            width={width - 20} // Adjusted to fit within padding
            height={height * 0.3}
            yAxisLabel=""
            yAxisSuffix="kcal"
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 1,
              color: (opacity = 1) => "black",
              labelColor: (opacity = 1) => "black",
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            withInnerLines={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <Text>🏅 Lost 5 lbs</Text>
          <Text>🏅 10-day streak of meeting calorie goals</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Adjust Goals</Text>
          <Button
            title="Adjust Goals"
            onPress={() => {
              /* Navigate to goal adjustment screen */
            }}
          />
        </View>
        <View style={{ width, height: 70 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 10,
    marginTop: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  goalSection: {
    marginVertical: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  section: {
    marginVertical: 10,
    backgroundColor: "white",
    // padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProgressScreen;
