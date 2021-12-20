import { USER_INFO } from '@mocks';
import { useNavigation } from '@react-navigation/native';
import { changeNotification, getProfileUser } from '@redux';
import { CHANGE_PASSWORD, EDIT_PROFILE } from '@routeName';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
interface ProfileProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();
  const [isEnable, setIsEnable] = useState(true)
  const dispatch = useDispatch()
  const userID: any = useSelector((state: any) => state?.auth?.user?.localId);
  const profile: any = useSelector((state: any) => state?.auth?.profileUser);
  console.log('id', userID);
  const user: any = useSelector((state: any) => state?.auth?.user);
  const [avatar, setAvatar] = useState<string>()

  useEffect(() => {
    dispatch(getProfileUser());
    // user?.providerId ? setAvatar(profile?.avatar) : setAvatar('https://dreamfect-api.adamo.tech/storage/avatars/' + profile?.avatar)
    console.log('avaaa', profile?.avatar);
  }, []);

  console.log('p', profile);


  const onEdit = () => {
    navigation.navigate(EDIT_PROFILE)
  }

  const moveToChangePass = () => {
    navigation.navigate(CHANGE_PASSWORD)
  }

  const changeNotify = () => {
    setIsEnable(!isEnable)
    isEnable ? dispatch(changeNotification({ "noti": 1 }, userID))
      : dispatch(changeNotification({ "noti": 2 }, userID))
  }

  return {

    onEdit,
    moveToChangePass,
    isEnable,
    changeNotify,
    profile,
    avatar,
    user
  }

}