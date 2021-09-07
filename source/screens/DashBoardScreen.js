import React, { useRef } from 'react'
import {View,Text,Dimensions ,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashHeader from '../../components/DashBoard/DashHeader';
import Profile from '../../components/DashBoard/Profile';
import colors from '../../constants/colors';
import LoginScreenStyles from './LoginScreenStyles';
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import DashBoardScreenStyles from './DashBoardScreenStyles';
import { Modalize } from 'react-native-modalize';
import DevCredits from '../../components/DashBoard/DevCredits';

const {width,height} = Dimensions.get('window')

const DashBoardScreen = (props) => {

    const modalizeRef = useRef(null);

    const onOpen = async () => {
      modalizeRef.current?.open();
    };

  const onPress = () => {
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

        <DashHeader onPress={onPress} onModal={onOpen} />

        <Profile data={userDetails} />
        <Modalize modalHeight={height * 0.15} ref={modalizeRef}>
          <DevCredits/>
        </Modalize>
      </SafeAreaView>
    );
}


export default DashBoardScreen;