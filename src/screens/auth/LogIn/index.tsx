import {AppButton, AppInput, AppText, Footer, Header} from '@component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scaleWidth, SIZE} from '@util';
import React from 'react';
import {ImageBackground, Platform, Pressable, View} from 'react-native';
import {styles} from './style';
import {Formik} from 'formik';
import {background_signup} from '@assets';
import {useModel} from './login.hook';
import {appleAuthAndroid} from '@invertase/react-native-apple-authentication';
interface LogInProp {}

const LogIn = (props: LogInProp) => {
  const {
    moveToForgot,
    formInitialValues,
    validationSign,
    onSubmit,
    moveToSignup,
    signInWithGoogle,
    signInWithFacebook,
    signInWithApple,
  } = useModel(props);

  return (
    <ImageBackground
      source={background_signup}
      resizeMode="cover"
      style={styles.image}>
      <Header iconLeft="back" />
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <Formik
          enableReinitialize
          initialValues={formInitialValues}
          validationSchema={validationSign}
          validateOnChange={false}
          onSubmit={values => onSubmit(values.email, values.password)}>
          {props => (
            <View style={{flex: 1}}>
              <AppText numberOfLines={2} style={styles.title}>
                {'Log in'}
              </AppText>
              <AppText style={styles.miniTxt}>
                {'Log in and start follow your dream'}
              </AppText>
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
              <Pressable
                onPress={moveToForgot}
                style={{height: scaleWidth(40)}}>
                <AppText style={styles.forgotTxt}>{'Forgot password?'}</AppText>
              </Pressable>

              <AppButton
                title={'Log in with email'}
                onPress={props.handleSubmit}
                customStyleButton={{marginTop: SIZE.medium_space}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: scaleWidth(40),
                  marginBottom: SIZE.base_space,
                }}>
                <View style={styles.hr}></View>
                <AppText style={styles.OrTxt}>{'or'}</AppText>
                <View style={styles.hr}></View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppButton
                  containerStyle={styles.block}
                  typeButton={'rose'}
                  onPress={signInWithFacebook}
                  title={'Facebook'}
                />
                <View style={{flex: 1, marginHorizontal: scaleWidth(10)}}>
                  <AppButton
                    typeButton={'orange'}
                    title={'Google'}
                    onPress={signInWithGoogle}
                  />
                </View>
                <AppButton
                  containerStyle={[
                    styles.block,
                    Platform.OS === 'android' &&
                      !appleAuthAndroid.isSupported && {opacity: 0.3},
                  ]}
                  typeButton={'green'}
                  title={'Apple'}
                  disabled={
                    Platform.OS === 'android' && !appleAuthAndroid.isSupported
                  }
                  onPress={signInWithApple}
                />
              </View>
              <View style={styles.bottom}>
                <AppText style={styles.bottomTxt2}>
                  {'If your don’t have an account?'}
                </AppText>
                <Pressable onPress={moveToSignup}>
                  <AppText style={styles.bottomTxt}>{'Sign up'}</AppText>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <Footer />
    </ImageBackground>
  );
};

export {LogIn};
