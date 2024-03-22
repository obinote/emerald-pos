import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ConfigType} from 'types/ConfigType';

export const initialState: ConfigType = {
  appColor: 'emerald',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setAppColor: (state, {payload}: PayloadAction<string>) => {
      return {
        ...state,
        appColor: payload,
      };
    },
  },
});

export const {setAppColor} = configSlice.actions;
export default configSlice;
