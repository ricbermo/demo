import React, {useCallback} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {theme, colors, statusBarHeight} from 'theme';
import {Text} from './Text';
import {IconButton} from './IconButton';

const propTypes = {
  title: PropTypes.string.isRequired,
  renderMenu: PropTypes.bool,
  renderBackButton: PropTypes.bool,
  renderCalendarSelector: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
  rightIconPress: PropTypes.func,
  secondaryIconPress: PropTypes.func,
  goBack: PropTypes.func,
  style: PropTypes.any,
  children: PropTypes.any,
  rightIcon: PropTypes.string,
  secondaryIcon: PropTypes.string,
};

const AppBar = React.memo(function AppBar({
  navigation,
  goBack,
  title,
  rightIcon,
  rightIconPress,
  secondaryIcon,
  secondaryIconPress,
  style,
  children,
}) {
  const buttonCallback = useCallback(() => {
    if (goBack) {
      goBack();
    } else {
      navigation?.goBack();
    }
  }, [goBack, navigation]);

  return (
    <View style={[styles.container, theme.appbarHeight, theme.shadow, style]}>
      <View style={theme.rowCenterSpaced}>
        <View style={styles.titleWrapper}>
          <IconButton name={'arrow-left'} onPress={buttonCallback} />
          <Text style={[theme.headlineWhite, theme.fontWeight600]}>
            {title}
          </Text>
        </View>
        <View style={styles.titleWrapper}>
          {secondaryIcon && (
            <IconButton name={secondaryIcon} onPress={secondaryIconPress} />
          )}
          {rightIcon && (
            <IconButton name={rightIcon} onPress={rightIconPress} />
          )}
        </View>
      </View>
      {children}
    </View>
  );
});

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: statusBarHeight,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

AppBar.propTypes = propTypes;

export {AppBar};
