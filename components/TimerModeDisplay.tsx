import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = {
  timerMode: TimerMode;
};

export type TimerMode = "Focus" | "Break";

export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timerModeText}>
        {timerMode} Time {timerMode === "Focus" ? "⏳" : "☕"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  timerModeText: {
    fontSize: 50,
    fontWeight: "800",
    color: "#fff",
  },
});
