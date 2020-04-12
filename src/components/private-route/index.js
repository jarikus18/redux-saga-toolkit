import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from 'utils/auth'

export default ({ component: Component, children, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuth() ? (
				children ? (
					children
				) : (
					<Component {...props} />
				)
			) : (
				<Redirect
					to={{
						pathname: `/auth/login`,
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
)
