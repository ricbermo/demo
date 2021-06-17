import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, theme} from 'theme';
import {Text} from './Text';

const NetworkErrorChip = React.memo(function NetworkErrorChip() {
  return (
    <View style={styles.container}>
      <Icon size={20} color={colors.white} name="information-outline" />
      <Text style={[theme.body1White, theme.lineHeight22]}>Network Error</Text>
    </View>
  );
});

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.error,
    width: '130@vs',
    height: '32@vs',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8@vs',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: '68@vs',
    position: 'absolute',
  },
});

export {NetworkErrorChip};
