import { PORTRAIT, LANDSCAPE } from "../config/magazine"
import * as Helper from "../lib/helper"
const initialState = {
  orientation: PORTRAIT,
  position: {
    touch: {}
  },
  move: {
    touch:{}
  },
  change_x:0,
  change_y:0
}

import * as actionTypes from '../actions/magazine'

function magazineApp(state = initialState, action){
  switch(action.type){
    case actionTypes.ORIENTATION:
      return Object.assign(
          {},
          state,
          {
            orientation: Helper.getOrientation(action.width, action.height)
          })
      break;
    case actionTypes.TOUCH:
      return Object.assign(
          {},
          state,
          {
            position: {
              touch: action.touch
            }
          })
      break;
    case actionTypes.TOUCH_MOVE:
      return Object.assign(
          {},
          state,
          {
            move: {
              touch: action.touch
            },
            change_x: state.position.touch.clientX - action.touch.clientX,
            change_y: state.position.touch.clientY - action.touch.clientY

          })
      break;
    case actionTypes.TOUCH_END:
      return Object.assign(
          {},
          state,
          {
            position:{
              touch: {}
            },
            move: {
              touch: {}
            },
            change_x:0,
            change_y:0
          })
  }
  return state
}

export default magazineApp
