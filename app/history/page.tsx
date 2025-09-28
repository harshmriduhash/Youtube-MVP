'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';
import { History, Clock, Trash2 } from 'lucide-react';

export default function HistoryPage() {
  const { videos } = useVideo();

  // Mock history data - in a real app, this would come from user's watch history
  const historyVideos = videos.slice(0, 4).map((video, index) => ({
    ...video,
    watchedAt: new Date(Date.now() - (index + 1) * 24 * 60 * 60 * 1000).toISOString(),
    watchProgress: Math.floor(Math.random() * 100)
  }));

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Watch History</h1>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Trash2 size={20} />
              <span>Clear all history</span>
            </button>
          </div>

          {historyVideos.length > 0 ? (
            <div className="space-y-4">
              {historyVideos.map((video) => (
                <div key={video.id} className="flex space-x-4 p-4 hover:bg-youtube-gray rounded-lg transition-colors">
                  <div className="relative flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-60 rounded-full h-1">
                      <div 
                        className="bg-youtube-red h-full rounded-full" 
                        style={{ width: `${video.watchProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-lg line-clamp-2 mb-2">
                      {video.title}
                    </h3>
                    <div className="text-gray-400 text-sm space-y-1">
                      <p>{video.uploader.name}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>Watched {formatDate(video.watchedAt)}</span>
                        </span>
                        <span>{video.watchProgress}% watched</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <History size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg text-gray-400 mb-2">No watch history</h3>
              <p className="text-gray-500">Videos you watch will appear here</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
