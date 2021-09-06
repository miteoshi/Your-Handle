import React from 'react'
import {View,Text, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashHeader from '../../components/DashBoard/DashHeader';
import Profile from '../../components/DashBoard/Profile';
import colors from '../../constants/colors';
import LoginScreenStyles from './LoginScreenStyles';
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import DashBoardScreenStyles from './DashBoardScreenStyles';

const {width,height} = Dimensions.get('window')

const DashBoardScreen = (props) => {

  const onPress = () => {
    console.log('yo')
     props.navigation.navigate("Login");
  }

  const { userDetails } = props.route.params;
  console.log(userDetails);
    return (
      <SafeAreaView style={DashBoardScreenStyles.container}>
        <LottieView
          source={require("../../assets/bubbles.json")}
          autoPlay={true}
          speed={1}
        />
        <LottieView
          source={require("../../assets/circle.json")}
          style={{ marginTop: 50 }}
          autoPlay={true}
          speed={1}
        />

        <DashHeader onPress = {onPress}/>
        <View style={{ justifyContent: "center" }}>
          <Profile data={userDetails} />
        </View>
      </SafeAreaView>
    );
}


export default DashBoardScreen;