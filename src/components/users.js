import React from 'react';
import UserForm from './userForm';

const Users = (props) => 
{
    const setToken=props.setToken;
    const user=props.user;
    const setUser=props.setUser;

    

    return user ? 
    <>
        <h2>Logged in as {user.name}</h2>
        <button onClick={(event)=>
        {
            event.preventDefault();
            setToken("");
            setUser("");
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }

        }>Logout</button>
    </>:<UserForm setToken={setToken} setUser={setUser}></UserForm>
}

export default Users;