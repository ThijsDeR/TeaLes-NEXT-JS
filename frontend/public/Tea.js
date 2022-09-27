import { useEffect, useState } from "react"

export function Tea({teaData}) {
    console.log(teaData)
    return (
        <div style={{margin: 100}}>
            {Object.keys(teaData).map((key) => (
                <li key={key}>{key}: {teaData[key]}</li>
            ))}
        </div>
    )
}