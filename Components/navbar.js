import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import styles from "@/styles/Navbar.module.css"

export default function Navbar() {


  return (
    <div className={styles.main}>
        <h3>InstaGroww</h3>
        <Link href={"/creator"} >Creator</Link>
        <Link href={"/saved"}>Saved</Link>
        <button>Logout</button>
        
    </div>
  )
}
