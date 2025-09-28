'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Clock, TrendingUp } from 'lucide-react';
import { useVideo } from '@/context/VideoContext';

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'trending' | 'suggestion';
  icon?: React.ComponentType<any>;
}

const SearchAutocomplete: React.FC = () => {
  const router = useRouter();
  const { searchQuery, setSearchQuery, searchVideos, videos } = useVideo();
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock trending searches
  const trendingSearches = [
    'How to build a website',
    'Cooking recipes',
    'Gaming tutorials',
    'Music production',
    'Fitness workouts',
    'Travel vlogs',
    'Tech reviews',
    'Art tutorials'
  ];

  // Get unique categories from videos
  const videoCategories = [...new Set(videos.map(video => video.category))];

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = (query: string) => {
    if (!query.trim()) return;
    
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // Generate suggestions based on query
  useEffect(() => {
    if (!searchQuery.trim()) {
      // Show recent searches and trending when no query
      const recentSuggestions = recentSearches.map((search, index) => ({
        id: `recent-${index}`,
        text: search,
        type: 'recent' as const,
        icon: Clock
      }));

      const trendingSuggestions = trendingSearches.slice(0, 2).map((search, index) => ({
        id: `trending-${index}`,
        text: search,
        type: 'trending' as const,
        icon: TrendingUp
      }));

      const categorySuggestions = videoCategories.slice(0, 3).map((category, index) => ({
        id: `category-${index}`,
        text: category,
        type: 'trending' as const,
        icon: TrendingUp
      }));

      setSuggestions([...recentSuggestions, ...trendingSuggestions, ...categorySuggestions]);
    } else {
      // Generate suggestions based on current query
      const videoSuggestions = videos
        .filter(video => 
          video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.uploader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 3)
        .map((video, index) => ({
          id: `video-${video.id}`,
          text: video.title,
          type: 'suggestion' as const,
          icon: Search
        }));

      const trendingMatches = trendingSearches
        .filter(search => search.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 2)
        .map((search, index) => ({
          id: `trending-match-${index}`,
          text: search,
          type: 'trending' as const,
          icon: TrendingUp
        }));

      setSuggestions([...videoSuggestions, ...trendingMatches]);
    }
  }, [searchQuery, videos, recentSearches]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  // Handle input focus
  const handleInputFocus = () => {
    setIsOpen(true);
  };

  // Handle input blur
  const handleInputBlur = (e: React.FocusEvent) => {
    // Delay to allow click on suggestions
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 150);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.text);
    setIsOpen(false);
    saveRecentSearch(suggestion.text);
    searchVideos(suggestion.text);
    router.push(`/search?q=${encodeURIComponent(suggestion.text)}`);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery);
      searchVideos(searchQuery);
      setIsOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else if (searchQuery.trim()) {
          saveRecentSearch(searchQuery);
          searchVideos(searchQuery);
          setIsOpen(false);
          router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  return (
    <div className="flex-1 max-w-2xl mx-4 relative">
      <form onSubmit={handleSubmit} className="flex">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="w-full bg-black text-white px-4 py-2 rounded-l-full border border-youtube-gray focus:border-blue-500 focus:outline-none"
          />
          
          {/* Autocomplete Dropdown */}
          {isOpen && suggestions.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 right-0 bg-youtube-dark border border-youtube-gray rounded-lg shadow-lg z-50 mt-1 max-h-96 overflow-y-auto"
            >
              {!searchQuery.trim() && recentSearches.length > 0 && (
                <div className="p-2">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Recent
                    </span>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
              
              {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon || Search;
                return (
                  <button
                    key={suggestion.id}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-youtube-gray transition-colors ${
                      index === selectedIndex ? 'bg-youtube-gray' : ''
                    }`}
                  >
                    <Icon size={16} className="text-gray-400 flex-shrink-0" />
                    <span className="text-white text-left truncate">{suggestion.text}</span>
                    {suggestion.type === 'recent' && (
                      <span className="text-xs text-gray-500 ml-auto">Recent</span>
                    )}
                    {suggestion.type === 'trending' && (
                      <span className="text-xs text-gray-500 ml-auto">Trending</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-youtube-gray px-6 py-2 rounded-r-full border border-l-0 border-youtube-gray hover:bg-youtube-lightGray transition-colors"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchAutocomplete;
