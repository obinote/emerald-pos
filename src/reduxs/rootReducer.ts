import {persistReducer, createTransform} from 'redux-persist';
import Flatted from 'flatted';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import configSlice from './features/configSlice';

export const transformCircular = createTransform(
  inboundState => Flatted.stringify(inboundState),
  outboundState => Flatted.parse(outboundState),
);

const usersPersistConfig = {
  key: 'users',
  storage: AsyncStorage,
  transforms: [transformCircular],
};
const configPersistConfig = {
  key: 'config',
  storage: AsyncStorage,
  transforms: [transformCircular],
};

const persistedReducer = combineReducers({
  users: persistReducer(usersPersistConfig, userSlice.reducer),
  config: persistReducer(configPersistConfig, configSlice.reducer),
});

export type RootState = ReturnType<typeof persistedReducer>;
export default persistedReducer;
