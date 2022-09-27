import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Tea } from '../public/Tea'
import { useEffect, useState } from 'react'

export default function Home() {
  const [teaDatas, setTeaDatas] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:5000/teaData")
    .then(response => response.json())
    .then(data => setTeaDatas(data))
  }, [])

  console.log(teaDatas)

  return (
    <div>
      {
        teaDatas.data ? teaDatas.data.map((teaData) => (
          <Tea teaData={teaData}/>
        )) : ''
      }
    </div>
  )
}
