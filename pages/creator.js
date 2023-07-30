import React from 'react'
import myself from "@/public/asset/my.webp"
import Image from 'next/image'
import Img from '@/LazyLoadImage/lazyLoadImage'
export default function creator() {

  return (
    <div className='flex-class' style={{height:"100vh",flexDirection:"column", textAlign:"center",gap:"20px"}} >
    <Image alt='Tushar' src={myself} style={{height:"100px",width:"100px", borderRadius:"50%"}}/>
    <h2>Tushar Bhatt <p style={{fontSize:"12px",color:"aqua"}}>Front End Engineer</p> </h2> 
   </div>
  )
}
