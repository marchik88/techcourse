import React from "react";
import Lesson1 from "./components/lessons/Lesson1";
import Lesson2 from "./components/lessons/Lesson2";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/style.sass";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lesson1">Lesson 1</Link>
            </li>
            <li>
              <Link to="/lesson2">Lesson 2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lesson2">
            <Lesson2 />
          </Route>
          <Route path="/lesson1">
            <Lesson1 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
