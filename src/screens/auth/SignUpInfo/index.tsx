import { AppButton, AppInput, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleWidth, SIZE } from '@util';
import React, { useRef, useState } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { background_signup, IconCheck } from '@assets';
import { VERIFICATION } from '@routeName';
import { useModel } from './signupinfo.hook';

interface SignUpInfoProp { }

interface screenNavigationProp {
  navigate: any;
}

const SignUpInfo = (props: SignUpInfoProp) => {
  const {
    formRef,
    formInitialValues,
    validationSign,
    handleSubmit,
    onSubmit,
  } = useModel(props)

  return (
    <>
      <ImageBackground source={background_signup} resizeMode='cover' style={styles.image} >
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <Formik
            innerRef={formRef}
            enableReinitialize
            initialValues={formInitialValues}
            validationSchema={validationSign}
            validateOnChange={false}
            onSubmit={values => onSubmit(values.first_name, values.last_name, values.phone)}>
            {props => (
              <View style={{ flex: 1 }}>
                <AppText numberOfLines={2} style={styles.title}>{'Personal info'}</AppText>
                <AppInput
                  label={'First name'}
                  placeholder={'Enter your first name'}
                  value={props.values.first_name}
                  onValueChange={props.handleChange('first_name')}
                  error={props.errors.first_name}
                />
                <AppInput
                  label={'Last name'}
                  placeholder={'Enter your last name'}
                  value={props.values.last_name}
                  onValueChange={props.handleChange('last_name')}
                  error={props.errors.last_name}
                />

                <AppInput
                  keyboardType={'numeric'}
                  label={'Phone'}
                  placeholder={'Enter your phone number'}
                  value={props.values.phone}
                  onValueChange={props.handleChange('phone')}
                  error={props.errors.phone}
                />
              </View>

            )}
          </Formik >
        </KeyboardAwareScrollView >
        <AppButton
          title={'Continue'}
          onPress={handleSubmit}
          customStyleButton={styles.button}
        />
        <Footer />
      </ImageBackground>
    </>
  );
};

export { SignUpInfo };
