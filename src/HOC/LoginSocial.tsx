import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import {Alert, Platform} from 'react-native';

async function onAppleButtonPress(): Promise<{token: any}> {
  if (Platform.OS == 'ios') {
    if (!appleAuth.isSupported) {
      Alert.alert(
        'Notification',
        'Your version apple not support this function. Please update you version apple',
      );
      return {token: ''};
    }
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }

    // Create a Firebase credential from the response
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    // Sign the user in with the credential
    await auth().signInWithCredential(appleCredential);
    let idTokenResult = await auth().currentUser?.getIdTokenResult();
    return {
      token: idTokenResult?.token,
    };
  } else {
    const rawNonce = new Date().getMilliseconds();
    const state = new Date().getMilliseconds();
    appleAuthAndroid.configure({
      // The Service ID you registered with Apple
      clientId:
        '523059104460-fshsfaru949musq06q1s56c57usktne8.apps.googleusercontent.com',

      // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
      // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
      redirectUri: '',

      // The type of response requested - code, id_token, or both.
      responseType: appleAuthAndroid.ResponseType.ALL,

      // The amount of user information requested from Apple.
      scope: appleAuthAndroid.Scope.ALL,

      // Random nonce value that will be SHA256 hashed before sending to Apple.
      nonce: `${rawNonce}`,

      // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
      state: `${state}`,
    });

    // Open the browser window for user sign in
    const response = await appleAuthAndroid.signIn();
    // return {
    //   token: response.id_token,
    // };
    // Ensure Apple returned a user identityToken
    if (!response.id_token) {
      throw 'Android Apple Sign-In failed - no identify token returned';
    }
    const appleCredential = auth.AppleAuthProvider.credential(
      response.id_token,
      response.nonce,
    );

    // Sign the user in with the credential
    await auth().signInWithCredential(appleCredential);
    let idTokenResult = await auth().currentUser?.getIdTokenResult();
    return {
      token: idTokenResult?.token,
    };
  }
}

export {onAppleButtonPress};
