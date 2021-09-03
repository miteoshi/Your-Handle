import * as Google from "expo-google-app-auth";

//credentials
import credentials from "../constants/credentials";

export const googleLogin = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId:
        credentials.androidClientId,
      scopes: credentials.googleCloudScopes,
    });

    console.log("user Data -> ", result);

    if (result.type === "success") {
      return result;
    } else {
      console.log("failed");
    }
  } catch (err) {
    console.log(err);
  }
};

// tried to check user log through firebase,
// useEffect(() => {
//   checkIfLoggedIn();
// },[]);

// const checkIfLoggedIn = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log("take to dashboard screen");
//     } else {
//       console.log("stay");
//     }
//   });
// };
