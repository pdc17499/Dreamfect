import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { VERIFICATION } from '@routeName';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '@redux';
import { validateForm } from '@util';

interface screenNavigationProp {
  navigate: any;
}
export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const dispatch = useDispatch()

  const formInitialValues = {
    email: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    email: validateForm().email,
  });

  const onSubmit = (mail: string) => {
    dispatch(forgotPassword({ email: mail }))
  };

  return {
    formInitialValues,
    validationSign,
    onSubmit
  }
}