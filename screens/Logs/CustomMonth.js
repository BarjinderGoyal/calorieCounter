import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { getDaysInMonth, format, startOfMonth, getDay } from "date-fns";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const { width } = Dimensions.get("window");
const dayItemSize = (width - 40) / 7; // Calculate the size of each day item

const generateMonthData = (month, year) => {
  const firstDayOfMonth = getDay(startOfMonth(new Date(year, month)));
  const daysInMonth = getDaysInMonth(new Date(year, month));
  const days = [...Array(daysInMonth).keys()].map((day) => day + 1);
  return {
    firstDayOfMonth,
    days,
  };
};

const RenderDayItem = React.memo(({ item }) => (
  <TouchableOpacity
    onPress={() => console.log(item)}
    style={{ alignItems: "center" }}
  >
    {/* <Progress.Circle size={dayItemSize / 2.5} color="orange" thickness={100} /> */}
    <Progress.Circle
      size={dayItemSize / 2.5}
      progress={0.5}
      color="orange"
      unfilledColor="grey"
      borderWidth={0}
      thickness={3}
      showsText={true}
    />
    <Text style={styles.dayItem}>{item}</Text>
  </TouchableOpacity>
));

const RenderEmptyDay = React.memo(() => <Text style={styles.dayItem}></Text>);

const RenderMonth = React.memo(({ item }) => {
  const { month, year } = item;
  const { firstDayOfMonth, days } = generateMonthData(month, year);
  const monthName = format(new Date(year, month), "MMMM yyyy");

  return (
    <View style={styles.monthContainer}>
      <Text style={styles.monthName}>{monthName}</Text>
      <View style={styles.innerContainer}>
        <FlatList
          data={daysOfWeek}
          renderItem={({ item }) => (
            <Text style={styles.dayOfWeekItem}>{item}</Text>
          )}
          keyExtractor={(item) => item}
          numColumns={7}
        />
        <FlatList
          data={[...Array(firstDayOfMonth).fill(""), ...days]}
          renderItem={({ item }) =>
            item ? <RenderDayItem item={item} /> : <RenderEmptyDay />
          }
          keyExtractor={(item, index) => item.toString() || index.toString()}
          numColumns={7}
        />
      </View>
    </View>
  );
});

const CustomMonth = () => {
  const months = [...Array(12).keys()].map((month) => ({ month, year: 2024 }));
  console.log(months);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={months}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <RenderMonth item={item} />}
        keyExtractor={(item) => `${item.month}-${item.year}`}
        contentContainerStyle={{ gap: 10 }}
        ListFooterComponent={() => <View style={{ width, height: 70 }}></View>}
      />
    </SafeAreaView>
  );
};

export default CustomMonth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  monthContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  monthName: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  innerContainer: {
    paddingHorizontal: 5,
  },
  dayOfWeekItem: {
    fontWeight: "600",
    color: "black",
    fontSize: 16,
    height: dayItemSize,
    width: dayItemSize,
    textAlign: "center",
    lineHeight: dayItemSize,
  },
  dayItem: {
    fontSize: 16,
    color: "black",
    height: dayItemSize,
    width: dayItemSize,
    textAlign: "center",
    lineHeight: dayItemSize,
  },
});
