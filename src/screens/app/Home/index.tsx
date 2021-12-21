import { background_home, IconLogo } from '@assets'
import { AppButton, AppText } from '@component'
import { screenNavigationProp } from '@interfaces'
import { useNavigation } from '@react-navigation/native'
import { FIND_USER, SEARCH } from '@routeName'
import { scaleWidth } from '@util'
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from './style'

const HomeScreen = () => {
  const navigation = useNavigation<screenNavigationProp>();

  return (
    <>
      <ImageBackground source={background_home} style={styles.image} >
        <View style={styles.container}>
          <IconLogo style={{ marginTop: scaleWidth(62) }} />
          <AppText style={styles.bigTxt}>{'No Selected Users'}</AppText>
          <AppText style={styles.miniTxt} >{'You currently do not have any users, try to find'}</AppText>
          <AppButton
            title='Find'
            onPress={() => navigation.navigate(FIND_USER)}
          />
        </View>
        <Text></Text>
      </ImageBackground>
    </>
  )
}

export default HomeScreen

