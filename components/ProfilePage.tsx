'use client';

import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { useVideo } from '@/context/VideoContext';
import { User, Video, ThumbsUp, Users, Calendar } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useVideo();
  const [activeTab, setActiveTab] = useState<'videos' | 'liked' | 'subscriptions'>('videos');

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const tabs = [
    { id: 'videos' as const, label: 'Videos', count: user.videos.length },
    { id: 'liked' as const, label: 'Liked', count: user.likedVideos.length },
    { id: 'subscriptions' as const, label: 'Subscriptions', count: user.subscriptions.length },
  ];

  return (
    <div className="bg-youtube-dark text-white min-h-screen">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-youtube-red to-red-600 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-1">
                  <Users size={20} />
                  <span>{formatNumber(user.subscribers)} subscribers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Video size={20} />
                  <span>{user.videos.length} videos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={20} />
                  <span>Joined Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Tabs */}
        <div className="border-b border-youtube-gray mb-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-youtube-red text-youtube-red'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'videos' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">My Videos</h2>
              {user.videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {user.videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Video size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg text-gray-400 mb-2">No videos yet</h3>
                  <p className="text-gray-500">Upload your first video to get started</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'liked' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Liked Videos</h2>
              {user.likedVideos.length > 0 ? (
                <div className="text-center py-12">
                  <ThumbsUp size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg text-gray-400 mb-2">Liked videos will appear here</h3>
                  <p className="text-gray-500">Videos you like will be saved to this list</p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <ThumbsUp size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg text-gray-400 mb-2">No liked videos yet</h3>
                  <p className="text-gray-500">Like some videos to see them here</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'subscriptions' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Subscriptions</h2>
              {user.subscriptions.length > 0 ? (
                <div className="text-center py-12">
                  <Users size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg text-gray-400 mb-2">Subscribed channels will appear here</h3>
                  <p className="text-gray-500">Channels you subscribe to will be shown in this list</p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Users size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg text-gray-400 mb-2">No subscriptions yet</h3>
                  <p className="text-gray-500">Subscribe to channels to see them here</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
