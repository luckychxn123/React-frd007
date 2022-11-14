import React from 'react';
import logo from './logo.svg';
import { Todolist } from './components/ToDoList'
import './App.css';
import { Provider } from 'react-redux' //combine 2 architectures
// import { store } from './reduxFRD005/store' //previous store for only IToDoItems
import Login from './components/login'
import { useSelector } from 'react-redux'
import { IAuthState } from './reduxFRD006/auth/state'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { Dashboard } from './components/Dashboard'
import { Error404 } from './components/Error404';
import { SliceLogin } from './components/SliceLoginInfo'
import { Container } from 'react-bootstrap';


function App() {
  const allState = useSelector((state: any) => state)
  const authState: IAuthState = allState.authx // exported for outer component to use 
  let isLoggedIn: boolean = authState.isLoggedIn

  // return false if didnt log in
  function postLogIn(isLoggedIn: boolean) {
    if (isLoggedIn) {
      return true
    }
    return false
  }

  // return false for usn&pw input if LoggedIn
  function preLogIn(isLoggedIn: boolean) {
    if (isLoggedIn) {
      return false
    }
    return true
  }


  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/Error404">Error404</Link><br />
          <Link to="/login">Login Page</Link><br />
          <Link to="dashboard/mainpage">Main Page including parent dashboard</Link>
        </nav>
        <Routes>
          <Route path="/dashboard/:userIDX" element={<Dashboard />}>
            <Route path="mainpage" element={<MainPage />}></Route>
          </Route>
          <Route path="/todolist" element={postLogIn(isLoggedIn) && <Todolist />}></Route>
          <Route path="/login" element={preLogIn(isLoggedIn) && <Login />}></Route>
          {/* now if add  /xpath after website, will hop to xElement */}
          <Route path="*" element={<Error404 />}></Route>
          {/* Can also write as above without path in Route => if ppl input path not exist, will redirect to Error404 */}
        </Routes>
      </BrowserRouter>
      <div>
        {postLogIn(isLoggedIn) && <SliceLogin item="hihi" />}
        {postLogIn(isLoggedIn) && <Todolist />}
      </div>
    </div>
  );
}


export default App;
