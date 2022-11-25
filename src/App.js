import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom"; //Falta agregar route cuando se definan las rutas
import ItemListContainerConta from "./Components/ContaProv/ItemListContainerConta/ItemListContainerConta"

import Nav from './Components/Nav';
import ItemListContainer from "./Components/ClientesProv/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path="/ProvisionesContabilidad" element={<ItemListContainerConta/>}/>
      </Routes>
    </div>
  );
}

export default App;
