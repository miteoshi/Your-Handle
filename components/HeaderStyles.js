import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const HeaderStyles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height * 0.15,
    marginBottom: height * 0.05,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.headingColor,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: height * 0.08,
  },
  tag: {
    color: "#cccccc",
    fontSize: 15,
    position: "absolute",
    top: height * 0.29,
  },
});


export default HeaderStyles;