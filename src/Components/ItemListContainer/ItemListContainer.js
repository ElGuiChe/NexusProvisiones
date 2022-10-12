import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from "xlsx";
import * as XLSX from 'xlsx'
import ItemList from "../ItemList/ItemList"

export default function SheetJSReactHTML() {

const [provisiones,setProvisiones] = useState([]);

   // handle File
   async function handleFile (e) {
    e.preventDefault();
     let selectedFile = await (e.target.files[0]).arrayBuffer(); // Toma el archivo desde el equipo del usuario
     const wb = read (selectedFile); // Analiza el buffer (arrayBuffer es una promesa)
     const ws = wb.Sheets[wb.SheetNames[0]]; // Toma la primera hoja de cálculo
     const data = utils.sheet_to_json(ws) //Genera los objetos en JSON
     console.log (selectedFile)
     console.log (wb)
     console.log (ws)
     console.log(data);
     setProvisiones(data)
   }
 
   /* submit function
   const handleSubmit=(e)=>{
     e.preventDefault();
     if(excelFile!==null){
       const workbook = XLSX.read(excelFile,{type:'buffer'});
       const worksheetName = workbook.SheetNames[0];
       const worksheet=workbook.Sheets[worksheetName];
       const data = XLSX.utils.sheet_to_json(worksheet);
       setExcelData(data);
       console.log(data);
     }
     else{
       setExcelData(null);
     }
   }*/

  return(
    <div className="container">
      <div className='form'>

      <form className='form-group' autoComplete="off"
        onSubmit={""}>
          <label><h5>Selecciona tu plantilla Excel</h5></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {""&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{""}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Submit</button>
        </form>

<ItemList provisionesList = {provisiones}/>

      </div>
    </div>

  )



}