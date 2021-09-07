import React from 'react'
import {View,Text,Image, Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

const DevCredits = () => {
    return (
      <View
        style={{
          height: height * 0.15,
          borderWidth: 1.5,
          borderBottomWidth: 0,
          borderTopColor: "#ffffff",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          backgroundColor: "#141414",
          padding: 10,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderLeftColor: "#00c496",
          borderRightColor: "#B94B3E",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 40 }}
            source={require("./../../assets/handle_bg.png")}
          />
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#ffffff" }}>
            by
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00c496" }}>
            {" "}
            Piyush Joshi
          </Text>
        </View>
        <Text style={{ fontSize: 10, fontWeight: "bold", color: "#00c496" }}>
          {" "}
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#ffffff" }}>
            Source Code :
          </Text>{" "}
          https://github.com/joshipiyush9969/Your-Handle
        </Text>
      </View>
    );
}

export default DevCredits;