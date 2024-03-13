import React from "react";
import { Text, View, StyleSheet, _View } from "react-native";

type Props = {
  timerDate: Date;
};

export const TimerCountDownDisplay: React.FC<Props> = ({ timerDate }) => {
  return (
    <View>
      <Text style={styles.timerCountDownText}>
        {timerDate.getMinutes().toString().padStart(2, "0")}:
        {timerDate.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerCountDownText: {
    fontSize: 50,
    fontWeight: "800",
    color: "#fff",
  },
});
