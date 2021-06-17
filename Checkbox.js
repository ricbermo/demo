import React from 'react';
import {View} from 'react-native';
import {theme, colors} from 'theme';
import {ScaledSheet, verticalScale} from 'react-native-size-matters/extend';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Ripple} from 'react-native-material-basic';
import {Text} from './Text';

const Checkbox = React.memo(function Checkbox({selected, onPress, title}) {
  const icon = selected ? 'checkbox-marked-outline' : 'checkbox-blank-outline';

  return (
    <View style={styles.container}>
      <Ripple onPress={onPress}>
        <Icon name={icon} size={verticalScale(25)} color={colors.textDark2nd} />
      </Ripple>
      <View style={styles.separtor} />
      <Ripple onPress={onPress}>
        <Text style={theme.body1Dark}>{title}</Text>
      </Ripple>
    </View>
  );
});

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separtor: {
    marginRight: '19@vs',
  },
});

export {Checkbox};
