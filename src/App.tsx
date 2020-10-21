import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Routes from "./components/Routes";
import {MenuAside} from "./components/MenuAside/MenuAside";


function App() {
  return (
      <HashRouter>
        <div className="App h-full">
          <MenuAside/>
          <Routes/>
        </div>
      </HashRouter>
  );
}

export default App;
