import * as types from '../constants/ActionTypes'

export const addItem = (item, timestamp) => ({
  type: types.ADD_ITEM,
  item,
  timestamp
});

export const delItem = (index) => ({
  type: types.DEL_ITEM,
  index
});

export const toggleItem = (index) => ({
  type: types.TOGGLE_ITEM,
  index
});