import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonComponents}>
        <Button
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order");
          }}
        />

        <Button
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
