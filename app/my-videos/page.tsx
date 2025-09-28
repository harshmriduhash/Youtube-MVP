'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';
import { PlaySquare, Upload, Eye, ThumbsUp, MoreVertical, Edit, Trash2 } from 'lucide-react';

export default function MyVideosPage() {
  const { user } = useVideo();
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'likes'>('date');

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const sortedVideos = [...user.videos].sort((a, b) => {
    switch (sortBy) {
      case 'views':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      default:
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
    }
  });

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Your Videos</h1>
            <button className="flex items-center space-x-2 bg-youtube-red hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Upload size={20} />
              <span>Upload Video</span>
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-youtube-gray p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <PlaySquare className="text-youtube-red" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Total Videos</p>
                  <p className="text-xl font-semibold text-white">{user.videos.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-youtube-gray p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="text-youtube-red" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Total Views</p>
                  <p className="text-xl font-semibold text-white">
                    {formatNumber(user.videos.reduce((sum, video) => sum + video.views, 0))}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-youtube-gray p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <ThumbsUp className="text-youtube-red" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Total Likes</p>
                  <p className="text-xl font-semibold text-white">
                    {formatNumber(user.videos.reduce((sum, video) => sum + video.likes, 0))}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-youtube-gray p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="text-youtube-red" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Subscribers</p>
                  <p className="text-xl font-semibold text-white">{formatNumber(user.subscribers)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'views' | 'likes')}
              className="bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none"
            >
              <option value="date">Upload Date</option>
              <option value="views">Views</option>
              <option value="likes">Likes</option>
            </select>
          </div>

          {/* Videos List */}
          {sortedVideos.length > 0 ? (
            <div className="space-y-4">
              {sortedVideos.map((video) => (
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
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-lg line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <div className="text-gray-400 text-sm space-y-1">
                      <p>{video.uploader.name}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{formatNumber(video.views)} views</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <ThumbsUp size={14} />
                          <span>{formatNumber(video.likes)} likes</span>
                        </span>
                        <span>{formatDate(video.uploadDate)}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-youtube-lightGray rounded-full transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 hover:bg-youtube-lightGray rounded-full transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <PlaySquare size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg text-gray-400 mb-2">No videos uploaded yet</h3>
              <p className="text-gray-500 mb-4">Upload your first video to get started</p>
              <button className="bg-youtube-red hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors">
                Upload Video
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
