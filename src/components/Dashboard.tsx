import { useEffect, useState } from 'react';
import { Outlet } from 'react-router'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './login'
import { fetchTodoItems } from '../reduxFRD006/thunks'
import { useDispatch } from 'react-redux';

export function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [fetchedName, setFetchedName] = useState<string>("null")
    // [method 1] let { id } = useParams()
    let id = useParams<{ userIDX: string }>()
    const allStates = useSelector((state: any) => state)
    const items = allStates['userslicex']
    const fnFromState = items.fetchtodoitemname
    console.log('fnFromState = ', fnFromState)
    const [fn, setfetchtodoitemname] = useState<any>('null')
    const [fc, setfetchtodoitemcount] = useState<any>('null')
    let testvar = fn;



    function GetFetchedToDoItems() {
        // console.log('it0 =', it[0], 'it =', it)
        // let ithere: any = it[0].name
        return (<div>Fetched To Do Items: {fn}</div>)
    }

    async function fetchItemDispatch() {
        let msg = await dispatch(fetchTodoItems({ fn, fc })).unwrap()
        setfetchtodoitemname(msg[0].name)
        setfetchtodoitemcount(msg[0].count)
        testvar = msg[0].name;
        // console.log(testvar, '==testvar') //can be defined
        navigate('/login') //[test] can be nevigated
        // console.log('should print unles fulfilled = ', allStates['userslicex'].fetchtodoitemname) //however its stil empty [ask]
    }



    useEffect(() => {
        fetchItemDispatch() //run fetch api
    }, [])

    function GetFetchedData() {
        return (<h4>
            Fetched Name: {fetchedName}
        </h4>)
    }


    return (<div>
        <h1>Dash board - {id ? id.userIDX : 'null'}</h1><br />
        {/* <h1>id = {id}</h1> [method 1]*/}
        <nav>
            <button type="button" onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button type="button" onClick={() => navigate("/login")}>Login</button>
            <button type="button" onClick={() => navigate("/tasks")}>Tasks</button>
            <button type="button" onClick={() => navigate("/about")}>About</button>
        </nav>
        {GetFetchedToDoItems()}
        <GetFetchedData />
        <Outlet />
    </div>)
}