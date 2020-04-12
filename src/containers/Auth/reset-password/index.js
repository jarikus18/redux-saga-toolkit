import React, { useState } from 'react'
import { Button } from 'containers/Auth/login/node_modules/components/button'
import { Input } from 'containers/Auth/login/node_modules/components/input'
import styled from 'styled-components'
import { rem } from 'utils/common'
import { CardTitle, CardSubTitle, Fieldset } from '../styled'
import { Formik, Form } from 'containers/Auth/login/node_modules/formik'
import * as Yup from 'yup'
import { FormAlert } from 'containers/Auth/register/node_modules/components/alerts'
import { Preloader } from 'containers/Auth/register/node_modules/components/preloader'
import clsx from 'clsx'

const FieldsetCustom = styled(Fieldset)`
	margin-bottom: ${rem(88)};
`

const ResetPassword = ({ onSubmit, passwordResetMessage, isLoading }) => {
	const [mail, setMail] = useState({ email: null })
	const showMessage = clsx('', passwordResetMessage && 'd-none')
	const hideMessage = clsx('', !passwordResetMessage && 'd-none')

	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={Yup.object({
				email: Yup.string().email('Email invalid').required('Required'),
			})}
			onSubmit={(values) => {
				setMail(values)
				onSubmit(values || mail)
			}}
		>
			{({ isValid }) => (
				<Form className='w-100'>
					{isLoading && <Preloader />}
					<div className={hideMessage}>
						<FormAlert
							illustrationIcon='illustrationMail'
							title='Please go to your email inbox.'
							description='We have sent you an email with the confirmation link.'
							btnSubmitName='Re-send the email'
						/>
					</div>
					<div className={showMessage}>
						<CardTitle>Password recovery</CardTitle>
						<CardSubTitle>
							To verify it's your account, please write down your email.
						</CardSubTitle>
						<FieldsetCustom>
							<Input
								theme='primary'
								label='Email Address'
								placeholder='Type Here...'
								type='email'
								name='email'
								autoComplete='email'
							/>
						</FieldsetCustom>
						<div className='text-center'>
							<Button theme='primary' type='submit' disabled={!isValid} big>
								Send an email
							</Button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default ResetPassword
