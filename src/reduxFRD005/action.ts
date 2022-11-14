import { createAction } from '@reduxjs/toolkit'

const increment = createAction<string>('todoItems/increment')
//string will be passed


const updateCount = createAction<{ count: number, index: number }>('todoItems/count/update')

const decrement = createAction<number>('todoItems/decrement')

export { increment, updateCount, decrement }