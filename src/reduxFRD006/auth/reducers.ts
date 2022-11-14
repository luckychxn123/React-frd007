import { createReducer } from '@reduxjs/toolkit'
import { IAuthState } from './state'
import { loginAction } from './action'

const initialState: IAuthState = {
    isLoggedIn: false,
    userInfo: {
        name: 'lucky',
        age: 22
    }
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(loginAction, (lstState, action) => {
        console.log(action.payload, '=login success')
        lstState.isLoggedIn = action.payload
    })
})

export { authReducer }