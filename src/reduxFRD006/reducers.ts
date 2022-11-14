import { createReducer } from '@reduxjs/toolkit'
import { ITodoItemState } from './state'
import { } from './action'


// step 1 of command.md [xx.state.ts]
let initialState = {}



const rootProducer = createReducer(initialState, (builder) => {
    // builder.addCase(funx, (lstState, action) => {
    //     // const payload: { count: number, index: number } = action.payload
    //     // lstState.items[payload.index].count = lstState.items[payload.index].count + payload.count
    // })
}
)


export { rootProducer }