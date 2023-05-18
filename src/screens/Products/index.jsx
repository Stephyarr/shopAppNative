import React from "react";
import { Text, View, Button } from "react-native";

import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Products </Text>
      <Button title="Detail" onPress={() => navigation.navigate("ProductDetail")}/>
    </View>
  );
};

export default Products;
