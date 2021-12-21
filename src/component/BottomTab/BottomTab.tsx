import { Dimensions, Image, ImageSourcePropType, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import React from 'react'
import { colors, jsonToArray, MAIN_TAB_BAR, TAB_BAR } from '@util'
import { iconExplorer, iconHome, iconNotification, iconProfile, iconSearch } from '@assets'
interface History {
  type: string
  key: string
}

interface Route {
  name: string
  key: string
}
interface State {
  stale: boolean
  type: string
  key: string
  index: number
  routeNames: string[]
  history: History[]
  routes: Route[]
}
interface RouteProps {
  key: string
  name: string
  state: State
}
const height = Dimensions.get('window').height;
// console.log(MAIN_TAB_BAR.HOME)
const Tab = createBottomTabNavigator()
const isNotExplorer = (name: string) => {
  return name !== TAB_BAR.EXPLORER.name
}
const renderTabScreens = () => {
  const tabArray = jsonToArray(TAB_BAR)
  return (
    <>
      {tabArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.route}
          />
        )
      })}
    </>
  )
}
const ExplorerButton = () => {
  return (
    <View style={styles.shadow} >
      <Image
        style={styles.explorerIcon}
        source={iconExplorer}
      />
    </View>
  )
}
const renderTabButtons = (title: string, tintColor: string, focused: any) => {
  const { HOME, PROFILE, EXPLORER, NOTIFICATIONS, SEARCH } = MAIN_TAB_BAR
  const TAB_BAR_ICONS = {
    [HOME]: iconHome,
    [PROFILE]: iconProfile,
    [EXPLORER]: iconExplorer,
    [NOTIFICATIONS]: iconNotification,
    [SEARCH]: iconSearch,
  }
  if (isNotExplorer(title))
    return (
      <>
        <View style={styles.iconBlock}>
          <Image
            style={[
              styles.vTabBarIcon,
              {
                tintColor: tintColor,
              },
            ]}
            source={TAB_BAR_ICONS[title]}
          />
        </View>
      </>)
  return <ExplorerButton />
}
const renderTabBar = (props: any) => {
  return (
    <View
      style={[
        styles.navigatorContainer,
      ]}
    >
      <BottomTabBar {...props} style={[styles.customTabBar]} />
    </View>
  )
}
const BottomTab = ({ route }: { route: RouteProps }) => {
  return (
    <Tab.Navigator
      tabBar={props => renderTabBar(props)}
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          position: 'absolute'
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? '#5451FF' : '#E1DCFF'
          return renderTabButtons(route.name, tintColor, focused)
        },
      })}
    >
      {renderTabScreens()}
    </Tab.Navigator >
  )
}

export default BottomTab

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(55, 55, 55, 0.06)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 12,
  },
  tab: {
    alignItems: 'center',
    alignContent: 'center',
    // marginTop: 11,
  },
  img_icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  liveStreamIcon: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
  },
  text_tab: {
    fontSize: 12,
    marginTop: 2,
  },
  iconBlock: {
    marginBottom: 36,
    marginTop: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  vTabBarIcon: {
    width: 25,
    height: 25
  },
  navigatorContainer: {
    backgroundColor: 'red',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  customTabBar: {
    height: Platform.OS == 'android' ? height * 0.1 : height * 0.11,
  },
  explorerIcon: {
    width: 80,
    height: 80,
    marginBottom: height * 0.06
  }
})
