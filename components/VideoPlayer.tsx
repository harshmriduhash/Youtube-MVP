'use client';

import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ThumbsUp, ThumbsDown, Share, Download } from 'lucide-react';
import { Video } from '@/data/mockData';

interface VideoPlayerProps {
  video: Video;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

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
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  return (
    <div className="bg-youtube-dark text-white">
      {/* Video Player */}
      <div className="relative bg-black aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-4 transition-all"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
        </div>
        
        {/* Video Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 hover:bg-black hover:bg-opacity-50 rounded-full transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="w-24 h-1 bg-gray-600 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
            </div>
          </div>
          <button className="p-2 hover:bg-black hover:bg-opacity-50 rounded-full transition-colors">
            <Maximize size={20} />
          </button>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">{video.title}</h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2 sm:mb-0">
            <span>{formatNumber(video.views)} views</span>
            <span>{formatDate(video.uploadDate)}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${
                isLiked ? 'bg-blue-600 text-white' : 'bg-youtube-gray hover:bg-youtube-lightGray'
              }`}
            >
              <ThumbsUp size={16} />
              <span>{formatNumber(video.likes)}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${
                isDisliked ? 'bg-blue-600 text-white' : 'bg-youtube-gray hover:bg-youtube-lightGray'
              }`}
            >
              <ThumbsDown size={16} />
            </button>
            <button className="flex items-center space-x-1 px-4 py-2 bg-youtube-gray hover:bg-youtube-lightGray rounded-full transition-colors">
              <Share size={16} />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1 px-4 py-2 bg-youtube-gray hover:bg-youtube-lightGray rounded-full transition-colors">
              <Download size={16} />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Channel Info */}
        <div className="border-t border-youtube-gray pt-4">
          <div className="flex items-start space-x-3">
            <img
              src={video.uploader.avatar}
              alt={video.uploader.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold">{video.uploader.name}</h3>
                <span className="text-sm text-gray-400">
                  {formatNumber(video.uploader.subscribers)} subscribers
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {video.description}
              </p>
            </div>
            <button className="bg-youtube-red hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
