import { background_profile, IconEditPhoto, IconPickDream } from '@assets'
import { AppText, AppButton, Header, AppInput, AppFriend } from '@component'
import { screenNavigationProp } from '@interfaces'
import { useNavigation } from '@react-navigation/native'
import { PROFILE_SETTING } from '@routeName'
import { scaleWidth } from '@util'
import React, { useState } from 'react'
import { View, ImageBackground, Pressable, Image } from 'react-native'
import { styles } from './style'
import * as yup from 'yup';
import { Formik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
import Video from 'react-native-video';

const ExplorerScreen = () => {
  const navigation = useNavigation<screenNavigationProp>();
  const [image, setImage] = useState<string>()
  const [file, setFile] = useState()
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onEdit = () => {
    navigation.navigate(PROFILE_SETTING)
  }
  const formInitialValues = {
    title: '',
    description: '',
    error: '',
  };

  const validationSign = yup.object().shape({
    title: yup
      .string()
      .required('This field is required'),
    description: yup
      .string()
      .required('This field is required'),
  });

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then((image: any) => {
      setImage(image?.path)
      setFile(image)
    });
    toggleModal()
  }

  const pickVideo = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video: any) => {
      setFile(video)
    });
    toggleModal()
  }

  const renderVideo = (video: any) => {
    return (
      <View style={styles.imageVideo}>
        <Video
          source={{ uri: video.path, type: video.mime }}
          style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, borderRadius: scaleWidth(16) }}
          rate={1}
          paused={false}
          volume={1}
          muted={false}
          resizeMode={'cover'}
          onError={(e) => console.log(e)}
          onLoad={(load) => console.log(load)}
          repeat={true}
        />
        <Pressable onPress={toggleModal} style={styles.editPhoto}>
          <IconEditPhoto />
        </Pressable>
      </View>
    )
  }

  const renderImage = (image: any) => {
    console.log('imag', image);
    return (
      <View>
        <Image
          style={styles.imageVideo}
          source={{ uri: image.path }}
        />
        <Pressable onPress={toggleModal} style={styles.editPhoto} >
          <IconEditPhoto />
        </Pressable>
      </View>
    );
  }

  const renderAsset = (file: any) => {
    if (file.mime && file.mime.toLowerCase().indexOf('video/') !== -1) {
      return renderVideo(file);
    }
    return renderImage(file);
  }

  return (
    <ImageBackground source={background_profile} resizeMode='cover' style={styles.image} >
      <Header title='New dream' iconLeft={'delete'} />
      <View style={styles.container}>
        <KeyboardAwareScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}   >
          {file ? renderAsset(file)
            : <Pressable onPress={() => setModalVisible(!isModalVisible)}>
              <IconPickDream style={styles.imageVideo} />
            </Pressable>}
          <Formik
            enableReinitialize
            initialValues={formInitialValues}
            validationSchema={validationSign}
            validateOnChange={false}
            onSubmit={() => { }}>
            {props => (
              <View style={{ flex: 1, paddingTop: scaleWidth(32) }}>
                <AppInput
                  placeholder='Enter your dream title'
                  label={'Dream title'}
                  value={props.values.title}
                  onValueChange={props.handleChange('title')}
                  error={props.errors.title}
                />
                <AppInput
                  placeholder='Enter a dream description'
                  numberOfLines={3}
                  multiline={true}
                  label={'Description'}
                  value={props.values.description}
                  onValueChange={props.handleChange('description')}
                  error={props.errors.description}
                />
                <AppText style={styles.botTxt}>{'Select who will see your dream'}</AppText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scaleWidth(10) }}>
                  <AppFriend type='default' />
                  <AppFriend type='close' />
                  <AppFriend type='public' />

                </View>
                <AppButton
                  title={'Save'}
                  onPress={props.handleSubmit}
                  customStyleButton={styles.button}
                />
              </View>
            )}
          </Formik >

          <Modal isVisible={isModalVisible} backdropOpacity={0.3}  >
            <Pressable style={styles.modal} onPress={toggleModal} />
            <View style={{
              justifyContent: 'center',
              borderRadius: scaleWidth(16),
            }}>
              <AppButton title="Open Image Gallery" onPress={pickImage} />
              <AppButton title="Open Video Gallery" onPress={pickVideo} />
            </View>
          </Modal>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground >

  )
}

export default ExplorerScreen
