import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Err404 = lazy(() => import("./Err404"));
const Home = lazy(() => import("../components/home/Home"));
const About = lazy(() => import("../components/about/About"));
const Members = lazy(() => import("../components/members/Members"));
const Member = lazy(() => import("../components/members/Member"));
const Contact = lazy(() => import("../components/contact/Contact"));
const Construction = lazy(() => import("./Construction"));

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/members" component={Members} />
      <Route path="/members/:memberSlug" component={Member} />
      <Route exact path="/alumni" component={Construction} />
      <Route exact path="/gallery" component={Construction} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Err404} status={404} />
    </Switch>
  );
}
