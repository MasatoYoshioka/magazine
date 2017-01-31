import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import Index from './container/Index'

import configureStore from "./store/configureStore"

const store = configureStore()

render(
    <Provider store={store}>
      <Index />
    </Provider>,
    document.getElementById("root")
)

