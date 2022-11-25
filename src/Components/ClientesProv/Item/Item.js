import React from 'react'

export default function Item ({individualExcelData}) {
    return (
        <>
            <td>{individualExcelData.Artículo}</td>
            <td>{individualExcelData.Código_Artículo}</td>
            <td>{individualExcelData.Centro_de_Costo}</td>
            <td>{individualExcelData.Cuenta_Asociada}</td>
            <td>{individualExcelData.Descripción_del_Servicio}</td>
            <td>{individualExcelData.Proveedor}</td>
            <td>{individualExcelData.RUT_Proveedor}</td>
            <td>{individualExcelData.UF}</td>
            <td>{individualExcelData.USD}</td>
            <td>{individualExcelData.Monto_equivalente_CLP}</td>
            <td>{individualExcelData.Número_de_Contrato}</td>
            <td>{individualExcelData.Vigencia_del_Contrato}</td>
        </>
    )
}