import { USER_INFO } from '@mocks';
import { useNavigation } from '@react-navigation/native';
import { CHANGE_PASSWORD, EDIT_PROFILE } from '@routeName';
interface ProfileProp { }

interface screenNavigationProp {
  navigate: any;
}

export function useModel(props: any) {
  const navigation = useNavigation<screenNavigationProp>();

  const user = USER_INFO

  const onEdit = () => {
    navigation.navigate(EDIT_PROFILE)
  }

  const moveToChangePass = () => {
    navigation.navigate(CHANGE_PASSWORD)
  }

  return {
    user,
    onEdit,
    moveToChangePass
  }

}