import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Banner from "../../components/Banner";
import MainCotegories from "../../components/MainCotegories";
const index = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HeaderMain />
      <Banner />
      <MainCotegories />
    </ScrollView>
  );
};

export default index;
