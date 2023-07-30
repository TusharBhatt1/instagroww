import { removePost } from '@/Redux/saveSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Saved() {

  let savedPost = useSelector(state=>state.data)
  console.log(savedPost)

  let dispatch= useDispatch()
   
  return (
    <div>
      {
        savedPost.map(post=>(
          <div style={{display:"flex", justifyContent:"space-between"}}>

          <Link href={`/user/${post.user.username}`}>
           <p>{post.user.name}</p> 
           <img style={{height:"70px", width:"70px"}} src={post.urls.small}/>
           </Link>
           <button onClick={()=>dispatch(removePost(post.id))}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}
