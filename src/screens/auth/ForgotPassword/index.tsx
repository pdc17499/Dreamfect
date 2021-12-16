import { AppButton, AppInput, AppText, Footer } from '@component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SIZE } from '@util';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import { background_signup } from '@assets';
import { useModel } from './forgotpassword.hook';

interface ForgotPasswordProp { }

const ForgotPassword = (props: ForgotPasswordProp) => {
  const {
    formInitialValues,
    validationSign,
    onSubmit } = useModel(props)

  return (
    <>
      <ImageBackground source={background_signup} resizeMode='stretch' style={styles.image} >
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <Formik
            enableReinitialize
            initialValues={formInitialValues}
            validationSchema={validationSign}
            validateOnChange={false}
            onSubmit={values => onSubmit(values.email)}>
            {props => (
              <View style={{ flex: 1 }}>
                <AppText numberOfLines={2} style={styles.title}>{'Forgot Password?'}</AppText>
                <AppText style={styles.miniTxt}>{"No worries! Just enter your email and we’ll send you a reset password link"}</AppText>
                <AppInput
                  label={'Email'}
                  placeholder={'Enter your email'}
                  value={props.values.email}
                  onValueChange={props.handleChange('email')}
                  error={props.errors.email}
                />

                <AppButton
                  title={'Send'}
                  onPress={props.handleSubmit}
                  customStyleButton={{ marginTop: SIZE.medium_space }}
                />
              </View>
            )}
          </Formik >
        </KeyboardAwareScrollView >
        <Footer />
      </ImageBackground>
    </>
  )
};

export { ForgotPassword };
