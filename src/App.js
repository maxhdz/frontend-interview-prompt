import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrawerMenu from "./components/DrawerMenu";
import DashboardMain from "./components/DashboardMain";

function App() {
  return (
    <div className="App">
      <DrawerMenu >
        <DashboardMain />
      </DrawerMenu>
    </div>
  );
}

export default App;
