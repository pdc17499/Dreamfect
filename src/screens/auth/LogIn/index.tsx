import { AppButton, AppInput, AppText, Footer } from '@component';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleWidth, SIZE } from '@util';
import React, { useState } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { background_signup, IconCheck } from '@assets';
import { VERIFICATION } from '@routeName';

interface LogInProp { }

interface screenNavigationProp {
  navigate: any;
}

const LogIn = (props: LogInProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const [isChecked, setIsChecked] = useState(false)
  const changeRemember = () => {
    setIsChecked(!isChecked)
  }

  const formInitialValues = {
    email: '',
    password: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    // email: yup
    //   .string()
    //   .required('This field is required')
    //   .email('Email is not valid'),
    // password: yup
    //   .string()
    //   .required('This field is required')
    //   .min(8, 'Password must be at least 8 characters')
    //   .max(30, 'Password may not be greater than 30 characters'),
  });

  const onSubmit = () => {
    // navigation.navigate(VERIFICATION)
  };

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

                <AppText style={styles.forgotTxt}>{'Forgot password?'}</AppText>

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
                  <AppText style={styles.bottomTxt}>{'Sign up'}</AppText>
                </View>
              </View>
            )}
          </Formik >
        </KeyboardAwareScrollView >
        <Footer />
      </ImageBackground>
    </>
  )
};

export { LogIn };
