import React, { useState, useRef } from "react";
import { View, Dimensions, Text, FlatList } from "react-native";
import categoriesGetir from "../../../assets/categories";

const { height, width } = Dimensions.get("window");

const CategoryBox = ({ active, item }: { active: string; item: string }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 9,
        },
        item == active.name && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
        {item}
      </Text>
    </View>
  );
};

function index({ category }: { category: string }) {
  const [categories, setCategories] = useState(categoriesGetir);

  const flatlistRef = useRef();
  const scrollToIndex = () => {
    category.id >= 3 && category.id < 8
      ? flatlistRef.current.scrollToIndex({ index: category.id - 2 })
      : category.id == 8 || category.id == 9
      ? flatlistRef.current.scrollToIndex({ index: category.id - 2.5 })
      : category.id >= 10
      ? flatlistRef.current.scrollToIndex({ index: category.id - 3 })
      : null;
  };
  setTimeout(() => scrollToIndex(), 500);
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryBox key={item.id} item={item.name} active={category} />
      )}
      nestedScrollEnabled
      pagingEnabled={true}
      ref={flatlistRef}
      data={categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      getItemLayout={(data, index) => ({
        length: width * 0.25,
        offset: width * 0.25 * index,
        index,
      })}
      // inverted={true}
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
    />
  );
}

export default index;
