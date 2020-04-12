import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// import ProfileReducer from 'containers/Profile/reducer'
import history from 'utils/history'

export default function createReducer(injectedReducers = {}) {
	const appReducer = combineReducers({
		router: connectRouter(history),
		...injectedReducers,
	})

	const rootReducer = (state, action) => {
		if (action.type === 'auth/logout') {
			state = undefined
		}
		return appReducer(state, action)
	}

	return rootReducer
}
