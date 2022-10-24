import { Dimensions, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

type CategoryItemProps = {
  item: Category;
};
const { width, height } = Dimensions.get("window");

const index = ({ item }: CategoryItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: width * 0.25,
        height: width * 0.25,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
      onPress={() => {
        navigation.navigate("CategoryFilters", { category: item });
      }}
    >
      <Image
        style={{
          width: width * 0.2,
          height: width * 0.2,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
        source={{ uri: item.src }}
      />
      <Text
        style={{ padding: 4, fontWeight: "500", fontSize: 13, color: "gray" }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default index;
