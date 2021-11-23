import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, Text, View, Alert, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import LoadingDots from "react-native-loading-dots";
import RNOtpVerify from 'react-native-otp-verify'

import firebase from "firebase";

//styles
import LoginScreenStyles from "./LoginScreenStyles";

//constants
import { firebaseConfig } from "../../constants/config";
import colors from "../../constants/colors";

//components
import Header from "../../components/Header";
import SignInButtons from "../../components/SignInButtons";

//api
import { facebookLogin } from "../../api/FacebookLogin";
import { googleLogin } from "../../api/GoogleLogin";

// firebase.initializeApp(firebaseConfig);
const LoginScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const check = (data, type) => {
    if (data === undefined) {
      return;
    } else {
      if (type === "g") {
        const myData = {
          name: data.user.name,
          email: data.user.email,
          url: data.user.photoUrl,
        };
        props.navigation.navigate("DashBoard", { userDetails: myData });
      } else {
        if (data.email === undefined) {
          const myData = {
            name: data.name,
            email: "Email is not verified by facebook",
            url: data.picture.data.url,
          };
          props.navigation.navigate("DashBoard", { userDetails: myData });
        } else {
          const myData = {
            name: data.name,
            email: data.email,
            url: data.picture.data.url,
          };
          props.navigation.navigate("DashBoard", { userDetails: myData });
        }
        
      }
    }
  };

  const onPress = (type) => {
    if (type === "google") {
      googleAsyncLogin();
    }else if(type === 'phone'){
      console.log('otp')
    } else {
      facebookAsyncLogin();
    }
  };

  const googleAsyncLogin = async () => {
    setIsLoading(true);
    const googleData = await googleLogin();
    console.log("google data ->", googleData);
    check(googleData, "g");
    setIsLoading(false);
  };

  const facebookAsyncLogin = async () => {
    setIsLoading(true);
    const facebookData = await facebookLogin();
    console.log("facebook data ->", facebookData);
    check(facebookData, "fb");
    setIsLoading(false);
  };

  return (
    <View style={LoginScreenStyles.container}>
      <LinearGradient
        colors={colors.gradientColors}
        style={LoginScreenStyles.background}
        start={[4, 1.3]}
        end={[-0.3, 0]}
      >
        <Header />
        <View style={LoginScreenStyles.secondryHeaderContainer}>
          {isLoading ? (
            <Text style={LoginScreenStyles.secondryHeader}>Sign In via</Text>
          ) : (
            // <View
            //   style={{
            //     alignItems: "center",
            //     justifyContent: "center",
            //     padding: 12,
            //   }}
            // >
            //   <LoadingDots
            //     size={10}
            //     colors={["#b084ba", "#9870a1", "#865991", "#784882"]}
            //   />
            // </View>
            <Text style={LoginScreenStyles.secondryHeader}>Sign in via</Text>
          )}
        </View>
        <View style={LoginScreenStyles.line}></View>

        <View style={LoginScreenStyles.buttonContainer}>
          <SignInButtons name={"google"} onPress={onPress} />
          <SignInButtons name={"facebook-square"} onPress={onPress} />
          <SignInButtons name={"phone"} onPress={onPress} />
        </View>
        <View>
          <View style={{ backgroundColor: "red" }}></View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;
