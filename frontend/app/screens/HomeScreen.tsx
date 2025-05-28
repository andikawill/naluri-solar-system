import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
} from "react-native";
import Sun from "../../components/Sun";
import usePi from "../../hooks/usePi";
import { SCREEN_HEIGHT } from "../../constants/Dimensions";

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const piData = usePi();
  const { width } = useWindowDimensions();
  const diameter = 1392700;
  const circumference = (piData.pi * diameter).toFixed(2);

  const backgroundTranslate = scrollY.interpolate({
    inputRange: [0, SCREEN_HEIGHT * 0.3],
    outputRange: [0, -SCREEN_HEIGHT * 0.2],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Parallax background */}
      <Animated.Image
        source={require("../../assets/images/sky-bg.jpg")}
        style={[styles.bg, { transform: [{ translateY: backgroundTranslate }] }]}
        resizeMode="cover"
      />

      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* Foreground content */}
      <Animated.ScrollView
        style={{ zIndex: 2 }}
        contentContainerStyle={[styles.container, { minHeight: SCREEN_HEIGHT }]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        showsVerticalScrollIndicator={false}
      >
        <Sun />
        <View style={[styles.card, { maxWidth: width * 0.95 }]}>
          <Text style={styles.title}>Naluri Pi Monitor</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>π ≈ {piData.pi}</Text>
          <Text style={styles.text}>Digits: {piData.digits}</Text>
          <Text style={styles.text}>Terms: {piData.terms}</Text>
          <Text style={styles.text}>Updated: {new Date(piData.updatedAt).toLocaleString()}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Sun Diameter: {new Intl.NumberFormat().format(diameter)} km</Text>
          <Text style={styles.text}>Sun Circumference: {new Intl.NumberFormat().format(parseFloat(circumference))} km</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 1.2,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },
  container: {
    alignItems: "center",
    paddingVertical: Platform.select({ ios: 60, android: 40 }),
    paddingTop: SCREEN_HEIGHT * 0.15,
    width: "100%",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    width: "90%",
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 15,
    textAlign: "center",
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  text: {
    fontSize: 18,
    marginVertical: 4,
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginVertical: 15,
  },
});
