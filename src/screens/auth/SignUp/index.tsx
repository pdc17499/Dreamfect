import { AppButton, AppInput, AppText, Footer } from '@component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleWidth, SIZE } from '@util';
import React from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import { background_signup } from '@assets';
import { useModel } from './signup.hook';

interface SignUpProp { }

const SignUp = (props: SignUpProp) => {
  const {
    changeRemember,
    moveToSignIn,
    formInitialValues,
    validationSign,
    onSubmit } = useModel(props)


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
                <AppText numberOfLines={2} style={styles.title}>{'Sign Up'}</AppText>
                <AppText style={styles.miniTxt}>{'Join now and start follow your dream'}</AppText>
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
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleWidth(15), marginBottom: scaleWidth(48) }}>
                  <Pressable style={styles.checkBox} onPress={changeRemember}>
                    {isChecked ? <IconCheck style={styles.check} /> : null}
                  </Pressable>
                  <AppText>{'Remember me'}</AppText>
                </View> */}
                <AppButton
                  title={'Sign up with email'}
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
                    />
                  </View>
                  <AppButton
                    containerStyle={styles.block}
                    typeButton={'green'}
                    title={'Apple'}
                  />
                </View>
                <View style={styles.bottom} >
                  <AppText style={styles.bottomTxt2}>{"Already have an account?"}</AppText>
                  <Pressable onPress={moveToSignIn}>
                    <AppText style={styles.bottomTxt}>{'Sign in'}</AppText>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik >
        </KeyboardAwareScrollView >
        <Footer />
      </ImageBackground>
    </>
  );
};

export { SignUp };
