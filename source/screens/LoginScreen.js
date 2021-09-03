import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, Text, View, Alert, StyleSheet } from "react-native";

import firebase from "firebase";

//constants
import { firebaseConfig } from "../../constants/config";

//api
import { facebookLogin } from "../../api/FacebookLogin";
import { googleLogin } from "../../api/GoogleLogin";


firebase.initializeApp(firebaseConfig);
const LoginScreen = () => {
  const facebookAsyncLogin = async () => {
    const facebookData = await facebookLogin();
    console.log("facebook data ->", facebookData);
  };

  const googleAsyncLogin = async () => {
    const googleData = await googleLogin();
    console.log("google data ->", googleData);
  };

  return (
    <View style={styles.container}>
      <Button
        color="blue"
        title="Facebook Login"
        onPress={facebookAsyncLogin}
      />

      <Button 
        color="blue" 
        title="Google Login" 
        onPress={googleAsyncLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
