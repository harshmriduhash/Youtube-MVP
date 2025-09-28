'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import SearchResults from '@/components/SearchResults';

export default function SearchPage() {
  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <SearchResults />
        </main>
      </div>
    </div>
  );
}
