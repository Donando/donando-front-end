import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import store from 'redux/store'

import routes from 'routes/routes'

import 'styles/main.scss'

let appElement = document.getElementById('app');
let fullRoutes = routes();

render(
  <Provider store = {store}>
    <Router history = {browserHistory}>{fullRoutes}</Router>
  </Provider>
  , appElement);
