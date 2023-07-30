import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Navbar.module.css"
import { useSelector } from 'react-redux'

export default function Navbar() {

let savedPostcount = useSelector(state=>state.data.length)
console.log(savedPostcount) 


  return (
    <div className={styles.navbar} >
    <div className={styles.navbarContent}>
        <h3><Link className='link' href={"/"}>Insta<span className={styles.gro}>Gro</span><span className={styles.ww}>ww</span></Link></h3>
        <Link className='link' href={"/creator"} >Creator</Link>
        <Link className='link' href={"/saved"}>{savedPostcount === 0 ? "Saved" : `Saved (${savedPostcount})`}</Link>
        </div> 
    </div>
  )
}
