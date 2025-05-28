import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

export default function Sun() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
        isInteraction: false,
      })
    ).start();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.Image
      source={require("../assets/images/sun.png")}
      style={[styles.sun, { transform: [{ rotate: spin }] }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  sun: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
