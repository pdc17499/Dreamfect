import { avatar_default } from '@assets';
import { AppButton, AppInput, AppProfile, Footer, Header } from '@component';
import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { useModel } from './changepassword.hook';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './style';
import { Formik } from 'formik';
import { scaleHeight, SIZE } from '@util';

interface ChangePasswordProp { }

const ChangePassword = (props: ChangePasswordProp) => {
  const {
    formInitialValues,
    validationSign,
    onSubmit,
  } = useModel(props)

  return (
    <View style={styles.container} >
      <Header title={'Change password'} iconLeft={'back'} />
      <Formik
        enableReinitialize
        initialValues={formInitialValues}
        validationSchema={validationSign}
        validateOnChange={false}
        onSubmit={values => onSubmit(values.new_password)}>
        {props => (
          <View style={{ flex: 1, paddingTop: scaleHeight(60), paddingHorizontal: SIZE.padding }}>
            {/* <AppInput
              label={'Current password'}
              showEye
              secureTextEntry
              value={props.values.current_password}
              onValueChange={props.handleChange('current_password')}
              error={props.errors.current_password}
            /> */}
            <AppInput
              label={'Password'}
              showEye
              secureTextEntry
              value={props.values.new_password}
              onValueChange={props.handleChange('new_password')}
              error={props.errors.new_password}
            />

            <AppButton
              title={'Save'}
              onPress={props.handleSubmit}
              customStyleButton={{ marginTop: SIZE.medium_space }}
            />
          </View>
        )}
      </Formik >

      <Footer />
    </View>



  );
};
export { ChangePassword };
