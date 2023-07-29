import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import Link from 'next/link';
import styles from '@/styles/Feed.module.css';
import UserDetailsPage from '@/pages/user/[user]';

export default function Newsfeed() {

  //States
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState({});

  //Data Fetching
  const fetchData = async () => {
    try{
    const res = await fetch('https://api.unsplash.com/photos/?client_id=XU9cZEBmAX1tTiRkymikGIQ4ny6zfOHwn_qgXHX_8aE');
    const finalRes = await res.json();
    setAllUsers(finalRes);
    setLoading(false)
    }
    catch(err)
    {
      console.log(err)
    }
  };

 
  console.log(allUsers)

  // Useffect

  useEffect(() => {
    if (allUsers.length === 0) {
      fetchData();
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== 'undefined') {
      const likesFromStorage = localStorage.getItem('likeCollection');
      setLikes(likesFromStorage ? JSON.parse(likesFromStorage) : {});
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


  return (
    <div className={styles.mainContainer}>
      {allUsers.map((user) => (
        <div className={styles.post} key={user.id}>

        <Link style={{textDecoration:"none" , color:"black"}} href={`/user/${user.user.username}`}>
         <div style={{display:"flex" , alignItems:"center",gap:"5px"}}>
         <img style={{borderRadius:"50%"}} src={user.user.profile_image.small}/>
         <p style={{fontWeight:"bold",}}>{user.user.name}</p>
     
         </div>
         </Link>
         
          <p style={{color:"grey", marginBottom:"10px", fontSize:"0.8rem"}}>On {(user.created_at).substr(0,10)}</p>
          <p>{user.description}</p>

          {loading ? (
            <Blurhash hash={user.blur_hash} height={350} width={350} punch={1} />
          ) : (
            <img  className={styles.postimage}  src={user.urls.small} alt={user.alt_description} />
          )}

   
            <span style={{ cursor: 'pointer' }} onClick={() => handleLikeToggle(user.id)}>
            <div className='flex'>
              {likes[user.id] ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}
              {likes[user.id] ? user.likes + 1 : user.likes}
              </div>
            </span>
        </div>
      ))}
    </div>
  );
}
