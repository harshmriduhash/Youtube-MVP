'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Video, Comment, User } from '@/data/mockData';

interface VideoContextType {
  videos: Video[];
  currentVideo: Video | null;
  searchQuery: string;
  searchResults: Video[];
  user: User;
  comments: Comment[];
  setCurrentVideo: (video: Video | null) => void;
  setSearchQuery: (query: string) => void;
  searchVideos: (query: string) => void;
  likeVideo: (videoId: string) => void;
  subscribeToChannel: (channelId: string) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};

interface VideoProviderProps {
  children: ReactNode;
}

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const [videos] = useState<Video[]>(require('@/data/mockData').mockVideos);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [user] = useState<User>(require('@/data/mockData').mockUser);
  const [comments] = useState<Comment[]>(require('@/data/mockData').mockComments);

  const searchVideos = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const filtered = videos.filter(video => 
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.description.toLowerCase().includes(query.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
      video.uploader.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const likeVideo = (videoId: string) => {
    // In a real app, this would make an API call
    console.log(`Liked video ${videoId}`);
  };

  const subscribeToChannel = (channelId: string) => {
    // In a real app, this would make an API call
    console.log(`Subscribed to channel ${channelId}`);
  };

  const value: VideoContextType = {
    videos,
    currentVideo,
    searchQuery,
    searchResults,
    user,
    comments,
    setCurrentVideo,
    setSearchQuery,
    searchVideos,
    likeVideo,
    subscribeToChannel,
  };

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
};
