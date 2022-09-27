import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Tea } from '../public/Tea'
import { useEffect, useState } from 'react'

export default function Home() {
  const [teaData, setTeaData] = useState([])
  const [teaID, setTeaID] = useState(1)
  
  const teaIDHandler = (ID) => {
    setTeaID(ID < 1 ? 1 : ID)
  }
  useEffect(() => {
    fetch("http://localhost:5000/teaData/" + Math.abs(teaID))
    .then(response => response.json())
    .then(data => setTeaData(data))
  }, [teaID])

  console.log(teaData)

  return (
    <div>
      {
        teaData.data ? <Tea teaData={teaData.data}/> : 'Nothing Found'
      }

      <div>
        <h2>ID: {teaID}</h2>
        <button onClick={() => teaIDHandler(teaID - 1)}>previous</button>
        <button onClick={() => teaIDHandler(teaID + 1)}>next</button>
      </div>
    </div>
  )
}
