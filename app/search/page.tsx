'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import SearchResults from '@/components/SearchResults';
import { useVideo } from '@/context/VideoContext';

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { searchVideos } = useVideo();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      searchVideos(query);
    }
  }, [query, searchVideos]);

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
