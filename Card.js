import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import PropTypes from 'prop-types';
import {Ripple} from 'react-native-material-basic';
import {colors, theme} from '../config/theme';

const Card = React.memo(function Card({children, style, onPress, ...rest}) {
  const Component = onPress ? Ripple : View;
  return (
    <Component
      style={[styles.content, theme.shadow, style]}
      onPress={onPress}
      {...rest}>
      {children}
    </Component>
  );
});

const styles = ScaledSheet.create({
  content: {
    backgroundColor: colors.white,
    borderRadius: 6,
  },
});

Card.propTypes = {
  children: PropTypes.any.isRequired,
};

export {Card};
