import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrawerMenu from "./components/DrawerMenu";
import DashboardMain from "./components/DashboardMain";
import AltPage from "./components/AltPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DrawerMenu >
          <Switch>
            <Route exact path="/" component={DashboardMain} />
            <Route path="/docs" component={AltPage} />
          </Switch>
        </DrawerMenu>
      </BrowserRouter>
    </div>
  );
}

export default App;
