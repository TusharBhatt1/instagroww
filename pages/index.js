import React from 'react'
import Navbar from '@/Components/navbar'
import Newsfeed from '@/Components/newsfeed'
import styles from "@/styles/About.module.css"

export default function index() {
  return (
    <div>
    <Navbar/>
    <Newsfeed/>
    </div>
  )
}
