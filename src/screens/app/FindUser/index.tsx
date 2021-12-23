import { IconSearch } from '@assets'
import { AppButton, AppProfile, Footer, Header } from '@component'
import { findUser } from '@redux'
import { getMyListDreamApi, getFollowDreamApi, getListUserApi, getListSearchUserApi } from '@services'
import { scaleWidth, SIZE } from '@util'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, TextInput, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { styles } from './style'

const FindUser = () => {
  const [listUser, setListUser] = useState<any>()
  const [listSelected, setListSelected] = useState<Array<string>>([])
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  useEffect(() => {
    (async function () {
      try {
        const response = await getListUserApi()
        console.log('res', response);
        setListUser(response?.data?.data?.data)
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const setItemSelect = (id: string, isSelected: boolean) => {
    if (!isSelected) {
      const nSelectedItem = listSelected.filter(
        (itm: string) => id !== itm,
      );
      setListSelected(nSelectedItem);
    } else {
      listSelected.push(id);
      setListSelected([...listSelected]);
    }
  }

  const renderItem = ({ item }: any) => {

    return (
      <View style={{ marginTop: scaleWidth(20) }}>
        <AppProfile
          id={item.id}
          title={item.desc}
          avatar={item.avatar}
          type={'checkbox'}
          name={item.uname}
          onSelected={setItemSelect}
        />
      </View>
    )
  }

  const onDone = () => {
    console.log('s', listSelected);
    dispatch(findUser(listSelected))
  }

  const searchUser = () => {
    (async function () {
      try {
        const response = await getListSearchUserApi(text)
        console.log('res', response);
        setListUser(response?.data?.data?.data)
      } catch (e) {
        console.error(e);
      }
    })();
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header iconLeft='back' title='New users' customTitleStyle={{ marginLeft: -10 }} />
        <View style={styles.container}>

          <View style={styles.search}>
            <Pressable onPress={searchUser}>
              <IconSearch />
            </Pressable>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder='Search'
              style={styles.input}
            ></TextInput>
          </View>


          <FlatList
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            data={listUser}
            keyExtractor={item => item.id}
            style={{ marginBottom: scaleWidth(120) }}
          />

          <AppButton
            onPress={onDone}
            customStyleButton={styles.button}
            title='Done' />
          <Footer />
        </View>
      </View>
    </>
  )
}

export default FindUser
