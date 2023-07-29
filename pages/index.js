import React from 'react'
import Navbar from '@/Components/navbar'
import Newsfeed from '@/Components/newsfeed'

export default function index() {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
    <Navbar/>
    <Newsfeed/>
    </div>
  )
}
