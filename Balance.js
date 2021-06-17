import React from 'react';
import {Platform, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {theme} from 'theme';
import {useUser} from 'state/useUser';
import {Card} from './Card';
import {Text} from './Text';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import {getBalance} from 'helpers/general';

const BalanceLoading = () => (
  <SkeletonPlaceholder>
    <View style={styles.fakeBalance} />
  </SkeletonPlaceholder>
);

const Balance = React.memo(function Balance() {
  const {user, loading} = useUser();
  return (
    <Card style={styles.balance}>
      <Text style={[theme.subheadingDark2, theme.fontWeight600]}>
        Balance Due
      </Text>
      {loading ? (
        <BalanceLoading />
      ) : (
        <Text style={[theme.titleDark, theme.fontWeight600]}>
          {getBalance(user)}
        </Text>
      )}
    </Card>
  );
});

const styles = ScaledSheet.create({
  balance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '24@vs',
    height: '58@vs',
    alignItems: 'center',
    position: 'absolute',
    left: '16@vs',
    right: '16@vs',
    bottom: '-29@vs',
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.6,
      },
    }),
  },
  fakeBalance: {
    width: '150@vs',
    height: '15@vs',
  },
});

export {Balance};
