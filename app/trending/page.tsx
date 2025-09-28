'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';

export default function TrendingPage() {
  const { videos } = useVideo();

  // Sort videos by views to simulate trending
  const trendingVideos = [...videos].sort((a, b) => b.views - a.views);

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Trending Videos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
