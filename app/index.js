'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AppReducer from './js/reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Enum from './js/Enum'
require('./index.scss')

import TestContainer from './js/containers/TestContainer'

const store = createStore(
	AppReducer,
	applyMiddleware(
		thunk,
		logger,
	)
)

ReactDOM.render(
	(
		<Provider store={store}>
			<div id="main-container">
				<TestContainer />
			</div>
		</Provider>
	),
	document.getElementById('app')
)