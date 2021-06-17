import React from 'react';
import {Select} from 'react-native-material-basic';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors, theme} from '../config/theme';

const Dropdown = React.forwardRef((props, ref) => (
  <Select
    ref={ref}
    inputContainerStyle={styles.input}
    tintColor={colors.primary}
    textColor={colors.textDark2nd}
    baseColor={colors.textDark2nd}
    labelTextStyle={theme.fontFamily}
    titleTextStyle={theme.fontFamily}
    style={theme.fontFamily}
    mode="filled"
    {...props}
  />
));

const styles = ScaledSheet.create({
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    paddingLeft: '10@s',
  },
});

Dropdown.propTypes = {
  ...Select.propTypes,
};

Dropdown.defaultProps = {
  value: '',
};

export {Dropdown};
