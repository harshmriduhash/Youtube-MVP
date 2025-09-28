'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import VideoPlayer from '@/components/VideoPlayer';
import CommentSection from '@/components/CommentSection';
import VideoCard from '@/components/VideoCard';
import { useVideo } from '@/context/VideoContext';

export default function VideoPage() {
  const params = useParams();
  const videoId = params.id as string;
  const { videos, currentVideo, setCurrentVideo, comments } = useVideo();

  useEffect(() => {
    const video = videos.find(v => v.id === videoId);
    if (video) {
      setCurrentVideo(video);
    }
  }, [videoId, videos, setCurrentVideo]);

  if (!currentVideo) {
    return (
      <div className="bg-youtube-dark min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Video not found</h1>
          <p className="text-gray-400">The video you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Get related videos (exclude current video)
  const relatedVideos = videos.filter(v => v.id !== videoId).slice(0, 5);

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
            {/* Main Video Section */}
            <div className="lg:col-span-3">
              <VideoPlayer video={currentVideo} />
              <CommentSection comments={comments} />
            </div>

            {/* Sidebar with Related Videos */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Related Videos</h3>
                {relatedVideos.map((video) => (
                  <VideoCard key={video.id} video={video} layout="list" />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
