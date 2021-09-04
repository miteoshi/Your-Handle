import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import colors from "../constants/colors";
const { width, height } = Dimensions.get("window");

export const SignInButtonsStyles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.headingColor,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.2,
  },
});

export default SignInButtonsStyles;
