import React from 'react';
import {Text as RNText} from 'react-native';
import {theme} from '../config/theme';

const Text = React.memo(function Text({children, style, ...props}) {
  return (
    <RNText style={[theme.fontFamily, style]} {...props}>
      {children}
    </RNText>
  );
});

Text.propTypes = {
  ...RNText.propTypes,
};

export {Text};
