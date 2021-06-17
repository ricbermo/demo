import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {MaterialIndicator} from 'react-native-indicators';
import Modal from 'react-native-modal';
import {theme, colors} from 'theme';
import {Text} from './Text';
import {ProgressBar} from './ProgressBar';
import {SizedBox} from './SizedBox';

const LoadingContainer = React.memo(function LoadingContainer({
  visible,
  children,
  message,
  progress = null,
}) {
  return (
    <View style={theme.flexOne}>
      <Modal
        isVisible={visible}
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating
        style={styles.view}>
        <View style={styles.content}>
          {!progress && <MaterialIndicator color={colors.primary} size={30} />}
          {message && (
            <Text style={[theme.subheadingDark, styles.message]}>
              {message}
            </Text>
          )}
          {progress !== null && (
            <>
              <SizedBox />
              <ProgressBar progress={progress} />
            </>
          )}
        </View>
      </Modal>
      {children}
    </View>
  );
});

const styles = ScaledSheet.create({
  view: {
    margin: 0,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    marginTop: '30@s',
    color: colors.white,
  },
});

export {LoadingContainer};
