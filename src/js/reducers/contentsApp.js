const initialState = {
  contents: [
    "a",
    "b",
    "c",
    "d",
    "e"
  ]
}

import * as actionTypes from '../actions/contents'

function contentsApp(state = initialState, action){
  switch(action.type){
    case actionTypes.INIT_CONTENT:
      return state
      break;
    case actionTypes.NEXT_CONTENT:
      return Object.assign(
          {},
          state,
          {
          }
          )
      break;
    case actionTypes.PREV_CONTENT:
      break;
  }

  return state
}

export default contentsApp
