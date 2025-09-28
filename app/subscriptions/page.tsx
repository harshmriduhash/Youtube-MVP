'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';

export default function SubscriptionsPage() {
  const { videos, user } = useVideo();

  // Filter videos from subscribed channels
  const subscribedVideos = videos.filter(video => 
    user.subscriptions.includes(video.uploader.id)
  );

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Subscriptions</h1>
          {subscribedVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subscribedVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl text-gray-400 mb-4">No subscriptions yet</h2>
              <p className="text-gray-500">Subscribe to channels to see their latest videos here</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
