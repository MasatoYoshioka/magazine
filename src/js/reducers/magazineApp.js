import { PORTRAIT, LANDSCAPE } from "../config/magazine"
import * as Helper from "../lib/helper"
const initialState = {
  orientation: PORTRAIT
}

import * as actionTypes from '../actions/magazine'

function magazineApp(state = initialState, action){
  switch(action.type){
    case actionTypes.ORIENTATION:
      console.log(action);
      return Object.assign(
          {},
          state,
          {
            orientation: Helper.getOrientation(action.width, action.height)
          })
      break;
  }
  return state
}

export default magazineApp
