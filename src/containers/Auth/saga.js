import { takeLatest, put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import Api from 'utils/api'
import { setToken } from 'utils/auth'
import { getDataStart, getDataSuccess, getDataError } from './slices'

function* getDataWorker() {
	try {
		const data = yield call(
			Api.get,
			'https://jsonplaceholder.typicode.com/posts'
		)
		yield put({ ...getDataSuccess(), data })
	} catch (e) {
		yield put({ ...getDataError() })
	}
}

// function* login({ payload }) {
// 	const { email, password } = payload
// 	try {
// 		const body = {
// 			email,
// 			password,
// 			longterm: true,
// 		}
// 		const data = yield call(Api.post, '/api/users/login/email', body)
// 		setToken(data.token)
// 		yield put({ type: AUTH_LOGIN_SUCCESS })
// 		yield put(push('/profile'))
// 	} catch (e) {
// 		yield put({ type: AUTH_LOGIN_ERROR })
// 	}
// }

// function* registration({ payload }) {
// 	try {
// 		yield call(Api.post, '/api/users/register', payload)
// 		yield put({ type: AUTH_REGISTER_SUCCESS })
// 	} catch (e) {
// 		yield put({ type: AUTH_REGISTER_ERROR })
// 	}
// }

// function* resetPassword({ payload }) {
// 	const { email } = payload

// 	try {
// 		const body = {
// 			email,
// 			lang: 'en',
// 		}
// 		yield call(Api.post, '/api/users/password/reset', body)
// 		yield put({ type: AUTH_RESET_PASSWORD_SUCCESS })
// 	} catch (e) {
// 		yield put({ type: AUTH_RESET_PASSWORD_ERROR })
// 	}
// }

// function* restorePassword({ payload }) {
// 	try {
// 		yield call(Api.post, '/api/users/password/restore', payload)
// 		yield put({ type: AUTH_RESTORE_PASSWORD_SUCCESS })
// 	} catch (e) {
// 		yield put({ type: AUTH_RESTORE_PASSWORD_ERROR })
// 	}
// }

export default function* authSaga() {
	yield takeLatest(getDataStart, getDataWorker)
	// yield takeLatest(AUTH_LOGIN_REQUEST, login)
	// yield takeLatest(AUTH_REGISTER_REQUEST, registration)
	// yield takeLatest(AUTH_RESET_PASSWORD_REQUEST, resetPassword)
	// yield takeLatest(AUTH_RESTORE_PASSWORD_REQUEST, restorePassword)
}
