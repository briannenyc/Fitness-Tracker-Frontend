import React from "react";
import Login from "./Login";

const Users = (props) => {
  const setToken = props.setToken;
  const user = props.user;
  const setUser = props.setUser;

  return user ? (
    <>
      <h2>Logged in as {user.name}</h2>
      <button
        onClick={(event) => {
          event.preventDefault();
          setToken("");
          setUser("");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
    </>
  ) : (
    <Login setToken={setToken} setUser={setUser}></Login>
  );
};

export default Users;
