import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'meetup'],
    },
    reducers
  );

  return persistedReducer;
};
