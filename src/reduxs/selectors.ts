import {createSelectorCreator} from 'reselect';
import {RootState} from './store';
import {lruMemoize} from '@reduxjs/toolkit';
import {deepEqual} from 'fast-equals';

const createAppSelector = createSelectorCreator(lruMemoize, deepEqual);

export const configSelector = createAppSelector(
  (state: RootState) => state.config,
  config => config,
);
