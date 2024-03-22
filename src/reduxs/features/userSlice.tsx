import {createSlice} from '@reduxjs/toolkit';
import {UsersType} from 'types/UsersType';

export const initialState: UsersType = {
  name: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUser: state => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const {resetUser} = userSlice.actions;
export default userSlice;
