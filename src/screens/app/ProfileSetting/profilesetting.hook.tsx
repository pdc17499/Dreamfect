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

  const user = USER_INFO

  useEffect(() => {
    dispatch(getProfileUser());
  }, []);

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
    user,
    onEdit,
    moveToChangePass,
    isEnable,
    changeNotify,
    profile
  }

}