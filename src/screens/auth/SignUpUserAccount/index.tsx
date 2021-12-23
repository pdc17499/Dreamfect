import { AppButton, AppInput, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleWidth, SIZE } from '@util';
import React, { useRef, useState } from 'react';
import { Alert, Image, ImageBackground, Pressable, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { background_signup, IconCheck, IconProfile } from '@assets';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { LOGIN, VERIFICATION } from '@routeName';
import { useDispatch, useSelector } from 'react-redux';
import { DataSignupProps } from '@interfaces';
import { updateSignUpInfo, updateUserInfo } from '@redux';

interface SignUpUserAccountProp { }

interface screenNavigationProp {
  navigate: any;
}

const SignUpUserAccount = (props: SignUpUserAccountProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const formRef = useRef<any>();
  const [avatar, setAvatar] = useState()
  const [file, setFile] = useState()
  const dispatch = useDispatch()
  const dataSignUp: DataSignupProps = useSelector((state: any) => state?.auth?.dataSignup);
  const user_id = useSelector((state: any) => state?.auth?.userID);


  const uploadPhoto = (mediaType: any) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then((image: any) => {
      console.log('ima', image);
      setAvatar(image?.path)
      setFile(image)
    });
  };

  console.log('ava', avatar);
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const formInitialValues = {
    user_name: '',
    description: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    user_name: yup
      .string()
      .required('This field is required')
      .max(150, 'User name must not greater than 150 characters'),
    description: yup
      .string()
      .required('This field is required')
      .max(150, 'Description must not greater than 500 characters'),
  });

  const onSubmit = (username: string, des: string) => {
    const body = {
      id: user_id,
      first_name: dataSignUp.first_name,
      last_name: dataSignUp.first_name,
      phone: dataSignUp.phone,
      username: username,
      description: des,
      avatar: file,
    }
    console.log('body', body);

    avatar ? dispatch(updateSignUpInfo(body))
      : Alert.alert('Please choose your avatar')
  };

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
            onSubmit={values => onSubmit(values.user_name, values.description)}>
            {props => (
              <View style={{ flex: 1 }}>
                <AppText numberOfLines={2} style={styles.title}>{'Let’s start by adding your user account'}</AppText>
                <Pressable style={styles.upPhoto} onPress={uploadPhoto}>
                  {avatar ? <Image source={{ uri: avatar }} style={styles.avatar} /> : <IconProfile />}
                </Pressable>
                <AppInput
                  label={'User name'}
                  placeholder={'Enter your user name'}
                  value={props.values.user_name}
                  onValueChange={props.handleChange('user_name')}
                  error={props.errors.user_name}
                />
                <AppInput
                  multiline={true}
                  numberOfLines={3}
                  label={'Description'}
                  placeholder={'Enter a small description about yourself'}
                  value={props.values.description}
                  onValueChange={props.handleChange('description')}
                  error={props.errors.description}
                />
              </View>
            )}
          </Formik >
        </KeyboardAwareScrollView >
        <AppButton
          title={'Start'}
          onPress={handleSubmit}
          customStyleButton={styles.button}
        />
        <Footer />
      </ImageBackground>
    </>
  );
};

export { SignUpUserAccount };
