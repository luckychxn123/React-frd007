import { createReducer } from '@reduxjs/toolkit'
import { ITodoItemState } from './state'
import { increment, updateCount, decrement } from './action'

export const saveToLocalStorage = (state: ITodoItemState) => {
    localStorage.setItem('ITodoState', JSON.stringify(state))
}


export const getInitialStateFromLocalStorage = () => {
    // return localStorage.getItem('ITodoState') //get x name must match state.ts ITodoItemState
    let initialState: ITodoItemState =
    {
        // items: ['oat', 'almond', 'soy'],
        items: [
            {
                name: 'oat',
                count: 4,
                index: 1
            },
            {
                name: 'almond',
                count: 0,
                index: 2
            },
            {
                name: 'soy',
                count: 0,
                index: 3
            },
        ],
        length: undefined
    }
    let InitState: any = localStorage.getItem('ITodoState')
    if (InitState) {
        initialState = JSON.parse(InitState)
    }
    return initialState
}

// step 1 of command.md [xx.state.ts]
let initialState: ITodoItemState = getInitialStateFromLocalStorage()




function getIndexForInitialState(lstinitialState: any) {
    if (lstinitialState.items.length > 0) {
        return lstinitialState.items[lstinitialState.items.length - 1].index + 1
    } else {
        return 1
    }
}



const todoItemProducer = createReducer(initialState, (builder) => {
    builder.addCase(updateCount, (lstState, action) => {
        const payload: { count: number, index: number } = action.payload
        lstState.items[payload.index].count = lstState.items[payload.index].count + payload.count
    })
    builder.addCase(increment, (lstinitialState, action) => {
        //state = current item status, action = receive what param through action
        lstinitialState.items = [...lstinitialState.items, {
            name: action.payload, count: 0,
            index: getIndexForInitialState(lstinitialState)
        }]
        //action.payload = msg/param that's changing || action
        console.log(action.payload)
    })
    builder.addCase(decrement, (lstdelState, action) => {
        lstdelState.items = lstdelState.items.filter((item, index) => { return item.index != action.payload })
        console.log(action.payload)
    })

}
)


export { todoItemProducer }