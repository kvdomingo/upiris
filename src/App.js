import React, { Component, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Loading from "./shared/Loading";
import Routes from "./shared/Routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </main>
        <Footer />
      </Router>
    );
  }
}
