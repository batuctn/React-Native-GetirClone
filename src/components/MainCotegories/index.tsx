import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CategoryItem from "../CategoryItem";
import categoryGetir from "../../../assets/categories";

const index = ({}) => {
  const [categories, setCategories] = useState(categoryGetir);

  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <View key={item.id}>
          <CategoryItem key={item.id} item={item} />
        </View>
      ))}
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});
