import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/Components/navbar';
import {CiLocationOn} from "react-icons/ci"
import UserPhotos from '@/Components/userPhotos';


export default function UserDetailsPage() {
  const router = useRouter();
  const { query } = router;

  console.log(query.user);
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserDetails = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/users/${query.user}/?client_id=XU9cZEBmAX1tTiRkymikGIQ4ny6zfOHwn_qgXHX_8aE`
      );
      const finalRes = await res.json();
      setUserDetails(finalRes);
      console.log(userDetails)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false); // Set loading to false on error as well
    }
  };

  useEffect(() => {
    if (query.user) {
      fetchUserDetails();
    }
  }, [query.user]); // Add query.user to the dependency array to re-fetch when it changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div>

      <div style={{display:"flex", alignItems:"center"}}>
      
        <img style={{borderRadius:"50%"}} src={userDetails.profile_image.large} alt={query.user} />
       <span style={{flex:"1",display:"flex", justifyContent:"space-around"}}>
        <h4>Following  {userDetails.following_count}</h4>
        <h4>Followers  {userDetails.followers_count}</h4>
        </span>
      </div>
        <h2>
          {userDetails.name}  
        </h2>
  
        <div style={{display:'flex', gap:"2px", marginTop:"10px"}}>
        <CiLocationOn/>
        <span>{userDetails.location ? <span> {userDetails.location} </span> : <span>World</span> }</span>
        </div>
        <p style={{padding:"4px", borderBottom:"1px solid black"}} >{userDetails.bio}</p>

        <p style={{fontFamily:"cursive", fontSize:"12px"}}>Total pictures: {userDetails.total_photos}</p>
        
        <UserPhotos username={query.user} />
     

        
      </div>
    </div>
  );
}
