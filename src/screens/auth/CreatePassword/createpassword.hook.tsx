import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { VERIFICATION } from '@routeName';

interface CreatePasswordProp { }

interface screenNavigationProp {
  navigate: any;
}
export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const formInitialValues = {
    email: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    // email: yup
    //   .string()
    //   .required('This field is required')
    //   .email('Email is not valid'),
  });

  const onSubmit = () => {
    navigation.navigate(VERIFICATION, { params: 'ForgotPassword' })
  };

  return {
    formInitialValues,
    validationSign,
    onSubmit
  }
}