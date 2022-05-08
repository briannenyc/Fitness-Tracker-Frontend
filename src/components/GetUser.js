import React, { useState, useEffect } from "react";
import { getUser } from "../api";

const User = (props) => {
  const { loggedIn, setLoggedIn, username, setUsername, user, setUser } = props;

  const logOut = () => {
    localStorage.removeItem("UserToken");
    setLoggedIn(false);
  };

  useEffect(async () => {
    const user = await getUser(username);
    setUser(user);
    setUsername(user.username);
    console.log(user);
  }, []);

  return (
    <div>
      {" "}
      {loggedIn ? (
        <>
          {" "}
          {
            <div className="me">
              <h2>Hello, {username}</h2>{" "}
              <p>
                Not you?
                <button className="LogOut" onClick={logOut}>
                  Log out
                </button>
              </p>
            </div>
          }{" "}
        </>
      ) : (
        <div>There is no user logged in! </div>
      )}{" "}
    </div>
  );
};

export default getUser;
