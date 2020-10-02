import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {ToDoBoard} from "./components/ToDoBoard/ToDoBoard";
import {Chat} from "./components/Chat/Chat";
import {Header} from './components/Header/Header';
import { Hello } from './components/Hello/Hello';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path={"/todo"} component={ToDoBoard}/>
          <Route path={"/chat"} component={Chat}/>
          <Route path={"/hello"} component={Hello}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
