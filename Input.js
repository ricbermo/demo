import React from 'react';
import {FilledTextField} from 'react-native-material-basic';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors, theme} from '../config/theme';

const Input = React.forwardRef((props, ref) => (
  <FilledTextField
    ref={ref}
    inputContainerStyle={styles.container}
    tintColor={colors.primary}
    textColor={colors.textDark2nd}
    baseColor={colors.textDark2nd}
    labelTextStyle={theme.fontFamily}
    titleTextStyle={theme.fontFamily}
    style={theme.fontFamily}
    {...props}
  />
));

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
});

Input.propTypes = {
  ...FilledTextField.propTypes,
};

Input.defaultProps = {
  value: '',
};

export {Input};
