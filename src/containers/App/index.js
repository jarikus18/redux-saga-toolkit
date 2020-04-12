import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from 'components/private-route'
import events from 'utils/events'
import Auth from 'containers/Auth'
import { logout } from 'containers/Auth/slices'

const App = (props) => {
	const { isAuth } = props

	useEffect(() => {
		if (isAuth) {
			// getUser()
		}
	}, [isAuth])

	events.on('logout', () => {
		logout()
	})

	return (
		<Switch>
			<Route path='/auth' component={Auth} />
			<PrivateRoute path='/profile' component='Profile' />
			<Redirect to='/auth' />
		</Switch>
	)
}

export default App
