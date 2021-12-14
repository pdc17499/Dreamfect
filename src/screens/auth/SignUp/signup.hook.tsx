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
import { LOGIN, VERIFICATION } from '@routeName';
import { useDispatch } from 'react-redux';
import { signUpEmail } from '@redux';

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const changeRemember = () => {
    setIsChecked(!isChecked)
  }

  const moveToSignIn = () => {
    navigation.navigate(LOGIN)
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
    dispatch(signUpEmail)

    navigation.navigate(VERIFICATION, { params: 'SignUp' })
  };

  return {
    changeRemember,
    moveToSignIn,
    formInitialValues,
    validationSign,
    onSubmit
  }
}