import { background_welcome, IconSlide } from '@assets';
import { AppButton, AppText, Footer } from '@component';
import { useNavigation } from '@react-navigation/native';
import { LOGIN, SIGNUP } from '@routeName';
import { scaleWidth, width } from '@util';
import React from 'react';
import { View, ImageBackground, Pressable, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './style';

interface WelcomeProp { }

interface screenNavigationProp {
  navigate: any;
}

const Welcome = (props: WelcomeProp) => {
  const navigation = useNavigation<screenNavigationProp>();
  const [index, setIndex] = React.useState(0)
  const isCarousel: any = React.useRef(null)
  const moveToSignUp = () => {
    navigation.navigate(SIGNUP)
  }
  const moveToLogin = () => {
    navigation.navigate(LOGIN)
  }

  const DATA = [{
    title: "1",
    body: "The distance between your dreams and reality is called: Action.",
  },
  {
    title: "2",
    body: "Trust in dreams, for in them is hidden the gate to eternity.",
  },
  {
    title: "3",
    body: "You are never too old to set another goal or to dream a new dream",
  }]

  const CarouselCardItem = ({ item, index }: any) => {
    return (
      <View style={{ backgroundColor: 'white' }} key={index}>
        <AppText style={styles.miniTxt} numberOfLines={2} >{item.body}</AppText>
      </View>
    )
  }

  return (
    <>
      <ImageBackground source={background_welcome} resizeMode='cover' style={styles.image} >
        <View style={styles.container}  >
          <AppText numberOfLines={2} style={styles.title}>{'Create a dream and follow it'}</AppText>
          <View style={styles.carousel}>
            <Carousel
              layout="stack"
              layoutCardOffset={0}
              ref={isCarousel}
              data={DATA}
              renderItem={CarouselCardItem}
              sliderWidth={scaleWidth(300)}
              itemWidth={scaleWidth(300)}
              onSnapToItem={(index) => setIndex(index)}
              useScrollView={true}
            />
            <Pagination
              dotsLength={3}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={styles.dot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />
          </View>
          <AppButton
            title={'Sign Up'}
            onPress={moveToSignUp}
          />
          <View style={styles.bottom} >
            <AppText style={styles.bottomTxt2}>{'Already have an account?'}</AppText>
            <Pressable onPress={moveToLogin}>
              <AppText style={styles.bottomTxt}>{'Sign in'}</AppText>
            </Pressable>
          </View>
        </View>
        <Footer />
      </ImageBackground>
    </>
  );
};
export { Welcome };
