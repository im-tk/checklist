import { ADD_ITEM, DEL_ITEM, TOGGLE_ITEM } from '../constants/ActionTypes'

const ListReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state, 
        list: [
          ...state.list,  
          {
            text: action.item, 
            done: false
          }
        ] 
      };
      
    case DEL_ITEM:
      return {
        ...state, 
        list: [
          ...state.list.slice(0, action.index), 
          ...state.list.slice(action.index + 1)
        ] 
      };

    case TOGGLE_ITEM:
      return {
      ...state,
      list: [
        ...state.list.slice(0, action.index),
        {
          text: state.list[action.index].text,
          done: !state.list[action.index].done,
        },
        ...state.list.slice(action.index + 1)
      ]
    }

    default:
      return state;
  }
}
export default ListReducer;

