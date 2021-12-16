import { USER_INFO } from '@mocks';
import { useNavigation } from '@react-navigation/native';
import { logoutApp } from '@redux';
import { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
interface ProfileProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const dispatch = useDispatch()
  const user = USER_INFO
  const [avatar, setAvatar] = useState<any>()
  const profile: any = useSelector((state: any) => state?.auth?.profileUser);

  useEffect(() => {
    setAvatar(profile?.avatar)
  }, []);

  const onLogOut = () => {
    dispatch(logoutApp());
    // navigation.navigate(),
  }

  const onChangeAvatar = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then((image: any) => {
      console.log(image);
      setAvatar(image?.path)
    });
  }

  const formInitialValues = {
    first_name: profile.fname | null,
    last_name: profile.lname || '',
    phone: profile.phone || '',
    user_name: profile.uname || '',
    error: '',
  };

  const validationSign = yup.object().shape({
    first_name: yup
      .string()
      .required('This field is required'),

    last_name: yup
      .string()
      .required('This field is required'),

    phone: yup
      .string()
      .min(8, 'Phone number at least 8 characters')
      .required('This field is required'),

    user_name: yup
      .string()
      .required('This field is required'),

  });

  const onSubmit = () => {

  };



  return {
    user,
    onLogOut,
    avatar,
    setAvatar,
    onChangeAvatar,
    formInitialValues,
    validationSign,
    onSubmit,
    profile
  }

}