'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';
import { Clock, Play, Trash2 } from 'lucide-react';

export default function WatchLaterPage() {
  const { videos } = useVideo();

  // Mock watch later data - in a real app, this would come from user's watch later list
  const watchLaterVideos = videos.slice(2, 5).map((video, index) => ({
    ...video,
    addedAt: new Date(Date.now() - (index + 1) * 2 * 24 * 60 * 60 * 1000).toISOString()
  }));

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Added yesterday';
    if (diffDays < 7) return `Added ${diffDays} days ago`;
    if (diffDays < 30) return `Added ${Math.ceil(diffDays / 7)} weeks ago`;
    return `Added ${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Watch Later</h1>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Trash2 size={20} />
              <span>Clear all</span>
            </button>
          </div>

          {watchLaterVideos.length > 0 ? (
            <div className="space-y-4">
              {watchLaterVideos.map((video) => (
                <div key={video.id} className="flex space-x-4 p-4 hover:bg-youtube-gray rounded-lg transition-colors group">
                  <div className="relative flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all">
                        <Play size={24} />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-lg line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <div className="text-gray-400 text-sm space-y-1">
                      <p>{video.uploader.name}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{formatDate(video.addedAt)}</span>
                        </span>
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-youtube-lightGray rounded-full transition-colors">
                      <Play size={16} />
                    </button>
                    <button className="p-2 hover:bg-youtube-lightGray rounded-full transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Clock size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg text-gray-400 mb-2">No videos in Watch Later</h3>
              <p className="text-gray-500">Videos you save for later will appear here</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
