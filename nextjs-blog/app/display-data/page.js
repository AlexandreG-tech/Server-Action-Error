'use client';

import { useEffect, useState } from 'react';
import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { fetchServerAction } from './action';

export default function DisplayData() {
  const fetchDataFromPagesApi = async () => {
    const res = await fetch('/api/action'); // WORKS
    const data = await res.json();
    console.log('Pages API : ', data);
  }

  const fetchDataFromAppApi = async () => {
    const res = await fetch('/api/thirdweb'); // FAILS
    const data = await res.json();
    console.log('App API : ', data);
  }

  const handleServerAction = async () =>  {
    console.log('Server Action : ', await fetchServerAction());
  };

  return (
    <div>
      <h1>Data from API:</h1>
      <button onClick={handleServerAction}>Fetch data with server action</button>
      <button onClick={fetchDataFromAppApi}>Fetch Data from App API route</button>
      <button onClick={fetchDataFromPagesApi}>Fetch Data from Pages API route</button>
    </div>
  );
}