'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Settings, User, Bell, Shield, Palette, Globe, Download, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'account' | 'notifications' | 'privacy' | 'appearance' | 'data'>('account');

  const tabs = [
    { id: 'account' as const, label: 'Account', icon: User },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell },
    { id: 'privacy' as const, label: 'Privacy', icon: Shield },
    { id: 'appearance' as const, label: 'Appearance', icon: Palette },
    { id: 'data' as const, label: 'Data & Storage', icon: Download },
  ];

  const TabContent: React.FC<{ tab: string }> = ({ tab }) => {
    switch (tab) {
      case 'account':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Account Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Current User"
                    className="w-full bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="user@example.com"
                    className="w-full bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Channel Description</label>
                  <textarea
                    rows={4}
                    defaultValue="Welcome to my channel! I create amazing content for everyone to enjoy."
                    className="w-full bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-youtube-gray">
              <button className="bg-youtube-red hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { label: 'Email notifications', description: 'Get notified about new videos from subscribed channels' },
                { label: 'Push notifications', description: 'Receive push notifications on your device' },
                { label: 'Comment notifications', description: 'Get notified when someone comments on your videos' },
                { label: 'Like notifications', description: 'Get notified when someone likes your videos' },
                { label: 'Subscription notifications', description: 'Get notified when someone subscribes to your channel' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-youtube-gray rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">{item.label}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-youtube-red"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              {[
                { label: 'Make channel public', description: 'Allow others to find and view your channel' },
                { label: 'Show subscriber count', description: 'Display your subscriber count publicly' },
                { label: 'Allow comments', description: 'Let viewers comment on your videos' },
                { label: 'Show view count', description: 'Display view counts on your videos' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-youtube-gray rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">{item.label}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-youtube-red"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Appearance Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Theme</label>
                <select className="w-full bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none">
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                <select className="w-full bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Video Quality</label>
                <select className="w-full bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none">
                  <option value="auto">Auto</option>
                  <option value="1080p">1080p</option>
                  <option value="720p">720p</option>
                  <option value="480p">480p</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Data & Storage</h3>
            <div className="space-y-4">
              <div className="p-4 bg-youtube-gray rounded-lg">
                <h4 className="text-white font-medium mb-2">Download Your Data</h4>
                <p className="text-gray-400 text-sm mb-3">Download a copy of your data including videos, comments, and settings.</p>
                <button className="flex items-center space-x-2 text-youtube-red hover:text-red-400 transition-colors">
                  <Download size={16} />
                  <span>Request Download</span>
                </button>
              </div>
              <div className="p-4 bg-youtube-gray rounded-lg">
                <h4 className="text-white font-medium mb-2">Clear Watch History</h4>
                <p className="text-gray-400 text-sm mb-3">Remove all videos from your watch history.</p>
                <button className="flex items-center space-x-2 text-youtube-red hover:text-red-400 transition-colors">
                  <Trash2 size={16} />
                  <span>Clear History</span>
                </button>
              </div>
              <div className="p-4 bg-youtube-gray rounded-lg">
                <h4 className="text-white font-medium mb-2">Delete Account</h4>
                <p className="text-gray-400 text-sm mb-3">Permanently delete your account and all associated data.</p>
                <button className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors">
                  <Trash2 size={16} />
                  <span>Delete Account</span>
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Settings size={32} className="text-youtube-red" />
            <h1 className="text-2xl font-bold text-white">Settings</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Settings Navigation */}
            <div className="lg:w-64">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-youtube-red text-white'
                        : 'text-gray-400 hover:bg-youtube-gray hover:text-white'
                    }`}
                  >
                    <tab.icon size={20} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="flex-1">
              <div className="bg-youtube-gray rounded-lg p-6">
                <TabContent tab={activeTab} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
