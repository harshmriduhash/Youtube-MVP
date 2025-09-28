'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  TrendingUp, 
  Users, 
  Library, 
  History, 
  PlaySquare, 
  Clock, 
  ThumbsUp,
  Settings,
  HelpCircle,
  Flag
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: TrendingUp, label: 'Trending', href: '/trending' },
    { icon: Users, label: 'Subscriptions', href: '/subscriptions' },
  ];

  const libraryItems = [
    { icon: Library, label: 'Library', href: '/library' },
    { icon: History, label: 'History', href: '/history' },
    { icon: PlaySquare, label: 'Your videos', href: '/my-videos' },
    { icon: Clock, label: 'Watch later', href: '/watch-later' },
    { icon: ThumbsUp, label: 'Liked videos', href: '/liked' },
  ];

  const otherItems = [
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
    { icon: Flag, label: 'Report', href: '/report' },
  ];

  const SidebarItem: React.FC<{ 
    icon: React.ComponentType<any>, 
    label: string, 
    href: string 
  }> = ({ icon: Icon, label, href }) => (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-youtube-gray transition-colors ${
        isCollapsed ? 'justify-center' : ''
      }`}
    >
      <Icon size={20} />
      {!isCollapsed && <span className="text-sm">{label}</span>}
    </Link>
  );

  return (
    <div className={`bg-youtube-dark text-white transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-youtube-gray rounded-lg transition-colors mb-4"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </div>
        </button>

        {/* Main Navigation */}
        <div className="space-y-1 mb-6">
          {mainItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>

        {/* Library Section */}
        <div className="space-y-1 mb-6">
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              Library
            </h3>
          )}
          {libraryItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>

        {/* Other Section */}
        <div className="space-y-1">
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              More
            </h3>
          )}
          {otherItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
