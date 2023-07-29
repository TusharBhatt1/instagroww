import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Navbar.module.css"

export default function Navbar() {


  return (
    <div className={styles.navbar} >
    <div className={styles.navbarContent}>
        <h3><Link className='link' href={"/"}>InstaGroww</Link></h3>
        <Link className='link' href={"/creator"} >Creator</Link>
        <Link className='link' href={"/saved"}>Saved</Link>
        <button>Logout</button>
        </div> 
    </div>
  )
}
