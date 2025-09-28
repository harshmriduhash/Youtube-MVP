'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { HelpCircle, Search, ChevronDown, ChevronRight, Mail, MessageCircle, BookOpen } from 'lucide-react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started']));

  const faqSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      questions: [
        {
          q: 'How do I upload my first video?',
          a: 'Click the "Upload Video" button in the top navigation or go to your profile page. Select your video file, add a title and description, then click publish.'
        },
        {
          q: 'How do I customize my channel?',
          a: 'Go to Settings > Account to update your channel name, description, and profile picture. You can also customize your channel layout and featured content.'
        },
        {
          q: 'How do I subscribe to channels?',
          a: 'Visit any channel page and click the "Subscribe" button. You can also subscribe directly from video pages or search results.'
        }
      ]
    },
    {
      id: 'video-management',
      title: 'Video Management',
      icon: BookOpen,
      questions: [
        {
          q: 'How do I edit my video details?',
          a: 'Go to your videos page, click the edit button next to any video, and update the title, description, tags, or thumbnail.'
        },
        {
          q: 'Can I schedule videos for later?',
          a: 'Yes! When uploading, you can set a publish date and time. Your video will automatically go live at the scheduled time.'
        },
        {
          q: 'How do I delete a video?',
          a: 'Go to your videos page, click the more options button (three dots) next to the video you want to delete, and select "Delete video".'
        }
      ]
    },
    {
      id: 'account-settings',
      title: 'Account & Settings',
      icon: BookOpen,
      questions: [
        {
          q: 'How do I change my password?',
          a: 'Go to Settings > Account > Security and click "Change Password". You\'ll need to enter your current password and create a new one.'
        },
        {
          q: 'How do I update my email address?',
          a: 'Go to Settings > Account and update your email address. You\'ll need to verify the new email address before it becomes active.'
        },
        {
          q: 'How do I manage my privacy settings?',
          a: 'Go to Settings > Privacy to control who can see your videos, comments, and channel information.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: BookOpen,
      questions: [
        {
          q: 'Why is my video not uploading?',
          a: 'Check that your video file is in a supported format (MP4, MOV, AVI) and under 15GB. Also ensure you have a stable internet connection.'
        },
        {
          q: 'Why can\'t I see my video?',
          a: 'Your video might be processing, which can take a few minutes to hours depending on the file size. Check the video status in your videos page.'
        },
        {
          q: 'Why are my comments not appearing?',
          a: 'Comments may be held for review if they contain certain keywords or if the video has restricted comments. Check your comment settings.'
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle size={32} className="text-youtube-red" />
            <h1 className="text-2xl font-bold text-white">Help Center</h1>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-youtube-gray text-white pl-10 pr-4 py-3 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-youtube-gray p-6 rounded-lg hover:bg-youtube-lightGray transition-colors cursor-pointer">
              <Mail className="text-youtube-red mb-3" size={24} />
              <h3 className="text-white font-semibold mb-2">Contact Support</h3>
              <p className="text-gray-400 text-sm">Get help from our support team</p>
            </div>
            <div className="bg-youtube-gray p-6 rounded-lg hover:bg-youtube-lightGray transition-colors cursor-pointer">
              <MessageCircle className="text-youtube-red mb-3" size={24} />
              <h3 className="text-white font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm">Chat with us in real-time</p>
            </div>
            <div className="bg-youtube-gray p-6 rounded-lg hover:bg-youtube-lightGray transition-colors cursor-pointer">
              <BookOpen className="text-youtube-red mb-3" size={24} />
              <h3 className="text-white font-semibold mb-2">Documentation</h3>
              <p className="text-gray-400 text-sm">Browse our detailed guides</p>
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <div key={section.id} className="bg-youtube-gray rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-6 hover:bg-youtube-lightGray transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="text-youtube-red" size={24} />
                      <h3 className="text-white font-semibold text-left">{section.title}</h3>
                    </div>
                    {expandedSections.has(section.id) ? (
                      <ChevronDown className="text-gray-400" size={20} />
                    ) : (
                      <ChevronRight className="text-gray-400" size={20} />
                    )}
                  </button>
                  
                  {expandedSections.has(section.id) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {section.questions.map((faq, index) => (
                          <div key={index} className="border-l-2 border-youtube-red pl-4">
                            <h4 className="text-white font-medium mb-2">{faq.q}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Search size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg text-gray-400 mb-2">No results found</h3>
                <p className="text-gray-500">Try searching with different keywords</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
