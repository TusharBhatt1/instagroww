import React, { useEffect, useState } from 'react'
import styles from "@/styles/Feed.module.css"
import {BsCheck2Circle} from "react-icons/bs"
import Link from 'next/link'

export default function index() {

let [text, setText] = useState("Proceed")



const handleClick=()=>{
  setText("Proceeding")

  setTimeout(()=>{
    setText("Proceed")
  },3000)
}

  return (
  
    <div className={styles.welcomePopup}>
      <div className={styles.popupContent}>
      <h4>Insta<span className={styles.gro}>Gro</span>
      <span className={styles.ww}>ww   </span> by Tushar Bhatt</h4>
       
       <br></br>
        <p>NextJS  <BsCheck2Circle/></p>
        <p>Server Side Rendering  <BsCheck2Circle/></p>
        <p>Caching <BsCheck2Circle/></p>
        <p>Redux + Redux Toolkit <BsCheck2Circle/></p>
        <p>Dynamic Route <BsCheck2Circle/></p>
        <p>Responsive Design <BsCheck2Circle/></p>
        <p>Local Storage <BsCheck2Circle/></p>
        <p>Lazy Load Image and much more <BsCheck2Circle/></p>
        <br></br>
        <Link href={"/home"}><button onClick={handleClick}>{text}</button></Link>
      </div>
    </div>
   
    
  )
}
