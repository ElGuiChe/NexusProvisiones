import React from 'react'
import ItemConta from '../ItemConta/ItemConta'

export default function ItemList ({provisionesList}) {
    return provisionesList.map((individualExcelData)=>(
        <>
            <tr key={individualExcelData.Id}>
                <ItemConta individualExcelData={individualExcelData}/>
            </tr>
        </>        
    ))
}