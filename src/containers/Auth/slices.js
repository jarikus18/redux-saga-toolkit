import { createSlice } from '@reduxjs/toolkit'
import { isAuth } from 'utils/auth'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: isAuth(),
		isLoading: false,
		data: null,
	},
	reducers: {
		getDataStart: (state) => {
			state.isLoading = true
		},
		getDataSuccess: (state, { data }) => {
			state.isLoading = false
			state.data = data
		},
		getDataError: (state) => {
			state.isLoading = false
		},
		logout: (state) => (state.isAuth = false),
	},
})

export const {
	getDataStart,
	getDataSuccess,
	getDataError,
	logout,
} = authSlice.actions
export const { reducer } = authSlice
