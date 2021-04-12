import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Colors from "./constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("./assets/images/ModelX.jpeg")}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $69,420</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: Colors.subTitle,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});