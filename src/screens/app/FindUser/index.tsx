import { IconSearch } from '@assets'
import { AppButton, AppProfile, Footer, Header } from '@component'
import { scaleWidth, SIZE } from '@util'
import React from 'react'
import { View, Text, ScrollView, FlatList, TextInput } from 'react-native'
import { styles } from './style'

const FindUser = () => {

  const mockList = [
    {
      id: '1',
      name: 'Tom Hardy',
      avatar: 'https://i.pinimg.com/236x/d0/b5/46/d0b546e0d3046ea8653981f7913ffa52.jpg',
      title: 'I wanna be a great photographer',
    },
    {
      id: '2',
      name: 'Tom Hardy',
      avatar: 'https://i.pinimg.com/236x/d0/b5/46/d0b546e0d3046ea8653981f7913ffa52.jpg',
      title: 'I wanna be a great photographer',
    },

    {
      id: '3',
      name: 'Tom Hardy',
      avatar: 'https://i.pinimg.com/236x/d0/b5/46/d0b546e0d3046ea8653981f7913ffa52.jpg',
      title: 'I wanna be a great photographer',
    },
    {
      id: '4',
      name: 'Tom Hardy',
      avatar: 'https://i.pinimg.com/236x/d0/b5/46/d0b546e0d3046ea8653981f7913ffa52.jpg',
      title: 'I wanna be a great photographer',
    },
    {
      id: '5',
      name: 'Tom Hardy',
      avatar: 'https://i.pinimg.com/236x/d0/b5/46/d0b546e0d3046ea8653981f7913ffa52.jpg',
      title: 'I wanna be a great photographer',
    },

  ]

  const setItemSelect = (id: string) => {
    console.log('iddd', id);

  }

  const renderItem = ({ item }: any) => (
    <View style={{ marginTop: scaleWidth(20) }}>
      <AppProfile
        id={item.id}
        title={item.title}
        avatar={item.avatar}
        type={'checkbox'}
        name={item.name}
        // onSelected={setItemSelect(item.id)}
        onSelected={setItemSelect}

      />
    </View>
  )
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header iconLeft='back' title='New users' />
        <View style={styles.container}>
          <View style={styles.search}>
            <IconSearch />
            <TextInput placeholder='Search' style={styles.input} ></TextInput>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            data={mockList}
            keyExtractor={item => item.id}
          />
          <AppButton customStyleButton={styles.button} title='Done' />
          <Footer />
        </View>
      </View>
    </>
  )
}

export default FindUser
