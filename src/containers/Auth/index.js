import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { compose } from 'redux'
// import { Helmet } from 'react-helmet'
// import { Route, Switch, Redirect } from 'react-router-dom'
// import PrivateRoute from 'components/router/private-route'
// import Login from './login'
// import Register from './register'
// import ResetPassword from './reset-password'
// import RestorePassword from './restore-password'
import injectSaga from 'utils/injectSaga'
import saga from './saga'
import injectReducer from 'utils/injectReducer'
import { getDataStart, reducer } from './slices'

const Auth = (props) => {
	const dispatch = useDispatch()

	const { isLoading, data } = useSelector((state) => {
		return {
			isLoading: state.auth.isLoading,
			data: state.auth.data,
		}
	}, shallowEqual)

	useEffect(() => {
		dispatch(getDataStart())
	}, [dispatch])

	return (
		<>
			{isLoading && 'Loading'}
			<div>Auth sample</div>
			{data && data.map((i) => i.title)}
		</>
	)
}

export default compose(
	injectReducer({ key: 'auth', reducer }),
	injectSaga({ key: 'auth', saga })
)(Auth)
