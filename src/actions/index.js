import * as types from '../constants/ActionTypes'

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  item
});

export const delItem = (index) => ({
  type: types.DEL_ITEM,
  index
});

export const toggleItem = (index) => ({
  type: types.TOGGLE_ITEM,
  index
});