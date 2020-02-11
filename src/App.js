import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Navbar from './components/Navbar'
import Bolo from './components/Bolo'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bolo />
    </div>
  );
}

export default App;
