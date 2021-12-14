// import moment from 'moment';
import * as yup from 'yup';
export const validateForm = () => {
  return {
    common: {
      require: yup.string().required('This field is required'),
    },
    email: yup
      .string()
      .required('You must select 1 option')
      .max(150, 'Email is not over 150 characters')
      .email('Email is invalid'),
    password: yup
      .string()
      .min(8, 'You must select 1 option')
      .max(30, 'Password is not over 30 characters')
      .required(),
    newPassword: yup
      .string()
      .required('This field is required')
      .min(8, 'Password must be at least 8 characters')
      .max(30, 'Password is not over 30 characters'),
    confirmPassword: yup
      .string()
      .required('This field is required')
      .oneOf(
        [yup.ref('new_password'), null],
        'Confirm Password does not match the password',
      ),
    fullname: yup
      .string()
      .required('This field is required')
      .max(32, 'Full name may not be greater than 32 characters'),
    phone: yup
      .string()
      .required('This field is required')
      .test({
        name: 'validatePhoneCode',
        message: 'Code number is required',
        test: function (value: any) {
          const index = value.indexOf(' ');
          return index > 0;
        },
      })
      .test({
        name: 'validatePhone',
        message: 'Phone number is required',
        test: function (value: any) {
          const index = value.indexOf(' ');
          if (index <= 0) {
            return false;
          } else {
            const nPhone = value.substring(index + 1, value.length);
            return nPhone !== '';
          }
        },
      }),
  };
};
