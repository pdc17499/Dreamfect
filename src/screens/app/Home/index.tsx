import { background_home, IconEmail, IconLogo } from '@assets'
import { AppButton, AppProfile, AppText } from '@component'
import { screenNavigationProp } from '@interfaces'
import { useNavigation } from '@react-navigation/native'
import { getDreamHomePage } from '@redux'
import { FIND_USER, SEARCH } from '@routeName'
import { LINK_DREAM, scaleWidth } from '@util'
import React, { useEffect } from 'react'
import { View, Text, ImageBackground, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './style'

const HomeScreen = () => {
  const navigation = useNavigation<screenNavigationProp>();
  const dreamList: any = useSelector((state: any) => state?.auth?.listDream);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDreamHomePage())
    console.log(dreamList);
  }, []);


  const renderItem = ({ item }: any) => {
    return (
      <View style={{ marginBottom: scaleWidth(24) }}>
        <AppProfile id={item.dream_id}
          avatar={item.avatar}
          title={item.desc}
          name={item.uname}
          type='profile'
        />
        <Image source={{ uri: LINK_DREAM + item.image }} style={styles.dream} />
        {/* <Image source={{ uri: 'https://i.pinimg.com/236x/a2/69/a8/a269a85e0460683980ae82bef70d820d.jpg' }} style={styles.dream} /> */}
        <AppText numberOfLines={1} style={styles.dreamTitle}>{item.title}</AppText>
        <AppText numberOfLines={2} style={styles.dreamDes}>{item.description}</AppText>
      </View>
    )
  }

  const HomePageWithNewUser = () => (
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
    </ImageBackground>
  )

  const HomePageWithActiveUser = () => (
    <View style={styles.container2}>
      <View style={styles.header}>
        <IconLogo />
        <IconEmail />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={dreamList}
        keyExtractor={item => item.id}
        style={{ marginBottom: scaleWidth(50) }}

      />

    </View>
  )

  return (
    <>
      {dreamList?.length > 0
        ? HomePageWithActiveUser()
        : HomePageWithNewUser()}
    </>
  )
}

export default HomeScreen

