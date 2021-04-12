import React from "react";
import { View, Text, FlatList } from "react-native";
import CardItem from "../CardItem";

import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CardItem car={item} />}
      />
    </View>
  );
};

export default CarsList;
