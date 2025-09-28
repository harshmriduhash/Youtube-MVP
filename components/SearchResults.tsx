'use client';

import React from 'react';
import VideoCard from './VideoCard';
import { useVideo } from '@/context/VideoContext';

const SearchResults: React.FC = () => {
  const { searchResults, searchQuery } = useVideo();

  if (!searchQuery) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl text-gray-400 mb-4">Start searching for videos</h2>
        <p className="text-gray-500">Enter a search term in the search bar above</p>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl text-gray-400 mb-4">No results found</h2>
        <p className="text-gray-500">Try searching for something else</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Search results for "{searchQuery}"
        </h2>
        <p className="text-gray-400">
          {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
        </p>
      </div>
      
      <div className="space-y-2">
        {searchResults.map((video) => (
          <VideoCard key={video.id} video={video} layout="list" />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
