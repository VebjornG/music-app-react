import React from "react"
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from "react-router-dom"
import { PlayerPage } from "./pages"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>I will be the sign in page</p>
        </Route>
        <Route path="/signup">
          <p>I will be the sign up page</p>
        </Route>
        <Route path="/playerpage">
          <PlayerPage />
        </Route>
        <Route path="/">
          <p>I will be the home page</p>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
