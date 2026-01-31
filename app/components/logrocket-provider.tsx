'use client';

import { useEffect } from 'react';
import LogRocket from 'logrocket';

export default function LogRocketProvider() {
  useEffect(() => {
    // Only initialize in the browser
    if (typeof window !== 'undefined') {
      // Replace 'szpcc3/portfolio' with your actual LogRocket project ID
      LogRocket.init('szpcc3/portfolio');

      // Optional: Identify users
      // LogRocket.identify('USER_ID', {
      //   name: 'User Name',
      //   email: 'user@example.com',
      // });
    }
  }, []);

  return null;
}
