import React from 'react';
import { StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';
import { AppText } from '@component';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  colors,
  DEVICE,
  fontFamily,
  scaleHeight,
  scaleWidth,
  SIZE,
  STYLE,
} from '@util';
import { IconBack, IconDelete, IconEdit, IconEmail, IconLogo, IconLogOut, IconSetting } from '@assets';
import { useNavigation } from '@react-navigation/native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { HeaderProps } from '@interfaces';

interface screenNavigationProp {
  goBack: any;
}

const Header = React.memo((props: HeaderProps) => {
  const {
    customTitleStyle,
    title,
    customContainer,
    back,
    onPressBack,
    iconFillColor,
    iconRight,
    onPressRight,
    iconLeft
  } = props;
  const navigation = useNavigation<screenNavigationProp>();
  const goBack = () => {
    if (onPressBack) {
      onPressBack();
    } else {
      navigation.goBack();
    }
  };

  const renderIconLeft = () => {
    switch (iconLeft) {
      case 'delete':
        return <IconDelete />;
      case 'back':
        return <IconBack iconFillColor='#1A133D' />;
      case 'logo':
        return <IconLogo />;

    }
    return null;
  };

  const renderIconRight = () => {
    switch (iconRight) {
      case 'email':
        return <IconEmail />;
      case 'edit':
        return <IconEdit />;
      case 'logout':
        return <IconLogOut />;
      case 'setting':
        return <IconSetting />;
    }
    return null;
  };

  return (
    <View style={styles.viewRow}>
      {iconLeft && (
        <Pressable
          // style={styles.buttonLeft}
          onPress={goBack}
          hitSlop={STYLE.hitSlop}>
          {renderIconLeft()}
        </Pressable>
      )}
      <AppText style={[styles.txtTitle, customTitleStyle]}>{title}</AppText>
      {iconRight && (
        <Pressable
          // style={styles.buttonRight}
          onPress={onPressRight}
          hitSlop={STYLE.hitSlop}>
          {renderIconRight()}
        </Pressable>
      )}
    </View>

  );
});

const styles = StyleSheet.create({

  txtTitle: {

    fontSize: SIZE.small_size,
    color: colors.primary,
    flex: 1,
    // paddingHorizontal: SIZE.small_size,
    textAlign: 'center',
    ...fontFamily.Proxima600,
  },
  viewRow: {
    flexDirection: 'row',
    width: DEVICE.width,
    marginTop: scaleWidth(56),
    paddingHorizontal: SIZE.padding,
    alignItems: 'center'
  },
  // buttonLeft: {
  //   left: SIZE.padding + 3,
  //   position: 'absolute',
  // },
  buttonRight: {
    right: SIZE.padding,
    position: 'absolute',
  },
});

export { Header };
