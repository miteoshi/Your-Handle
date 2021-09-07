import React from "react";
import { View, Text, Dimensions, TouchableWithoutFeedback } from "react-native";

//icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//styles
import DashHeaderStyles from "./DashHeaderStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const{height,width} = Dimensions.get('window')

const DashHeader = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: height * 0.36,
      }}
    >
      <TouchableOpacity
        onPress={props.onPress}
        style={DashHeaderStyles.container}
      >
        <AntDesign name="back" size={27} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onModal}>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={27}
          color="#ffffff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default DashHeader;
