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
    onLogOut,
    avatar,
    setAvatar,
    onChangeAvatar,
    formInitialValues,
    validationSign,
    onSubmit,
    profile } = useModel(props)

  return (
    <>
      <ImageBackground source={background_home} resizeMode='cover' style={styles.image} >
        <Header title={'Edit Account'} iconRight={'logout'} iconLeft={'back'} onPressRight={onLogOut} />
        <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <Formik
            enableReinitialize
            initialValues={formInitialValues}
            validationSchema={validationSign}
            validateOnChange={false}
            onSubmit={values => onSubmit(values.first_name, values.last_name, values.phone, values.user_name, values.description)}>
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
                  keyboardType={'numeric'}
                  label={'Phone'}
                  value={props.values.phone}
                  onValueChange={props.handleChange('phone')}
                  error={props.errors.phone}
                />
                <AppInput
                  label={'User name'}
                  value={props.values.user_name}
                  onValueChange={props.handleChange('user_name')}
                  error={props.errors.user_name}
                />
                <AppInput
                  label={'Description'}
                  value={props.values.description}
                  onValueChange={props.handleChange('description')}
                  error={props.errors.description}
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

          {avatar
            ? <Image source={{ uri: 'https://dreamfect-api.adamo.tech/storage/avatars/' + avatar }} style={styles.avatar} />
            : <Image source={avatar_default} style={styles.avatar} />
          }
        </Pressable>
        <Footer />
      </ImageBackground>
    </>
  );
};
export { EditProfile };
