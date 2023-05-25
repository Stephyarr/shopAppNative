import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toucheContainer} onPress={() => onSelected(item)}>
        <View style={styles.textContent}>
          <Text style={styles.titleCategory}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
