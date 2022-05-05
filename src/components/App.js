import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Component404 from './404';
import Activities from './activities';
import HomePage from './home';
import MyRoutines from './myRoutines';
import Routines from './routines';


import Users from './users';

const App = () => {
    const [token,setToken]=useState(localStorage.getItem("token")||"");
    const [user,setUser]=useState(
    {
        id:Number(localStorage.getItem("id")),
        name:localStorage.getItem("username")
    }||null);



    return <BrowserRouter>
        <NavBar token={token}></NavBar>

        <Users setToken={setToken} setUser={setUser} user={user}/>
        
        <Switch>
            <Route exact path ="/">
                <HomePage user={user}></HomePage>
            </Route>
{/* 
            <Route exact path ="/routines/">
                <Routines token={token} user={user}></Routines>
            </Route>

            <Route exact path ="/myroutines/">
                <MyRoutines token={token} user={user}></MyRoutines>
            </Route>

            <Route exact path ="/activities/">
                <Activities token={token}></Activities>
            </Route>

            <Route path="/*">
                <Component404></Component404>
            </Route> */}
        </Switch >
    </BrowserRouter>
}


export default App 