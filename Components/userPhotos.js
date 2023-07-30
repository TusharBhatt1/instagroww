import React, { useEffect, useState } from 'react'
import Img from '@/LazyLoadImage/lazyLoadImage'

export default function UserPhotos({username}) {


    let [photos , setPhotos] = useState([])
    let [gridView , setGridView] = useState(true)

 

    useEffect(()=>{
    
     fetch(`https://api.unsplash.com/users/${username}/photos/?client_id=XU9cZEBmAX1tTiRkymikGIQ4ny6zfOHwn_qgXHX_8aE`)
     .then(res=> res.json())
     .then(final=> setPhotos(final))

    },[username])

    console.log(photos)


const handleView=(e)=>{

    e.target.value==="grid" ? setGridView(true) : setGridView(false)
   
}
console.log(gridView)


  return (

    <div>
     <form className='flex-class' style={{marginBottom:"20px"}}>
      Grid
      <input
        type='radio'
        checked={gridView}
        onChange={handleView}
        name='viewType'
        value='grid'
      />
      List
      <input
        type='radio'
        checked={!gridView}
        onChange={handleView}
        name='viewType'
        value='column'
      />
    </form>

    <div className={`${gridView ? "gridView" :"listView"}`} >
        {photos && photos.map((photo)=>(
            <div key={photo.id} className='flex-class' style={{flexDirection:"column", textAlign:"center",borderBottom:"1px solid black",padding:"4px",borderRadius:"10px"}}>
            <p style={{fontSize:"12px"}}>{photo.alt_description}</p>
            <Img cn="image" src={photo.urls.small}/>
            </div>
        ))}
    </div>
    </div>
  )
}

