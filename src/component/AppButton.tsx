import React, { useCallback } from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { AppText } from './AppText';
import { colors, fontFamily, scaleSize, SIZE } from '@util';
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
    isActive,
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

  const bgLinear = {
    backgroundColor: 'transparent',
    borderWidth: isActive ? 1.5 : 1,
    borderColor: colors.violet,
  };

  const titleLinear = {
    color: colors.primary,
    ...fontFamily.Proxima600,
  };

  const buttonStyle = [
    styles.container,
    typeButton === 'linear' ? bgLinear : {},
    { minHeight: size === 'small' ? SIZE.btn_height_small : SIZE.btn_height },
    typeButton === 'link' ? styles.bgLink : {},
    typeButton === 'underline' ? styles.bgUnderline : {},
    customStyleButton,
  ];

  const titleStyle = [
    styles.txtButton,
    typeButton === 'linear' && titleLinear,
    typeButton === 'link' ? styles.titleLink : {},
    typeButton === 'underline' ? styles.titleUnderline : {},
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
  bgLink: {
    backgroundColor: 'transparent',
    minHeight: 'auto',
    alignItems: 'flex-end',
    alignSelf: 'center',
    borderRadius: 0,
    marginTop: SIZE.medium_space - 4,
  },
  titleLink: {
    color: colors.orange,
    ...fontFamily.Proxima600,
    lineHeight: SIZE.base_size * 1.6,
    textDecorationLine: 'underline',

  },
  bgUnderline: {
    backgroundColor: 'transparent',
    minHeight: 'auto',
    alignItems: 'flex-end',
    alignSelf: 'center',
    borderRadius: 0,
    marginTop: SIZE.medium_space - 4,
  },
  titleUnderline: {
    color: colors.green,
    ...fontFamily.Proxima600,
    lineHeight: SIZE.base_size * 1.6,
    textDecorationLine: 'underline',
  },
});

export { AppButton };
