import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from "xlsx";
import * as XLSX from "xlsx";
import ItemList from "../ItemList/ItemList";
import FireBase from "../FireBase/FireBase"

//Acceso a Firestore
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqImFsEvxFNv7mBIT9jd4n_HuAIVB4R0",
  authDomain: "provisiones-nexus.firebaseapp.com",
  projectId: "provisiones-nexus",
  storageBucket: "provisiones-nexus.appspot.com",
  messagingSenderId: "217021230567",
  appId: "1:217021230567:web:bff026f1da90967460e142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Sirve para seleccionar la base de datos de FireStore
const db = getFirestore(app);
console.log(db)
//Fin Acceso a Firestore

export default function ItemListContainer() {
  const [provisiones, setProvisiones] = useState([]);
  
  // handle File
  async function handleFile(e) {
    e.preventDefault();
    let selectedFile = await e.target.files[0].arrayBuffer(); // Toma el archivo desde el equipo del usuario
    const wb = read(selectedFile); // Analiza el buffer (arrayBuffer es una promesa)
    const ws = wb.Sheets[wb.SheetNames[0]]; // Toma la primera hoja de cálculo
    const data = utils.sheet_to_json(ws); //Genera los objetos en JSON
    console.log(data);
    setProvisiones(data)
    ;
  }

  //Crea el objeto para subirlo a la DB
    async function createProvisiones (provision) { 
      const docRef = await addDoc(collection(db, "provisiones"), {
        articulo: provision.Artículo,
        country: "Japan"

      });
      console.log("Document written with ID: ", docRef.id);
   }

   
  function create2 () {
    console.log("Si pasa el boton")
   provisiones.forEach(provision => {
    console.log(provision)
    createProvisiones(provision)
    console.log(provision)
  })
  alert("Tus provisiones han sido cargadas");
  setProvisiones([])
}


   

  return (
    <div className="container">
      <div className="form">
        <form className="form-group" autoComplete="off" onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <label>
            <h5>Selecciona tu plantilla Excel</h5>
          </label>
          <br></br>
          <input
            type="file"
            className="form-control"
            onChange={handleFile}
            required
          ></input>
          {"" && (
            <div className="text-danger" style={{ marginTop: 5 + "px" }}>
              {""}
            </div>
          )}
          <button
            onClick={()=> create2()}
            type="submit"
            className="btn btn-success"
            style={{ marginTop: 5 + "px" }}
          >
            Submit
          </button>
        </form>

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col"> Artículo </th>
              <th scope="col"> Código_Artículo </th>
              <th scope="col"> Cuenta_Asociada </th>
              <th scope="col"> Centro_de_Costo </th>
              <th scope="col"> Descripción_del_Servicio </th>
              <th scope="col"> Proveedor </th>
              <th scope="col"> RUT_Proveedor </th>
              <th scope="col"> UF </th>
              <th scope="col"> USD </th>
              <th scope="col"> Monto_equivalente_CLP </th>
              <th scope="col"> Número_de_Contrato </th>
              <th scope="col"> Vigencia_del_Contrato </th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <ItemList provisionesList={provisiones} />
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  );
}
