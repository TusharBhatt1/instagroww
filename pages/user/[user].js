import React from 'react';
import Navbar from '@/Components/navbar';
import { CiLocationOn } from 'react-icons/ci';
import UserPhotos from '@/Components/userPhotos';

export default function UserDetailsPage({ userDetails }) {
  return (
    <div>
      <Navbar />
      <div style={{padding:"10px"}}>
        <div style={{ display: 'flex', alignItems: 'center' , marginTop:"40px",padding:"20px"}}>
          <img
            style={{ borderRadius: '50%' }}
            src={userDetails.profile_image.large}
            alt={userDetails.username}
          />
          <span style={{ flex: '1', display: 'flex', justifyContent: 'space-around' }}>
            <h4>Following {userDetails.following_count}</h4>
            <h4>Followers {userDetails.followers_count}</h4>
          </span>
        </div>
        <h2>{userDetails.name}</h2>
        <div style={{ display: 'flex', gap: '2px', marginTop: '10px' }}>
          <CiLocationOn />
          <span>
            {userDetails.location ? <span> {userDetails.location} </span> : <span>World</span>}
          </span>
        </div>
        <p style={{ padding: '4px', borderBottom: '1px solid black' }}>{userDetails.bio}</p>
        <p style={{ fontFamily: 'cursive', fontSize: '12px' }}>
          Total pictures: {userDetails.total_photos}
        </p>
        <UserPhotos username={userDetails.username} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const user = query.user;

  try {
    const res = await fetch(
      `https://api.unsplash.com/users/${user}/?client_id=XU9cZEBmAX1tTiRkymikGIQ4ny6zfOHwn_qgXHX_8aE`,{
        headers: {
          'Cache-Control': 'public, max-age=300',
        },
      }
    );
    const userDetails = await res.json();
    return {
      props: { userDetails },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        userDetails: {}, // Return an empty object in case of an error
      },
    };
  }
}
