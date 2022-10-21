import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import ProductContainer from "../../components/ProductContainer";

function Index(props) {
  const [category, setCategory] = useState(props.route.params.category);
  console.log("The category is ", category.subCategories);

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ height: "100%", backgroundColor: "#f5f5f5" }}
    >
      <CategoryFiltering category={category} />
      <TypeFiltering dataSub={category.subCategories} />
      <ProductContainer />
    </ScrollView>
  );
}
export default Index;
