import React from 'react';
import {View,Text, Dimensions, Image} from 'react-native';
import ProfilesStyles from './ProfileStyles';

const {width,height} = Dimensions.get('window')

const Profile = (props) => {
  const myArr = props.data.name.split(" ");
    return (
      <View style={ProfilesStyles.container}>
        <View style={ProfilesStyles.imageContainer}>
          <Image
            style={ProfilesStyles.image}
            source={{
              uri: props.data.url,
            }}
          />
        </View>
        <View style={ProfilesStyles.textContainer}>
          <Text style={ProfilesStyles.firstName}>{myArr[0]}</Text>
          <Text style={ProfilesStyles.lastName}>{myArr[1]}</Text>
          <Text style={ProfilesStyles.email}>{props.data.email}</Text>
        </View>
      </View>
    );
}

export default Profile;