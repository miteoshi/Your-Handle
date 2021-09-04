import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Image,Dimensions,View } from "react-native";

const{width,height} = Dimensions.get('window')


//styling
import HeaderStyles from './HeaderStyles';

const Header = () => {
    return (
      <SafeAreaView style={HeaderStyles.imageContainer}>
        <View style={HeaderStyles.headerContainer}>
          <Image
            style={{ width: 80, height: 80 }}
            source={require("./../assets/handle_bg.png")}
          />
          <Text style={HeaderStyles.heading}>Your Handle</Text>
        </View>
        <Text style={HeaderStyles.tag}>Know Your Info</Text>
        <Image
          style={{ width: width, height: 250 }}
          source={require("./../assets/headerImage.png")}
        />
      </SafeAreaView>
    );
};

export default Header