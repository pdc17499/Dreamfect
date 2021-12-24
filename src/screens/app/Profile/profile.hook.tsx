import { AppDream } from '@component';
import { useNavigation } from '@react-navigation/native';
import { EXPLORER, PROFILE_SETTING } from '@routeName';
import { getFollowDreamApi, getMyListDreamApi, GlobalService } from '@services';
import { scaleWidth, SIZE } from '@util';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
interface ProfileProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const userID: any = useSelector((state: any) => state?.auth?.user?.localId);
  const [myList, setMyList] = useState()
  const [followDream, setFollowDream] = useState()
  const [info, setInfo] = useState<any>()
  const user: any = useSelector((state: any) => state?.auth?.user);

  useEffect(() => {
    (async function () {
      try {
        GlobalService.showLoading();
        const response = await getMyListDreamApi(userID)
        const response2 = await getFollowDreamApi(userID)
        GlobalService.hideLoading();
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

  const moveToCreateDream = () => {
    navigation.navigate(EXPLORER)
  }

  return {
    onEdit,
    onMyDream,
    setOnMyDream,
    setDreamRender,
    RenderDream,
    myList,
    info,
    user,
    moveToCreateDream
  }
}