import {
	createStore,
	getDefaultMiddleware,
	applyMiddleware,
} from '@reduxjs/toolkit'
import { compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createReducer from './root-reducer.js'
import rootSaga from './root-saga.js'

export default function configureStore(initialState = {}, history) {
	let composeEnhancers = compose
	const reduxSagaMonitorOptions = {}

	if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
		if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
			composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	}
	const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

	const middlewares = [
		...getDefaultMiddleware({ thunk: false }),
		sagaMiddleware,
		routerMiddleware(history),
	]
	const enhancers = [applyMiddleware(...middlewares)]

	const store = createStore(
		createReducer(),
		initialState,
		composeEnhancers(...enhancers)
	)

	sagaMiddleware.run(rootSaga)

	store.runSaga = sagaMiddleware.run
	store.injectedReducers = {}
	store.injectedSagas = {}

	return store
}
