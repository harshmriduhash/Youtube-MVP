'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Eye, ThumbsUp } from 'lucide-react';
import { Video } from '@/data/mockData';

interface VideoCardProps {
  video: Video;
  layout?: 'grid' | 'list';
}

const VideoCard: React.FC<VideoCardProps> = ({ video, layout = 'grid' }) => {
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
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  if (layout === 'list') {
    return (
      <Link href={`/video/${video.id}`} className="block">
        <div className="flex space-x-4 p-2 hover:bg-youtube-gray rounded-lg transition-colors">
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
            <h3 className="text-white font-medium text-lg line-clamp-2 mb-2">
              {video.title}
            </h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p>{video.uploader.name}</p>
              <div className="flex items-center space-x-4 text-xs">
                <span className="flex items-center space-x-1">
                  <Eye size={14} />
                  <span>{formatNumber(video.views)} views</span>
                </span>
                <span>{formatDate(video.uploadDate)}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">
              {video.description}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/video/${video.id}`} className="block group">
      <div className="bg-youtube-dark rounded-lg overflow-hidden hover:bg-youtube-gray transition-colors">
        <div className="relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
            {video.duration}
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-white font-medium text-sm line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          <div className="text-gray-400 text-xs space-y-1">
            <p className="hover:text-white transition-colors">{video.uploader.name}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-1">
                <Eye size={12} />
                <span>{formatNumber(video.views)} views</span>
              </span>
              <span className="flex items-center space-x-1">
                <ThumbsUp size={12} />
                <span>{formatNumber(video.likes)}</span>
              </span>
            </div>
            <p className="text-xs">{formatDate(video.uploadDate)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
