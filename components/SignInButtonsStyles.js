import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import colors from "../constants/colors";
const { width, height } = Dimensions.get("window");

export const SignInButtonsStyles = StyleSheet.create({
  buttons: {
    backgroundColor: colors.headingColor,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.15,
    marginHorizontal:25
  },
});

export default SignInButtonsStyles;
