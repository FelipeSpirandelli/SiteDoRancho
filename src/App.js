import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

import Navbar from "./components/navbar.js"
import Footer from "./components/footer.js"
import Menu from "./pages/menu.js"
import About from "./pages/about.js"

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
