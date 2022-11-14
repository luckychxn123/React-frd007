import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodoItems, sendfetchTodoItems } from '../../reduxFRD006/thunks';

export interface UserType {
    firstname: string,
    lastname: string,
    age: number,
    image: string,
    isLoggedInSlice: boolean,
    fetchtodoitemname: string,
    fetchtodoitemcount: number
}

const userSlice = createSlice({
    name: "users",
    initialState: {
        firstname: '',
        lastname: '',
        age: 0,
        image: 'xyz',
        isLoggedInSlice: false,
        fetchtodoitemname: '',
        fetchtodoitemcount: 0
    } as UserType,
    reducers: {
        login(state: UserType, action: PayloadAction<any>) {
            state.isLoggedInSlice = true
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.age = action.payload.age
            state.image = action.payload.image
            state.isLoggedInSlice = action.payload.isLoggedInSlice
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodoItems.fulfilled, (state, action) => {
            //fetch API thunk action must be describe in add builder (extraReducers)
            state.fetchtodoitemname = action.payload[0].name
            state.fetchtodoitemcount = action.payload[0].count
            //action.payload is data in thunkAPI.fulfillWithValue(data)
        }),
            builder.addCase(fetchTodoItems.rejected, (state, action) => {
                console.log(action.payload)
            }),
            builder.addCase(sendfetchTodoItems.fulfilled, (state, action) => {
                console.log('do nothing')
            }),
            builder.addCase(sendfetchTodoItems.rejected, (state, action) => {
                console.log(action.payload)
            })
        builder.addCase(sendfetchTodoItems.pending, (state, action) => {
            console.log('loading - pending')
        })
    }
})
// can directly apply useDispatch
export const { login } = userSlice.actions
export default userSlice.reducer