import { USER_INFO } from '@mocks';
import { useNavigation } from '@react-navigation/native';
import { changePassword } from '@redux';
import { SUCCESS_SCREEN } from '@routeName';
import { validateForm } from '@util';
import { useState } from 'react';
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
  const user_id = useSelector((state: any) => state?.auth?.user?.localId);

  const onEdit = () => {
    // navigation.navigate(),
  }

  const formInitialValues = {
    // current_password: '',
    new_password: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    // current_password: yup
    //   .string()
    //   .required('This field is required'),
    new_password: validateForm().password

  });

  const onSubmit = (pass: string) => {
    dispatch(changePassword({
      "id": user_id,
      "password": pass
    }))
    // navigation.navigate(SUCCESS_SCREEN)
  };

  // const [result, setResult] = useState<string[]>()
  // // const result: string[] = [];
  // const onListSelect = (id: any) => {
  //   const result2 = result
  //   if (result2) {
  //     const index = result2.findIndex(e => e === id)
  //     console.log('index', index);
  //     index === -1
  //       ? result2.push(id)
  //       : result2.splice(index, 1);
  //   }
  //   console.log('rr', result2);
  //   setResult(result2)
  // }



  return {
    user,
    onEdit,
    formInitialValues,
    validationSign,
    onSubmit,
    // onListSelect
  }

}