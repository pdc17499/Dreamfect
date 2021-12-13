import { AppDream, AppText } from '@component';
import { USER_INFO, USER_LIST_DREAM, USER_FOLLOW_DREAM } from '@mocks';
import { useNavigation } from '@react-navigation/native';
import { EDIT_PROFILE, PROFILE_SETTING } from '@routeName';
import { height, scaleWidth, SIZE } from '@util';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
interface ProfileProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();

  const user = USER_LIST_DREAM

  const follow = USER_FOLLOW_DREAM

  const onEdit = () => {
    navigation.navigate(PROFILE_SETTING)
  }

  const [onMyDream, setOnMyDream] = useState(true)

  const setDreamRender = () => {
    setOnMyDream(!onMyDream)
  }

  const renderItem = ({ item }: any) => (
    <View style={{
      marginLeft: scaleWidth(4),
      marginTop: scaleWidth(4),
    }}>

      <AppDream uri={item?.uri} isFollowed={item?.isFollowed} isCompleted={item?.isCompleted} />
    </View>
  )

  const RenderDream = () => {
    return (
      <>
        <FlatList
          contentContainerStyle={{ paddingBottom: SIZE.medium_space }}
          showsVerticalScrollIndicator={false}
          data={onMyDream ? user : follow}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          numColumns={3}
        />

        {/* <View style={{ height: 20 }}></View> */}
      </>


    )
  }


  return {
    user,
    onEdit,
    onMyDream,
    setOnMyDream,
    setDreamRender,
    RenderDream

  }

}