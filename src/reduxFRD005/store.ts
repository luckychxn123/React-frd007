import { ITodoItemState } from './state'
import { configureStore } from '@reduxjs/toolkit'
import { todoItemProducer } from './reducers'


const store = configureStore({
    reducer: todoItemProducer,
    devTools: process.env.NODE_ENV !== 'production'
})
// console.log(process.env.NODE_ENV, '==env')

export { store }