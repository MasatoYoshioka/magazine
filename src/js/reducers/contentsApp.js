const initialState = {
  contents: {
  }
}

import * as actionTypes from '../actions/contents'

function contentsApp(state = initialState, action){
  switch(action.type){
    case actionTypes.INIT_CONTENT:
      break;
    case actionTypes.NEXT_CONTENT:
      break;
    case actionTypes.PREV_CONTENT:
      break;
  }

  return state
}

export default contentsApp
