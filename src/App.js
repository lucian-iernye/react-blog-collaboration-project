import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/AboutPage";
import ArticlesListPage from "./containers/ArticlesListPage";
import ArticlePage from "./containers/ArticlePage/ArticlePage";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              {/* props in route - url parameters with react-router */}
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
