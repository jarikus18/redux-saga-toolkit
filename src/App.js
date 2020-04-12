import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'utils/history'

import App from 'containers/App'
import configureStore from 'store/configureStore'

const initialState = {}
const store = configureStore(initialState, history)

export default () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	)
}
