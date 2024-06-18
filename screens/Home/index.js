import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "react-native-vector-icons";

const { width } = Dimensions.get("window");
const ProgressBarWidth = (width - 20) / 3 - 20;

const MealItem = ({ mealName, totalCalorie, items }) => (
  <View>
    <View
      style={[
        styles.mealContainer,
        {
          borderBottomLeftRadius: items.length !== 0 ? 0 : 20,
          borderBottomRightRadius: items.length !== 0 ? 0 : 20,
        },
      ]}
    >
      <View>
        <Text style={styles.mealName}>{mealName}</Text>
        <Text style={styles.mealCalorie}>{totalCalorie} Kcal</Text>
      </View>
      <Ionicons name="add-circle-sharp" size={30} color="#06a176" />
    </View>
    {items.length !== 0 && (
      <View style={styles.mealDetailParentContainer}>
        {items.map((item, index) => (
          <View style={styles.mealDetailContainer} key={index}>
            <Text style={styles.mealItemName}>{item.food}</Text>
            <Text style={styles.mealCalorieDetail}>{item.calorie}</Text>
          </View>
        ))}
      </View>
    )}
  </View>
);

const Home = () => {
  const [breakfast, setBreakfast] = useState([
    { food: "Banana", calorie: "45 Kcal" },
    { food: "Paratha", calorie: "180 Kcal" },
  ]);
  const [lunch, setLunch] = useState([
    {
      food: "Banana ",
      calorie: "45 Kcal",
    },
    { food: "Paratha", calorie: "180 Kcal" },
  ]);
  const [snack, setSnack] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [totalCalories, setTotalCalories] = useState({
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snack: 0,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.nutritionContainer}>
          <View style={styles.nutritionCalorieContainer}>
            <Text style={styles.dailyCalorieText}>
              Daily goal: <Text>1290</Text>
            </Text>
            <Progress.Circle
              size={width * 0.35}
              progress={0.5}
              color="orange"
              unfilledColor="grey"
              borderWidth={0}
              thickness={10}
              showsText={true}
            />
          </View>
          <View style={styles.otherNutritionContainer}>
            {["Protein", "Fats", "Carbs"].map((nutrient, index) => (
              <View style={styles.otherNutritionInnerContainer} key={index}>
                <Text style={styles.nutritionText}>{nutrient}</Text>
                <Progress.Bar
                  width={ProgressBarWidth}
                  progress={0.4}
                  color="green"
                />
                <Text style={styles.nutritionValueText}>180 / 200g</Text>
              </View>
            ))}
          </View>
          <Ionicons
            name="chevron-down"
            size={30}
            color="black"
            style={{ alignSelf: "center" }}
          />
        </View>
        <View style={styles.mealContainers}>
          <MealItem
            mealName="Breakfast"
            totalCalorie={totalCalories.breakfast}
            items={breakfast}
          />
          <MealItem
            mealName="Lunch"
            totalCalorie={totalCalories.lunch}
            items={lunch}
          />
          <MealItem
            mealName="Snacks"
            totalCalorie={totalCalories.snack}
            items={snack}
          />
          <MealItem
            mealName="Dinner"
            totalCalorie={totalCalories.dinner}
            items={dinner}
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
    paddingHorizontal: 10,
    backgroundColor: "#f4f6f8",
    // paddingBottom: 70,
    marginTop: 10,
  },
  nutritionContainer: {
    // elevation: 5,
    backgroundColor: "white",
    gap: 15,
    padding: 10,
    borderRadius: 20,
  },
  dailyCalorieText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  nutritionCalorieContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  otherNutritionContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  otherNutritionInnerContainer: {
    gap: 3,
  },
  nutritionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  nutritionValueText: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
  },
  mealContainers: {
    marginVertical: 15,
    gap: 20,
  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  mealName: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
  },
  mealCalorie: {
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
  },
  mealDetailParentContainer: {
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    gap: 15,
    marginTop: 1,
    backgroundColor: "white",
  },
  mealDetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mealItemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    flex: 1,
    marginRight: 10,
  },
  mealCalorieDetail: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
  },
});

export default Home;
