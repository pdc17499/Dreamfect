import { AppButton, AppInput, AppText, Footer } from '@component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleWidth, SIZE } from '@util';
import React, { useEffect } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import { background_signup } from '@assets';
import { useModel } from './login.hook';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
interface LogInProp { }

const LogIn = (props: LogInProp) => {

  const {
    moveToForgot,
    formInitialValues,
    validationSign,
    onSubmit,
    moveToSignup,
    signInGoogle,
  } = useModel(props)



  return (
    <>
      <ImageBackground source={background_signup} resizeMode='stretch' style={styles.image} >
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <Formik
            enableReinitialize
            initialValues={formInitialValues}
            validationSchema={validationSign}
            validateOnChange={false}
            onSubmit={onSubmit}>
            {props => (
              <View style={{ flex: 1 }}>
                <AppText numberOfLines={2} style={styles.title}>{'Log in'}</AppText>
                <AppText style={styles.miniTxt}>{'Log in and start follow your dream'}</AppText>
                <AppInput
                  label={'Email'}
                  placeholder={'Enter your email'}
                  value={props.values.email}
                  onValueChange={props.handleChange('email')}
                  error={props.errors.email}
                />
                <AppInput
                  label={'Password'}
                  placeholder={'Enter your password'}
                  showEye={true}
                  secureTextEntry={true}
                  value={props.values.password}
                  onValueChange={props.handleChange('password')}
                  error={props.errors.password}
                />

                <Pressable onPress={moveToForgot}>
                  <AppText style={styles.forgotTxt}>{'Forgot password?'}</AppText>
                </Pressable>

                <AppButton
                  title={'Log in with email'}
                  onPress={props.handleSubmit}
                  customStyleButton={{ marginTop: SIZE.medium_space }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: SIZE.medium_space, marginBottom: SIZE.base_space }}>
                  <View style={styles.hr}></View>
                  <AppText style={styles.OrTxt}>{'or'}</AppText>
                  <View style={styles.hr}></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <AppButton
                    containerStyle={styles.block}
                    typeButton={'rose'}
                    title={'Facebook'}
                  />
                  <View style={{ flex: 1, marginHorizontal: scaleWidth(10) }}>
                    <AppButton
                      typeButton={'orange'}
                      title={'Google'}
                      onPress={signInGoogle}
                    />
                  </View>
                  <AppButton
                    containerStyle={styles.block}
                    typeButton={'green'}
                    title={'Apple'}
                  />
                </View>
                <View style={styles.bottom} >
                  <AppText style={styles.bottomTxt2}>{"If your don’t have an account?"}</AppText>
                  <Pressable onPress={moveToSignup}>

                    <AppText style={styles.bottomTxt}>{'Sign up'}</AppText>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik >
        </KeyboardAwareScrollView >
        {/* <View>
          <LoginButton
            onLoginFinished={
              (error, result: any) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data: any) => {
                      console.log(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => console.log("logout.")} />
        </View> */}
        <Footer />
      </ImageBackground>
    </>
  )
};

export { LogIn };
