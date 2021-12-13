import { USER_INFO } from '@mocks';
import { useNavigation } from '@react-navigation/native';
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
  const [avatar, setAvatar] = useState<any>()

  const onEdit = () => {
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
    first_name: user?.first_name,
    last_name: user?.last_name,
    phone: user?.phone,
    email: user?.email,
    user_name: user?.user_name,
    error: '',
  };

  const validationSign = yup.object().shape({
    // first_name: yup
    //   .string()
    //   .required('This field is required'),

    // last_name: yup
    //   .string()
    //   .required('This field is required'),

  });

  const onSubmit = () => {

  };



  return {
    user,
    onEdit,
    avatar,
    setAvatar,
    onChangeAvatar,
    formInitialValues,
    validationSign,
    onSubmit
  }

}