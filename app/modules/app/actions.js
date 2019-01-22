import { createAction } from 'redux-actions';
import types from './types';

export const addToCollectionStart = createAction(
  types.ADD_TO_COLLECTION_START,
);
export const addToCollectionOk = createAction(
  types.ADD_TO_COLLECTION_OK,
);
export const addToCollectionError = createAction(
  types.ADD_TO_COLLECTION_ERROR,
);
