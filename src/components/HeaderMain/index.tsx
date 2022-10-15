import { View, Text, Image } from "react-native";
import styles from "./styles";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneWiew}>
          <Text style={styles.headerText}>Ev</Text>
          <Text style={styles.headerTextAddress}>
            Sağlık Mah.Göksu Sok:No:25...
          </Text>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <View style={styles.headerTwo}>
          <Text
            style={{
              fontSize: 10,
              color: "#5D3EBD",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            TVS
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#5D3EBD",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            13
            <Text
              style={{
                fontSize: 16,
                color: "#5D3EBD",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              dk
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;
