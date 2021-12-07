import { AppButton, AppInput, AppText } from '@component';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors, scaleHeight, scaleWidth } from '@util';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { IconCheck } from '@assets';

interface SignUpProp { }

interface screenNavigationProp {
  navigate: any;
}

const SignUp = (props: SignUpProp) => {
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
    email: yup
      .string()
      .required('This field is required')
      .email('Email is not valid'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'Password must be at least 8 characters')
    // .max(32, 'Password may not be greater than 32 characters'),
  });

  const moveToSignUpWithEmail = () => {

  };


  return (
    <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <Formik
        enableReinitialize
        initialValues={formInitialValues}
        validationSchema={validationSign}
        validateOnChange={false}
        onSubmit={() => { }}>
        {props => (
          <>
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

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleWidth(15) }}>
                <Pressable style={styles.checkBox} onPress={changeRemember}>
                  {isChecked ? <IconCheck style={{ position: 'absolute', top: -3, left: -3 }} /> : null}
                </Pressable>
                <AppText>{'Remember me'}</AppText>
              </View>
              <AppButton
                title={'Sign up with email'}
                onPress={props.handleSubmit}
              />

            </View>
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView >
  );
};

export { SignUp };
