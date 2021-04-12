import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import Colors from "../../constants/Colors";

const Button = ({ type, content, onPress }) => {
  const backgroundColor =
    type === "primary" ? Colors.buttonBgPrimary : Colors.buttonBgSecondary;
  const textColor =
    type === "primary" ? Colors.textPrimary : Colors.textSecondary;

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
