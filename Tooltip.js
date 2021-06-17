import React from 'react';
import {scale} from 'react-native-size-matters/extend';
import RNTooltip from 'rn-tooltip';
import PropTypes from 'prop-types';
import {theme, colors} from 'theme';
import {Text} from './Text';

const Tooltip = React.memo(function Tooltip({children, text, ...tooltipProps}) {
  return (
    <RNTooltip
      backgroundColor={colors.black}
      popover={
        <Text style={[theme.subheadingWhite, theme.lineHeight22]}>{text}</Text>
      }
      withOverlay={false}
      pointerColor={'transparent'}
      height={'auto'}
      width={scale(272)}
      {...tooltipProps}>
      {children}
    </RNTooltip>
  );
});

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.any,
  ...RNTooltip.propTypes,
};

export {Tooltip};
