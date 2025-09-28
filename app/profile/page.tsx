'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import ProfilePage from '@/components/ProfilePage';

export default function Profile() {
  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <ProfilePage />
    </div>
  );
}
