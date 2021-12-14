import { avatar_default, background_home, EnableNotification, IconArrowRight, IconProfile } from '@assets';
import { AppButton, AppInput, AppText, Footer, Header } from '@component';
import React from 'react';
import { View, ImageBackground, Pressable, Image } from 'react-native';
import { useModel } from './editprofile.hook';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './style';
import { Formik } from 'formik';
import { scaleHeight, SIZE } from '@util';

interface EditProfileProp { }

const EditProfile = (props: EditProfileProp) => {
  const {
    user,
    onEdit,
    avatar,
    setAvatar,
    onChangeAvatar,
    formInitialValues,
    validationSign,
    onSubmit } = useModel(props)

  return (
    <>
      <ImageBackground source={background_home} resizeMode='cover' style={styles.image} >
        <Header title={'Edit Account'} iconRight={'logout'} iconLeft={'back'} onPressRight={onEdit} />
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >

          <Formik
            enableReinitialize
            initialValues={formInitialValues}
            validationSchema={validationSign}
            validateOnChange={false}
            onSubmit={onSubmit}>
            {props => (
              <View style={{ flex: 1, paddingTop: scaleHeight(76) }}>

                <AppInput
                  label={'First name'}
                  value={props.values.first_name}
                  onValueChange={props.handleChange('first_name')}
                  error={props.errors.first_name}
                />
                <AppInput
                  label={'Last name'}
                  value={props.values.last_name}
                  onValueChange={props.handleChange('last_name')}
                  error={props.errors.last_name}
                />
                <AppInput
                  label={'Phone'}
                  value={props.values.phone}
                  onValueChange={props.handleChange('phone')}
                  error={props.errors.phone}
                />
                <AppInput
                  label={'Email'}
                  value={props.values.email}
                  onValueChange={props.handleChange('email')}
                  error={props.errors.email}
                />
                <AppInput
                  label={'User name'}
                  value={props.values.user_name}
                  onValueChange={props.handleChange('user_name')}
                  error={props.errors.user_name}
                />
                <AppButton
                  title={'Save'}
                  onPress={props.handleSubmit}
                  customStyleButton={{ marginVertical: SIZE.medium_space }}
                />
              </View>
            )}
          </Formik >




        </KeyboardAwareScrollView>
        <Pressable style={styles.upPhoto} onPress={onChangeAvatar}>
          {avatar ? <Image source={{ uri: avatar }} style={styles.avatar} />
            : <Image source={avatar_default} style={styles.avatar} />}
        </Pressable>
        <Footer />
      </ImageBackground>
    </>
  );
};
export { EditProfile };