import React, { useState } from 'react';
import Navbar from '@/Components/navbar';
import Newsfeed from '@/Components/newsfeed';
import styles from "@/styles/Navbar.module.css"
export default function Index({ allUsers }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Navbar />
      <Newsfeed   allUsers={allUsers} />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    const apiRes = await fetch('https://api.unsplash.com/photos/?client_id=XU9cZEBmAX1tTiRkymikGIQ4ny6zfOHwn_qgXHX_8aE', {
      headers: {
        'Cache-Control': 'no-cache, no-store, max-age=60, must-revalidate',
      },
    });
    const allUsers = await apiRes.json();
    return {
      props: { allUsers },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { allUsers: [] }, // Return an empty array if there was an error
    };
  }
}
