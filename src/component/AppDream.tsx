import { IconCheck, IconHandShake, IconTickGreen } from '@assets';
import { colors, fontFamily, scaleWidth, SIZE } from '@util';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


interface AppDreamProps {
  uri: string,
  isCompleted?: boolean,
  isFollowed?: boolean,

}

const AppDream = React.memo((props: AppDreamProps) => {
  const { uri, isCompleted, isFollowed } = props;

  return (
    <View>
      <Image source={{ uri: uri }} style={styles.image} />

      {(isCompleted || isFollowed) && (
        <View style={styles.right}>

          {isCompleted &&
            (
              <View>
                <IconTickGreen />
              </View>
            )
          }

          {isCompleted && isFollowed && (
            <View style={{ height: 5 }}></View>
          )}

          {isFollowed && (
            <View>
              <IconHandShake />
            </View>
          )}

        </View>
      )}

    </View>
  );
});

const styles = StyleSheet.create({
  image: {
    height: scaleWidth(120),
    width: scaleWidth(120),
    borderRadius: scaleWidth(16),

  },
  right: {
    backgroundColor: colors.chatBg,
    width: scaleWidth(32),
    // height: scaleWidth(16),
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: scaleWidth(16),
    borderBottomLeftRadius: scaleWidth(16),
    paddingVertical: scaleWidth(10),
    alignItems: 'center',
    // alignContent: 'space-between',
    // justifyContent: 'space-between'

  }
});

export { AppDream };
