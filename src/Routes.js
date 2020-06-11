import React from "react";
import User from "./components/User";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Services from "./pages/services/Services";
import Gallary from "./pages/gallary/Gallary";
import Appoinment from "./pages/appoinment/Appoimmnet";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import OurTeam from "./pages/ourTeam/OurTeam";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/user" component={User} />
        <Route exact path="/" component={App} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/gallary" component={Gallary} />
        <Route exact path="/appoinmnet" component={Appoinment} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ourteam" component={OurTeam} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
// defiend all routers here applicatoin start from this file
