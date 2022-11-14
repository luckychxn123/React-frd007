import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTodoItems: any = createAsyncThunk('/todoItem/fetchAll',
    async (params, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:8080/todoItems')
            const data = await res.json()
            //thunkAPI - have connection with reducer
            if (res.ok) {
                return thunkAPI.fulfillWithValue(data)
            }
            return thunkAPI.rejectWithValue('waiting')
        } catch (e) {
            // if cannot fetch / server didnt open, msg will = 'fail'
            return thunkAPI.rejectWithValue('fail')
        }

    })

const sendfetchTodoItems: any = createAsyncThunk('/todoItem/sendAll',
    async (params, thunkAPI) => {
        console.log(params, '==params')
        // backend receives: { params: { msg: 'success test sent from FrontEnd' } }
        try {
            const res = await fetch('http://localhost:8080/testsendfetch', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    params
                })
            })

            const data = await res.json()
            //thunkAPI - have connection with reducer
            if (res.ok) {
                return thunkAPI.fulfillWithValue(data)
            }
            return thunkAPI.rejectWithValue('waiting')
        } catch (e) {
            // if cannot fetch / server didnt open, msg will = 'fail'
            return thunkAPI.rejectWithValue('fail')
        }

    })

export { fetchTodoItems, sendfetchTodoItems }