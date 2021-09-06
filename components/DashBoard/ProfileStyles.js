import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const ProfilesStyles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    borderRadius: 10,
    elevation: 4,
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#141414",
    borderWidth: 0.1,
    borderColor: "#00c496",
    marginTop:height*0.36
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "#00c496",
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
  textContainer: {
    alignSelf: "flex-start",
    padding: 5,
  },
  firstName: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  lastName: {
    fontSize: 20,
    fontWeight: "normal",
    color: "white",
  },
  email: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#00c496",
    marginTop: 10,
  },
});

export default ProfilesStyles;
