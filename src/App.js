import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Switch>
            <Route path="/" exact>
              <SearchPage />
            </Route>
            <Route path="/detail/:movieId">
              <DetailPage />
            </Route>
            <Route path="/favorites">
              <FavoritePage />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
