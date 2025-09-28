'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';
import { ThumbsUp, Heart } from 'lucide-react';

export default function LikedPage() {
  const { videos, user } = useVideo();

  // Get liked videos
  const likedVideos = videos.filter(video => user.likedVideos.includes(video.id));

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <ThumbsUp size={32} className="text-youtube-red" />
            <h1 className="text-2xl font-bold text-white">Liked Videos</h1>
          </div>

          {likedVideos.length > 0 ? (
            <div>
              <div className="mb-6">
                <p className="text-gray-400">
                  {likedVideos.length} video{likedVideos.length !== 1 ? 's' : ''} you liked
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {likedVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="relative mb-6">
                <ThumbsUp size={64} className="mx-auto text-gray-400" />
                <Heart size={24} className="absolute -top-2 -right-2 text-youtube-red" />
              </div>
              <h3 className="text-lg text-gray-400 mb-2">No liked videos yet</h3>
              <p className="text-gray-500 mb-4">Videos you like will be saved here</p>
              <p className="text-sm text-gray-600">
                Start exploring videos and like the ones you enjoy!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
