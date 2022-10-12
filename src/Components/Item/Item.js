import React from 'react'

export default function Item ({individualExcelData}) {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Name}</th>
            <th>{individualExcelData.Birthday}</th>
        </>
    )
}