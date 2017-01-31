import {next_content, prev_content} from '../actions/contents'
import * as actionTypes from '../actions/magazine'

export const debug = store => next => action => {
  console.log( action.type )
  console.log( store.getState() )
  return next(action)

}

export const change = store => next => action => {
  switch(action.type){
    case actionTypes.TOUCH_END:
      ( store.getState().magazineApp.change_x < 0)
        ? store.dispatch(prev_content())
        : store.dispatch(next_content())
      break;
  }
  return next(action)
}
