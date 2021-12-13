import { USER_INFO } from '@mocks';
import { useNavigation } from '@react-navigation/native';
import { SUCCESS_SCREEN } from '@routeName';
import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import * as yup from 'yup';
interface ProfileProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();

  const user = USER_INFO

  const onEdit = () => {
    // navigation.navigate(),
  }



  const formInitialValues = {
    current_password: '',
    new_password: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    // current_password: yup
    //   .string()
    //   .required('This field is required'),

    // new_password: yup
    //   .string()
    //   .required('This field is required'),

  });

  const onSubmit = () => {
    navigation.navigate(SUCCESS_SCREEN)
  };



  return {
    user,
    onEdit,
    formInitialValues,
    validationSign,
    onSubmit
  }

}