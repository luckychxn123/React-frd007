import { useState } from "react"
import Loginstyles from '../css/toDoList.module.css'
import { loginAction } from '../reduxFRD006/auth/action'
import { useDispatch } from 'react-redux'
import { login, UserType } from '../reduxFRD005/sliceMethod/slice'
import { useSelector } from 'react-redux'
import { sendfetchTodoItems } from '../reduxFRD006/thunks'

export default function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState<string>('lucky')
    const [password, setPassword] = useState<string>('123')

    const allState = useSelector((state: any) => state)
    console.log(allState['userslicex'].fetchtodoitemname, '== should update')
    // if logged in success, app.tsx shows <ToDoList/>. 
    //Since its shared between files, need reduxState => not useState
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)


    const onSubmit = (e: any) => {
        e.preventDefault()
        if (username == 'lucky' && password == '123') {
            dispatch(loginAction(true))
            if (username == 'lucky' && password == '123') {
                //login success
                dispatch(loginAction(true));
                dispatch(login({
                    firstname: 'lucky',
                    lastname: 'chan',
                    age: 22,
                    image: 'https://i.pinimg.com/originals/50/ee/28/50ee286c920f0075deac9f35aeeeab46.jpg'
                } as UserType)) //dispatch slice
            } else {
                // login fail
                dispatch(loginAction(false))
            }
        }
    }

    // [test] backend to fetch directly = can also be fetched directly
    async function testsinglefetchItem() {
        const res = await fetch('http://localhost:8080/testsinglefetch', {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                msg: 'secret from react FE'
            })
        })
        const data = await res.json()
        if (res.ok) {
            console.log(data, '== data from testing')
        }
    }

    //[test]
    async function testsendfetchItem() {
        let msg = await dispatch(sendfetchTodoItems({ msg: 'success test sent from FrontEnd' }))
        console.log(msg.payload)
    }

    return (<div className={Loginstyles.loginsection}>
        <form onSubmit={onSubmit}>
            <label> username:
                <input value={username} onChange={(e) => { setUsername(e.target.value) }}>
                </input>
            </label><br />
            <label> password:
                <input value={password} onChange={(e) => { setPassword(e.target.value) }}>
                </input>
            </label><br />
            <button type="submit">Submit</button>
        </form>
        <button onClick={() => { testsinglefetchItem() }}>Test single fetch</button>
        <button onClick={() => { testsendfetchItem() }}>Test send param fetch</button>
    </div>)


}