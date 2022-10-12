import logo from './logo.svg';
import './App.css';
import {Routes, } from "react-router-dom"; //Falta agregar route cuando se definan las rutas

import Nav from './Components/Nav';
import ItemListContainer from "../src/Components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer/>
      <Routes>
      
      </Routes>
    </div>
  );
}

export default App;
