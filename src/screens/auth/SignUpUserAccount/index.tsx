import { AppButton, AppInput, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleWidth, SIZE } from '@util';
import React, { useRef, useState } from 'react';
import { Image, ImageBackground, Pressable, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { background_signup, IconCheck, IconProfile } from '@assets';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { LOGIN, VERIFICATION } from '@routeName';

interface SignUpUserAccountProp { }

interface screenNavigationProp {
  navigate: any;
}

const SignUpUserAccount = (props: SignUpUserAccountProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const formRef = useRef<any>();
  const [avatar, setAvatar] = useState()

  const uploadPhoto = (mediaType: any) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then((image: any) => {
      console.log(image);
      setAvatar(image?.path)
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
    // user_name: yup
    //   .string()
    //   .required('This field is required'),
    // description: yup
    //   .string()
    //   .required('This field is required'),

  });

  const onSubmit = () => {
    navigation.navigate(LOGIN)
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
