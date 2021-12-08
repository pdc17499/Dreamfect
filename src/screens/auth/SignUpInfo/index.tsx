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
import { USER_ACCOUNT, VERIFICATION } from '@routeName';

interface SignUpInfoProp { }

interface screenNavigationProp {
  navigate: any;
}

const SignUpInfo = (props: SignUpInfoProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const formRef = useRef<any>();

  const formInitialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    // first_name: yup
    //   .string()
    //   .required('This field is required'),

    // last_name: yup
    //   .string()
    //   .required('This field is required'),
    // phone: yup
    //   .string()
    //   .required('This field is required'),

  });
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const onSubmit = () => {
    navigation.navigate(USER_ACCOUNT)
  };

  return (
    <>
      <ImageBackground source={background_signup} resizeMode='stretch' style={styles.image} >
        <Header iconLeft={'back'} />
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <Formik
            innerRef={formRef}
            enableReinitialize
            initialValues={formInitialValues}
            validationSchema={validationSign}
            validateOnChange={false}
            onSubmit={onSubmit}>
            {props => (

              <View style={{ flex: 1 }}>
                <AppText numberOfLines={2} style={styles.title}>{'Personal Info'}</AppText>
                <AppInput
                  label={'First name'}
                  placeholder={'Enter your first name'}
                  value={props.values.first_name}
                  onValueChange={props.handleChange('first_name')}
                  error={props.errors.first_name}
                />
                <AppInput
                  label={'Password'}
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
          title={'Countinue'}
          onPress={handleSubmit}
          customStyleButton={styles.button}
        />
        <Footer />
      </ImageBackground>
    </>
  );
};

export { SignUpInfo };
