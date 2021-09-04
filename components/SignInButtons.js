import React from 'react';
import {View,TouchableOpacity,Text,Dimensions} from 'react-native';
import { AntDesign } from "@expo/vector-icons"; 

//constants
import SignInButtonsStyles from './SignInButtonsStyles';


const SignInButtons = (props) => {
  return (
    <TouchableOpacity
      style={SignInButtonsStyles.buttons}
      onPress={()=>{        props.name === "google"
        ? props.onPress("google")
        : props.onPress("facebook");}

      }
    >
      <AntDesign
        name={props.name}
        size={30}
        color={props.name === "google" ? "#262626" : "#4267B2"}
      />
    </TouchableOpacity>
  );
};

export default SignInButtons