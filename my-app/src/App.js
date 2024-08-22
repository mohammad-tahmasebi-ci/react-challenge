import css from './App.module.css';
import React from 'react';
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
