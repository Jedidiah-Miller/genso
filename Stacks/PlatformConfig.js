import { Platform } from 'react-native';

export const config = Platform.select({
  web: { headerMode: 'screen' },
  ios: {
    headerMode: 'none'
  },
  android: {
    headerMode: 'none'
  },
  default: {},
});