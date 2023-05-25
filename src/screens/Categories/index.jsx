import React from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { CategoryItem } from "../../components/index";
import { CATEGORIES } from "../../data/index";

const Categories = ({ navigation }) => {
  const handleSelectedItem = (item) => {
    navigation.navigator("Products", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <CategoryItem item={item} onSelected={handleSelectedItem} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoriesItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Categories;
