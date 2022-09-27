import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [count, setCount] = useState(0)
  const [importantCalc, setImportantCalc] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    setImportantCalc(count * count)
  }, [count])

  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
        <h2>Important Calc: {importantCalc}</h2>
        <button onClick={() => {setCount(count + 1)}}>Moreee</button>
        <button onClick={() => {setCount(count - 1)}}>Lesssss</button>
      </div>

      <div>
        <h2>Name: {name}</h2>
        <input onChange={(ev) => setName(ev.currentTarget.value)}></input>
      </div>

    </div>
  )
}
