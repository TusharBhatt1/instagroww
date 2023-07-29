import React from 'react'
import { useSelector } from 'react-redux'

export default function creator() {

    const data = useSelector(state=>state.data)
    console.log("Data :", data)
  return (
    <div>c</div>
  )
}
