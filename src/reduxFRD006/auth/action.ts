import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { createAction } from '@reduxjs/toolkit'

const loginAction = createAction<boolean>('auth/checking')

export { loginAction }