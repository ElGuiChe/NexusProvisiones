import React from 'react'
import Item from '../Item/Item'

export default function ItemList ({provisionesList}) {
    return provisionesList.map((individualExcelData)=>(
        <>
            <tr key={individualExcelData.Id}>
                <Item individualExcelData={individualExcelData}/>
            </tr>
        </>        
    ))
}