'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';
import { Library, Clock, ThumbsUp } from 'lucide-react';

export default function LibraryPage() {
  const { videos, user } = useVideo();

  // Get user's videos and liked videos
  const userVideos = user.videos;
  const likedVideos = videos.filter(video => user.likedVideos.includes(video.id));

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Library</h1>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-youtube-gray p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Library className="text-youtube-red" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Your Videos</p>
                  <p className="text-xl font-semibold text-white">{userVideos.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-youtube-gray p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <ThumbsUp className="text-youtube-red" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Liked Videos</p>
                  <p className="text-xl font-semibold text-white">{likedVideos.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-youtube-gray p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="text-youtube-red" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Watch Later</p>
                  <p className="text-xl font-semibold text-white">0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Videos Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Your Videos</h2>
            {userVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {userVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-youtube-gray rounded-lg">
                <Library size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg text-gray-400 mb-2">No videos uploaded yet</h3>
                <p className="text-gray-500">Upload your first video to get started</p>
              </div>
            )}
          </div>

          {/* Liked Videos Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Liked Videos</h2>
            {likedVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {likedVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-youtube-gray rounded-lg">
                <ThumbsUp size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg text-gray-400 mb-2">No liked videos yet</h3>
                <p className="text-gray-500">Like some videos to see them here</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
