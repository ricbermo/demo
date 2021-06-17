import React from 'react';
import {View, Image, Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme, colors} from 'theme';
import PropTypes from 'prop-types';
import {Text} from './Text';
import {Button} from './Button';

const EmptyState = React.memo(function EmptyState({
  icon,
  size = 100,
  title,
  subtitle,
  imagePath,
  buttonProps,
}) {
  return (
    <View style={styles.container}>
      <View style={[theme.shadow, styles.iconWrapper]}>
        {icon && <Icon color="#0088C0" size={size} name={icon} />}
        {imagePath && <Image source={imagePath} style={styles.imagePath} />}
      </View>
      <Text style={[theme.titleDark]}>{title}</Text>
      <View style={theme.sizedBox} />
      <Text style={[theme.subheadingDark, styles.subtitle]}>{subtitle}</Text>
      <View style={theme.sizedBox} />
      {buttonProps && (
        <View style={theme.stretch}>
          <Button {...buttonProps} primary />
        </View>
      )}
    </View>
  );
});

const styles = ScaledSheet.create({
  container: {
    width: '266@s',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    ...Platform.select({
      android: {
        flex: 1,
      },
      ios: {
        paddingTop: '40@s',
      },
    }),
  },
  iconWrapper: {
    width: '130@s',
    height: '130@s',
    backgroundColor: colors.white,
    borderRadius: '65@s',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20@s',
  },
  subtitle: {
    textAlign: 'center',
  },
  imagePath: {
    width: '81@s',
    height: '81@s',
  },
});

EmptyState.propTypes = {
  icon: PropTypes.string,
  path: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonProps: PropTypes.shape({
    title: PropTypes.string,
    onPress: PropTypes.func,
  }),
};

export {EmptyState};
