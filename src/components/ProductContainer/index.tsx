import React from "react";
import { View, Text } from "react-native";
import productsGetir from "../../../assets/products";
import ProductItem from "../../components/ProductItem";

function Index() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <View key={item.id}>
            <ProductItem key={item.id} item={item} />
          </View>
        ))}
      </View>
      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          flexWrap: "wrap",
          width: "100%",
          backgroundColor: "white",
          paddingVertical: 10,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default Index;
