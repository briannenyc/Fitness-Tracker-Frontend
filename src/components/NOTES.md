
<BrowserRouter>
    <Navbar></Navbar>
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