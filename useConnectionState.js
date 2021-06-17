import {useEffect} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {useRecoilState} from 'recoil';
import {connectionState} from './atoms';

export function useConnectionState() {
  const [connected, setConnectionState] = useRecoilState(connectionState);
  const {isConnected} = useNetInfo();

  useEffect(() => {
    if (connected === null || connected !== isConnected) {
      setConnectionState(isConnected);
    }
  }, [setConnectionState, connected, isConnected]);

  return connected;
}
