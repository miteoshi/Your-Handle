import * as Facebook from "expo-facebook";

//credentials
import credentials from "../constants/credentials";

export const facebookLogin = async () => {
  try {
    await Facebook.initializeAsync({
      appId: credentials.appId,
    });
    const { type, token, expirationDate, permissions, declinedPermissions } =
      await Facebook.logInWithReadPermissionsAsync({
        permissions: credentials.faceBookPermissions,
      });
    console.log("token -> ", token);

    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      const resData = await response.json();
      console.log('eeee',resData)

      const profileData = await fetch(
        `https://graph.facebook.com/${resData.id}?fields=picture,name,email&access_token=${token}`
      );
      const resProfileData = await profileData.json();
      console.log("user Data ->", resProfileData);

      return resProfileData;
    }
  } catch ({ message }) {
    console.log(`Facebook Login Erroer: ${message}`);
  }
};

//                                    I dont know hpo is this helping with logout
// const logout = async() => {
//   console.log('hmm?')
//   var lParams= `access_token=${myToken};`
//   try{
//     await fetch(
//     `https://graph.facebook.com/${userId}/permissions`,{
//       method:'DELETE',
//       body:lParams
//     }
//   )
//   console.log("working");
//   }catch(err){
//     console.log(err)
//   }

// }
