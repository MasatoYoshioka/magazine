import { createStore, applyMiddleware } from 'redux'
import { debug, change } from '../middleware'

import reducer from '../reducers/'

const finalCreateStore = applyMiddleware(
    debug,
    change
)(createStore);

export default function configureStore(initialState){
  return finalCreateStore(reducer)
}
