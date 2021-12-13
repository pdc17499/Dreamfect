import React, { useCallback } from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { AppText } from './AppText';
import { colors, fontFamily, scaleSize, scaleWidth, SIZE } from '@util';
import { debounce } from 'lodash';
import { ButtonProps } from '@interfaces';

const AppButton = React.memo((props: ButtonProps) => {
  const {
    title,
    label,
    customStyleButton,
    customStyleTitle,
    customStyleLabel,
    onPress,
    disabled,
    iconRight,
    size,
    typeButton,
    isNotFocus,
    image,
    imageStyle,
    containerStyle,
    iconLeft,
  } = props;

  const onPressButton = useCallback(
    debounce(() => {
      if (onPress) {
        onPress();
      }
    }, 150),
    [onPress],
  );

  const bgRose = {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.rose,
    with: scaleWidth(300),
  };

  const titleRose = {
    color: colors.rose,
    ...fontFamily.Proxima600,

  };

  const bgOrange = {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.orange,

  };

  const titleOrange = {
    color: colors.orange,
    ...fontFamily.Proxima600,

  };
  const bgGreen = {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.green,

  };

  const titleGreen = {
    color: colors.green,
    ...fontFamily.Proxima600,
  };

  const bgNotFocus = {
    backgroundColor: colors.secondButton,
    borderWidth: 1,
    borderColor: colors.secondButton,
  }

  const titleNotFocus = {
    color: colors.violet,
    ...fontFamily.Proxima600,
  }


  const buttonStyle = [
    styles.container,
    isNotFocus ? bgNotFocus : {},
    typeButton === 'rose' ? bgRose : {},
    { minHeight: size === 'small' ? SIZE.btn_height_small : SIZE.btn_height },
    typeButton === 'orange' ? bgOrange : {},
    typeButton === 'green' ? bgGreen : {},
    customStyleButton,
  ];

  const titleStyle = [
    styles.txtButton,
    isNotFocus ? titleNotFocus : {},
    typeButton === 'rose' && titleRose,
    typeButton === 'orange' ? titleOrange : {},
    typeButton === 'green' ? titleGreen : {},
    size === 'small' && { ...fontFamily.Proxima600 },
    customStyleTitle,
  ];

  return (
    <View style={containerStyle}>
      {label && (
        <AppText style={[styles.label, customStyleLabel]}>{label}</AppText>
      )}
      <TouchableOpacity
        style={buttonStyle}
        disabled={disabled}
        onPress={onPressButton}
        activeOpacity={0.75}>
        {iconLeft && <>{iconLeft}</>}
        {image && <Image source={image} style={imageStyle} />}
        {title && <AppText style={titleStyle}>{title}</AppText>}

      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: scaleSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZE.base_space,
    backgroundColor: colors.violet,
  },
  label: {
    color: colors.secondPrimary,
    fontSize: scaleSize(14.5),
    ...fontFamily.Proxima400,
    paddingTop: SIZE.padding,
  },
  txtButton: {
    ...fontFamily.Proxima600,
    color: colors.white,
    fontSize: SIZE.base_size,
  },
  iconLeft: {
    marginRight: SIZE.base_space,
  },
  iconRight: {
    marginLeft: SIZE.base_space / 2,
    marginRight: -SIZE.base_space / 2,
  },


});

export { AppButton };
