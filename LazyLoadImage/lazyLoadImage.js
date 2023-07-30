import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css"
// import styles from "@/styles/Feed.module.css"

export default function Img({cn, src}) {
  return (
    <LazyLoadImage className={cn} effect='blur' src={src} />

    
  )
}
