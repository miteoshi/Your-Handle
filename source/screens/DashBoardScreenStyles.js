import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import colors from "../../constants/colors";

export const DashBoardScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    padding: 35,
  },
});

export default DashBoardScreenStyles;
