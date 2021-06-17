import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {theme, colors} from 'theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {Text} from './Text';

const RadioButton = React.memo(function RadioButton({
  label,
  onPress,
  selected,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon
        name={selected ? 'radiobox-marked' : 'radiobox-blank'}
        color={selected ? colors.accent : colors.textDark2nd}
        size={25}
      />
      <Text style={[theme.body1Dark, styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
});

const styles = ScaledSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: '12@s',
    marginRight: '16@s',
    flexWrap: 'wrap',
  },
});

RadioButton.propTypes = {
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export {RadioButton};
