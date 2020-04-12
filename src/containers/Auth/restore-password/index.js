import React from 'react'
import { Button } from 'containers/Auth/login/node_modules/components/button'
import { Input } from 'containers/Auth/login/node_modules/components/input'
import styled from 'styled-components'
import { rem } from 'utils/common'
import { CardTitle, Fieldset } from '../styled'
import { Formik, Form } from 'containers/Auth/login/node_modules/formik'
import * as Yup from 'yup'
import queryString from 'query-string'
import { Preloader } from 'containers/Auth/register/node_modules/components/preloader'

import CardRestorePasswordConfirm from './card-restore-password-confirm'

const FieldsetCustom = styled(Fieldset)`
	margin-bottom: ${rem(88)};
`

const RestorePassword = ({
	onSubmit,
	passwordRestoreMessage,
	location,
	isLoading,
}) => {
	const query = queryString.parse(location.search)

	if (isLoading) return <Preloader />
	if (passwordRestoreMessage) return <CardRestorePasswordConfirm />

	return (
		<Formik
			initialValues={{
				confirmPassword: '',
				password: '',
			}}
			validationSchema={Yup.object({
				password: Yup.string()
					.required('Required')
					.min(8, 'min 8 symbol')
					.test('passwords-match', 'Passwords do not match', function (value) {
						return this.parent.confirmPassword === value
					}),
				confirmPassword: Yup.string()
					.required('Required')
					.min(8, 'min 8 symbol'),
			})}
			onSubmit={(values, { resetForm }) => {
				const payload = {
					email: query.email,
					password: values.password,
					token: query.token,
				}
				onSubmit(payload)
				resetForm()
			}}
		>
			<Form className='w-100'>
				<CardTitle>Password recovery</CardTitle>
				<FieldsetCustom>
					<Input
						theme='primary'
						label='New Password'
						placeholder='Type Here...'
						type='password'
						name='confirmPassword'
						autoComplete='new-password'
					/>
					<Input
						theme='primary'
						label='Repeat Password'
						placeholder='Type Here...'
						type='password'
						name='password'
						autoComplete='new-password'
					/>
				</FieldsetCustom>
				<div className='text-center'>
					<Button theme='primary' type='submit' big>
						Save
					</Button>
				</div>
			</Form>
		</Formik>
	)
}

export default RestorePassword
