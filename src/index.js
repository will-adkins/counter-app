import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'
import Component from './component.js'

const state = { count: 42 }

ReactDOM.render(
  <Component initialState={state}>{App}</Component>,
  document.getElementById('app')
)
