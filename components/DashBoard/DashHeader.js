import React from "react";
import { View, Text, Dimensions, TouchableWithoutFeedback } from "react-native";

//icons
import { AntDesign } from "@expo/vector-icons"; 
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

//styles
import DashHeaderStyles from "./DashHeaderStyles";


const DashHeader = (props) => {
  return (
    <TouchableWithoutFeedback onPress = {props.onPress}
      style={DashHeaderStyles.container}
    >
      <AntDesign name="back" size={27} color="#ffffff" />
    </TouchableWithoutFeedback>
  );
};

export default DashHeader;
