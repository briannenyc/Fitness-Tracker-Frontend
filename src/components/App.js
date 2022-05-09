
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Routines from "./routines";
import MyRoutines from "./myRoutines";
import Activities from "./activities";
import Login from "./Login";
import MyActivities from "./MyActivities";
import User from "./users";
import Register from "./Register";


const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("UserToken"));
  }, []);

  const logOut = () => {
    localStorage.removeItem("UserToken");
    setLoggedIn(false);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <div id="header">
          <h1 className="header">Fitness Tracker</h1>
          <div id="buttonRoutesBox">
            {!loggedIn ? (
              <>
                <button className="button">
                  <Link id="link" to="/login">
                    Login Here
                  </Link>
                </button>
                <button className="button">
                  <Link id="link" to="/signUp">
                    Sign-up Here 
                  </Link>
                </button>
                <button className="button">
                  <Link id="link" to="/routines">
                    Routines
                  </Link>
                </button>
                <button className="button">
                  <Link id="link" to="/activities">
                    Activities
                  </Link>
                </button>
              </>
            ) : (
              <>
                <button className="button">
                  {" "}
                  <Link id="link" to="/user">
                    User
                  </Link>
                </button>
                <button className="button">
                  <Link id="link" to="/myRoutines">
                    My Routines
                  </Link>
                </button>
                <button className="button">
                  <Link id="link" to="/myActivities">
                    My Activities
                  </Link>
                </button>
                <button className="button">
                  <Link id="link" to="/routines">
                    Routines
                  </Link>
                </button>
                <button className="button">
                  <Link id="link" to="/activities">
                    Activities
                  </Link>
                </button>
              </>
            )}{" "}
          </div>
        </div>

        <Route path="/login">
          <Login
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>

        <Route path="/signUp">
          <Register
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>

        <Route path="/user">
          <User
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            username={username}
            setUsername={setUsername}
          />
        </Route>

        <Route path="/routines">
          <Routines
            routines={routines}
            setRoutines={setRoutines}
            username={username}
          />
        </Route>
        <Route path="/myRoutines">
          <MyRoutines
            routines={routines}
            setRoutines={setRoutines}
            loggedIn={loggedIn}
          />
        </Route>
        <Route path="/activities">
          <Activities activities={activities} setActivities={setActivities} />
        </Route>
        <Route path="/myActivities">
          <MyActivities activities={activities} setActivities={setActivities} />
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default App;