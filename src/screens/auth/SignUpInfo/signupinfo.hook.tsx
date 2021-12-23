import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import * as yup from 'yup';
import { SIGNUP_USER_ACCOUNT } from '@routeName';
import { useDispatch } from 'react-redux';
import { setDataSignup } from '@redux';

interface SignUpInfoProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const formRef = useRef<any>();
  const dispatch = useDispatch()

  const formInitialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    first_name: yup
      .string()
      .required('This field is required')
      .max(150, 'First name must not greater than 150 characters'),
    last_name: yup
      .string()
      .required('This field is required')
      .max(150, 'Last name must not greater than 150 characters'),
    phone: yup
      .string()
      .min(9, 'Phone number at least 9 numbers')
      .max(15, 'Phone number must not greater than 15 numbers')

      .required('This field is required'),

  });
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const onSubmit = (first_name: any, last_name: any, phone: any) => {
    dispatch(setDataSignup({ first_name: first_name, last_name: last_name, phone: phone }))
    navigation.navigate(SIGNUP_USER_ACCOUNT)
  };

  return {
    formRef,
    formInitialValues,
    validationSign,
    handleSubmit,
    onSubmit,
  }

}