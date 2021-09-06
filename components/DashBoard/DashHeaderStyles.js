import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


export const DashHeaderStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
});

export default DashHeaderStyles;
