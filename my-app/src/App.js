import css from './App.module.css';
import React from 'react';
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <a>My Photos</a>
        <a>My Illustrations</a>
        <a>My Paintings</a>
      </div>
    </div>
  );
}

export default App;