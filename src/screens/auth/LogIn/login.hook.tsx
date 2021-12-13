import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import * as yup from 'yup';
import { FORGOT_PASSWORD, SIGNUP } from '@routeName';

interface screenNavigationProp {
  navigate: any;
}
export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const [isChecked, setIsChecked] = useState(false)
  const moveToForgot = () => {
    navigation.navigate(FORGOT_PASSWORD)
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

  const moveToSignup = () => {
    navigation.navigate(SIGNUP)

  }

  return {
    moveToForgot,
    formInitialValues,
    validationSign,
    onSubmit,
    moveToSignup
  }
}