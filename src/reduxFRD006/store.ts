import { ITodoItemState } from './state'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { rootProducer } from './reducers'
import { todoItemProducer } from '../reduxFRD005/reducers'
import { authReducer } from './auth/reducers'
import userSlice from '../reduxFRD005/sliceMethod/slice'

const store = configureStore({
    // reducer: rootProducer,
    reducer: {
        rootx: rootProducer,
        toDoItemProducer005: todoItemProducer,
        authx: authReducer,
        userslicex: userSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger)
    //recuer must need middleware?
})

// to get updated reducers (states) => useDispatch ()
export { store }