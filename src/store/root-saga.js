import React from 'react'
import { takeLatest, put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { remoteToken } from 'utils/auth'

// import Api from 'utils/api'
// import {
// 	GET_USER_REQUEST,
// 	GET_USER_SUCCESS,
// 	GET_USER_ERROR,
// } from 'containers/Profile/constants'

// function* logout() {
// 	remoteToken()
// 	yield localStorage.removeItem('_atk')
// 	yield put(push('/auth/login'))
// }

// function* getUser() {
// 	try {
// 		const data = yield call(Api.get, '/api/users/profile')
// 		if (!data.user.isActiveSubscription) yield put(push('/auth/payment'))
// 		yield put({ type: GET_USER_SUCCESS, data })
// 	} catch (e) {
// 		yield put({ type: GET_USER_ERROR })
// 	}
// }

export default function* rootSaga() {
	// yield takeLatest(AUTH_LOGOUT, logout)
	// yield takeLatest(GET_USER_REQUEST, getUser)
}
