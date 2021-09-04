import { StyleSheet,Dimensions } from "react-native";
const{width,height} = Dimensions.get('window')
import colors from "../../constants/colors";

export const LoginScreenStyles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex:1
  },
  background: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    height: height * 1.1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  line: {
    width: width * 0.9,
    height: 1,
    backgroundColor: colors.headingColor,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  secondryHeader: {
    color: "#ffffff",
    fontSize: 25,
  },
  secondryHeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreenStyles;
