import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Routines from "./routines";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    {
      id: Number(localStorage.getItem("id")),
      name: localStorage.getItem("username"),
    } || null
  );

//   const [isExampleShowing, setIsExampleShowing] = useState(false);

  return (
    <div>
      <Navbar />
      
    

      {/* <button
        onClick={() => {
          setIsExampleShowing(!isExampleShowing);
        }}
      >
        SHOW EXAMPLE
      </button> */}
    </div>
  );
};

export default App;
