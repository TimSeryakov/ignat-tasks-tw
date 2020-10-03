import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {ToDoBoard} from "./components/ToDoBoard/ToDoBoard";
import {Chat} from "./components/Chat/Chat";
import {Header} from './components/Header/Header';
import { Hello } from './components/Hello/Hello';
import {CustomElementsDemo} from "./components/CustomElementsDemo/CustomElementsDemo";


function App() {
  return (
      <BrowserRouter>
        <div className="App h-full">
          <Header/>
          <Route path={"/todo"} component={ToDoBoard}/>
          <Route path={"/chat"} component={Chat}/>
          <Route path={"/hello"} component={Hello}/>
          <Route path={"/custom-elements-demo"} component={CustomElementsDemo}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
