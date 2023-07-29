import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import Link from 'next/link';
import styles from '@/styles/Feed.module.css';
import Img from '@/LazyLoadImage/lazyLoadImage';
import {BsBookmark} from "react-icons/bs"
import {BsBookmarkFill} from "react-icons/bs"
import { useLocalStorage } from '@/Caching/useLocalStorage';


export default function Newsfeed({allUsers}) {

  //States
  let [loading, setLoading] = useState(false);
  let [likes, setLikes] = useState({});
  let [saved, setSaved] =  useState({})
 
  console.log(allUsers)

  // Useffect

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const likesFromStorage = localStorage.getItem('likeCollection');
      const savedPost = localStorage.getItem('savedPost');
      setLikes(likesFromStorage ? JSON.parse(likesFromStorage) : {});
      setSaved(savedPost ? JSON.parse(savedPost) : {});
    }
  }, []);


  //Function
  const handleLikeToggle = (id) => {
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes, [id]: !prevLikes[id] };
      if (typeof window !== 'undefined') {
        localStorage.setItem('likeCollection', JSON.stringify(updatedLikes));
      }
      return updatedLikes;
    });
  };

  if (!allUsers.length) {
    return <div>Loading...</div>;
  }


  const handleSave = (id)=>{
    
    setSaved((prev) => {
      const newSaved = { ...prev, [id]: !prev[id] };
      if (typeof window !== 'undefined') {
        localStorage.setItem('savedPost', JSON.stringify(newSaved));
      }
      return newSaved;
    });
  }

  return (
    <div className={styles.mainContainer}>
      {allUsers.map((user) => (
        <div className={styles.post} key={user.id}>

        <Link style={{textDecoration:"none" , color:"black"}} href={`/user/${user.user.username}`}>
         <div style={{display:"flex" , alignItems:"center",gap:"5px"}}>
         <img style={{borderRadius:"50%"}} src={user.user.profile_image.small}/>
         <p style={{fontWeight:"bold",}}>{user.user.name}</p>
         <p style={{color:"grey", marginBottom:"10px", fontSize:"0.8rem"}}>On {(user.created_at).substr(0,10)}</p>
         </div>
         </Link>
        
         { user.description ? <span style={{marginTop:"0"}}>{user.description}</span> : <span>It is only when they go wrong that machines remind you how powerful they are.</span> }

          {loading ? (
            <Blurhash hash={user.blur_hash} height={350} width={350} punch={1} />
          ) : (
            <img  className={styles.postimage}  src={user.urls.small} alt={user.alt_description} />
          )}

   
            
            <div style={{display:"flex", justifyContent:"space-between", alignItems:'center'}}>
            <span style={{ cursor: 'pointer' }} onClick={() => handleLikeToggle(user.id)}>
              {likes[user.id] ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}
              {likes[user.id] ? user.likes + 1 : user.likes}
            </span>
              <p onClick={()=>handleSave(user.id)} style={{cursor:"pointer"}} >{saved[user.id] ? <BsBookmarkFill size={30} /> : <BsBookmark size={30}/>}</p>
              
              </div>
           
        </div>
      ))}
    </div>
  );
}
