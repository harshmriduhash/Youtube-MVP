'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';

export default function HomePage() {
  const searchParams = useSearchParams();
  const { videos, searchQuery, searchResults, searchVideos } = useVideo();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      searchVideos(query);
    }
  }, [query, searchVideos]);

  const displayVideos = searchQuery ? searchResults : videos;

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {searchQuery ? (
            <div className="space-y-4">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Search results for "{searchQuery}"
                </h2>
                <p className="text-gray-400">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div className="space-y-2">
                {searchResults.map((video) => (
                  <VideoCard key={video.id} video={video} layout="list" />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">Trending Videos</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
