/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {Animated, View, InteractionManager} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {colors, theme} from 'theme';

export class SwipeRow extends Component {
  static propTypes = {
    onDeletePress: PropTypes.func.isRequired,
  };

  renderRightAction = (icon, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      this.close();
      InteractionManager.runAfterInteractions(() => {
        const {onDeletePress, item} = this.props;
        if (onDeletePress) {
          onDeletePress(item);
        }
      });
    };

    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          style={[theme.flexOne, theme.center, {backgroundColor: color}]}
          onPress={pressHandler}>
          <Icon name={icon} size={25} color={colors.white} />
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = (progress, _dragAnimatedValue) => (
    <View style={styles.actionsWrapper}>
      {this.renderRightAction('delete-outline', colors.error, 64, progress)}
    </View>
  );

  updateRef = ref => {
    this.swipeableRow = ref;
  };
  close = () => {
    this.swipeableRow?.close();
  };
  render() {
    const {children, enabled} = this.props;

    if (enabled) {
      return (
        <Swipeable
          ref={this.updateRef}
          friction={2}
          enableTrackpadTwoFingerGesture
          rightThreshold={40}
          renderRightActions={this.renderRightActions}>
          {children}
        </Swipeable>
      );
    }
    return children;
  }
}

const styles = ScaledSheet.create({
  actionsWrapper: {
    width: '70@s',
    flexDirection: 'row',
  },
});
