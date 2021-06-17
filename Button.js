import React from 'react';
import {TextButton, OutlinedButton} from 'react-native-material-basic';
import {ScaledSheet} from 'react-native-size-matters/extend';
import PropTypes from 'prop-types';
import {colors, theme} from '../config/theme';

const Button = React.memo(function Button({primary, filled, ...rest}) {
  const color = primary ? colors.accent : colors.primary;

  if (filled) {
    return (
      <TextButton
        color={color}
        titleColor={colors.white}
        rippleContainerBorderRadius={20}
        style={styles.container}
        titleStyle={theme.fontFamily}
        disabledColor={'rgba(0, 0, 0, 0.12)'}
        {...rest}
      />
    );
  }

  return (
    <OutlinedButton
      rippleContainerBorderRadius={20}
      titleColor={color}
      style={styles.container}
      {...rest}
    />
  );
});

const styles = ScaledSheet.create({
  container: {
    borderRadius: 100,
    flex: 1,
    height: '42@vs',
  },
});

Button.propTypes = {
  primary: PropTypes.bool,
  filled: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
  filled: true,
};

export {Button};
