'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Flag, AlertTriangle, Shield, MessageSquare, User, Video } from 'lucide-react';

export default function ReportPage() {
  const [reportType, setReportType] = useState<'video' | 'channel' | 'comment' | 'other'>('video');
  const [selectedReason, setSelectedReason] = useState('');
  const [description, setDescription] = useState('');

  const reportReasons = {
    video: [
      'Inappropriate content',
      'Violence or graphic content',
      'Hate speech or harassment',
      'Spam or misleading content',
      'Copyright infringement',
      'Privacy violation',
      'Other'
    ],
    channel: [
      'Inappropriate channel name',
      'Spam or fake channel',
      'Impersonation',
      'Hate speech or harassment',
      'Copyright infringement',
      'Privacy violation',
      'Other'
    ],
    comment: [
      'Spam or misleading',
      'Hate speech or harassment',
      'Inappropriate content',
      'Impersonation',
      'Privacy violation',
      'Other'
    ],
    other: [
      'Technical issue',
      'Account problem',
      'Payment issue',
      'Feature request',
      'Other'
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the report
    console.log('Report submitted:', { reportType, selectedReason, description });
    alert('Report submitted successfully. Thank you for helping us improve our platform.');
    setDescription('');
    setSelectedReason('');
  };

  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Flag size={32} className="text-youtube-red" />
            <h1 className="text-2xl font-bold text-white">Report Content</h1>
          </div>

          <div className="max-w-2xl">
            <div className="bg-youtube-gray rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-yellow-500 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-semibold mb-2">Before You Report</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Please only report content that violates our Community Guidelines. 
                    False reports can result in action against your account. If you're unsure 
                    whether something violates our policies, you can learn more about our 
                    Community Guidelines.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Report Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">What would you like to report?</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'video', label: 'Video', icon: Video },
                    { value: 'channel', label: 'Channel', icon: User },
                    { value: 'comment', label: 'Comment', icon: MessageSquare },
                    { value: 'other', label: 'Other', icon: Flag },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setReportType(type.value as any)}
                      className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                        reportType === type.value
                          ? 'border-youtube-red bg-red-900 bg-opacity-20 text-white'
                          : 'border-youtube-lightGray hover:border-youtube-red text-gray-400 hover:text-white'
                      }`}
                    >
                      <type.icon size={20} />
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reason Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Why are you reporting this {reportType}?
                </label>
                <div className="space-y-2">
                  {reportReasons[reportType].map((reason) => (
                    <label key={reason} className="flex items-center space-x-3 p-3 hover:bg-youtube-lightGray rounded-lg cursor-pointer">
                      <input
                        type="radio"
                        name="reason"
                        value={reason}
                        checked={selectedReason === reason}
                        onChange={(e) => setSelectedReason(e.target.value)}
                        className="text-youtube-red focus:ring-youtube-red"
                      />
                      <span className="text-white">{reason}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Additional details (optional)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Please provide any additional information that might help us understand your concern..."
                  className="w-full bg-youtube-gray text-white px-3 py-2 rounded-lg border border-youtube-lightGray focus:border-youtube-red focus:outline-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="bg-blue-900 bg-opacity-20 border border-blue-500 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-1">Your Privacy</h4>
                    <p className="text-gray-400 text-sm">
                      Your report will be reviewed by our team. We may contact you for additional 
                      information, but your identity will remain confidential unless required by law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!selectedReason}
                  className="px-6 py-2 bg-youtube-red hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
