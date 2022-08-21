import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, Tag } from "./components";
import { Home, About, Category, Recipes, SingleRecipes, Error } from "./pages";
import AOS from "aos";
<<<<<<< HEAD

=======
>>>>>>> a9537f634bb0103a5a079e62d766569047fc5da1

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 0,
      offset: 120,
      easing: "ease",
<<<<<<< HEAD
      once: true,
=======
      once: false,
>>>>>>> a9537f634bb0103a5a079e62d766569047fc5da1
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);
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
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
        <Route exact path="/tags/:slug">
          <Tag />
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
