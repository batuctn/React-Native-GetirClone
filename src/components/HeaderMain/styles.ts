import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerMain: {
    backgroundColor: "#F7D102",
    height: height * 0.064,
  },
  headerOne: {
    backgroundColor: "#fff",
    width: "80%",
    height: height * 0.064,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: width * 0.1,
    height: height * 0.04,
  },
  headerOneWiew: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%",
    borderLeftColor: "#F3F2D",
    borderLeftWidth: 0.2,
    paddingLeft: "5%",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "700",
  },
  headerTextAddress: {
    fontSize: 12,
    color: "gray",
    marginRight: 5,
    marginLeft: 5,
    fontWeight: "500",
  },
  headerTwo: {
    width: "35%",
    height: height * 0.064,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
