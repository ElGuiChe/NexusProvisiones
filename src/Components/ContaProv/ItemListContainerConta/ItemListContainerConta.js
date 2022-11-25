//import ItemListConta from "../ItemListConta/ItemListConta";
//import db from "../../FireBase/FireBase";
//import { getFirestore, collection, getDocs} from "firebase/firestore";
//import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";


//Acceso a Firestore
import { getFirestore, doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
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

export default function ItemListContainerConta() {




  
  //const [provisiones, setProvisiones] = useState([]);

  getData()



  async function getData () { 
    const querySnapshot = await getDocs(collection(db, "provisiones"));
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
  }


 
      

    /*getDocs(colRef).then(
      (snapshot) => {
        const provisionesArray = snapshot.docs.map((rawDoc) => {
          return {
            id: rawDoc.id,
            ...rawDoc.data(),
          };
        });
        setProvisiones(provisionesArray);
        console.log(provisiones)
      },
      (error) => {
        console.log("error al intentar llamar la base de datos", error);
      }
    );*/


  return (
    <div className="container">
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
              <th scope="col"> ID </th>
              <th scope="col"> Status </th>

            </tr>
          </thead>
          <tbody className="table-group-divider">
            {/*<ItemListConta provisionesList={"provisiones"} />*/}
          </tbody>
        </table>
      </div>
      
      {/*<label>
        <input type="checkbox" id="cbox1" value="first_checkbox" /> Este es mi
        primer checkbox
      </label>
      <br />
      <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
      <label for="cbox2">Este es mi segundo checkbox</label>
      <br />
      <input type="checkbox" id="cbox3" value="second_checkbox" />{" "}
      <label for="cbox2">Este es mi tercer checkbox</label>
  <br />*/}
    </div>
  );
}
