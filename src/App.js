import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { Home, About, Tags, Recipes, SingleRecipes, Error } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
        <Route exact path="/recipes/:id" children={<SingleRecipes />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
