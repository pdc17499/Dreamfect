import { AppDream, AppText } from '@component';
import { USER_INFO, USER_LIST_DREAM, USER_FOLLOW_DREAM } from '@mocks';
import { useNavigation } from '@react-navigation/native';
import { EDIT_PROFILE, PROFILE_SETTING } from '@routeName';
import { getFollowDreamApi, getMyListDreamApi } from '@services';
import { height, scaleWidth, SIZE } from '@util';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
interface ProfileProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const userID: any = useSelector((state: any) => state?.auth?.user?.localId);
  const dispatch = useDispatch()
  const [myList, setMyList] = useState()
  const [followDream, setFollowDream] = useState()

  const [info, setInfo] = useState<any>()

  const user: any = useSelector((state: any) => state?.auth?.user);
  const [avatar, setAvatar] = useState<string>()

  useEffect(() => {
    (async function () {
      try {
        const response = await getMyListDreamApi(userID)
        const response2 = await getFollowDreamApi(userID)
        setMyList(response?.data?.data?.list?.data)
        setFollowDream(response2?.data?.data?.list?.data)
        setInfo(response?.data?.data)
        console.log('info', info);
      } catch (e) {
        console.error(e);
      }
    })();


  }, []);


  const onEdit = () => {
    navigation.navigate(PROFILE_SETTING)
  }

  const [onMyDream, setOnMyDream] = useState(true)

  const setDreamRender = () => {
    setOnMyDream(!onMyDream)
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={{
        marginLeft: scaleWidth(4),
        marginTop: scaleWidth(4),
      }}>
        <AppDream uri={item?.image} isFollowed={item?.status_partner === 2} isCompleted={item?.status === 2} />
      </View>
    )
  }

  const RenderDream = () => {
    return (
      <>
        <FlatList
          contentContainerStyle={{ paddingBottom: SIZE.medium_space }}
          showsVerticalScrollIndicator={false}
          data={onMyDream ? myList : followDream}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          numColumns={3}
        />
      </>
    )
  }


  return {
    onEdit,
    onMyDream,
    setOnMyDream,
    setDreamRender,
    RenderDream,
    myList,
    info,
    user

  }

}