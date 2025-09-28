'use client';

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Reply } from 'lucide-react';
import { Comment } from '@/data/mockData';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

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

  const handleLike = (commentId: string) => {
    const newLikedComments = new Set(likedComments);
    if (newLikedComments.has(commentId)) {
      newLikedComments.delete(commentId);
    } else {
      newLikedComments.add(commentId);
    }
    setLikedComments(newLikedComments);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, this would make an API call
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  const CommentItem: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => (
    <div className={`${isReply ? 'ml-8 mt-3' : ''}`}>
      <div className="flex space-x-3">
        <img
          src={comment.author.avatar}
          alt={comment.author.name}
          className="w-8 h-8 rounded-full flex-shrink-0"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium text-sm">{comment.author.name}</h4>
            <span className="text-xs text-gray-400">{formatDate(comment.timestamp)}</span>
          </div>
          <p className="text-sm text-gray-300 mb-2">{comment.text}</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleLike(comment.id)}
              className={`flex items-center space-x-1 text-xs hover:text-white transition-colors ${
                likedComments.has(comment.id) ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              <ThumbsUp size={14} />
              <span>{formatNumber(comment.likes)}</span>
            </button>
            <button className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white transition-colors">
              <ThumbsDown size={14} />
            </button>
            <button className="text-xs text-gray-400 hover:text-white transition-colors">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-youtube-dark text-white p-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {comments.length} Comments
        </h3>
        
        {/* Add Comment Form */}
        <form onSubmit={handleSubmitComment} className="flex space-x-3 mb-6">
          <img
            src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
            alt="Your avatar"
            className="w-8 h-8 rounded-full flex-shrink-0"
          />
          <div className="flex-1">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full bg-transparent border-b border-youtube-gray text-white placeholder-gray-400 focus:border-white focus:outline-none pb-1"
            />
          </div>
          <button
            type="submit"
            className="bg-youtube-red hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors"
          >
            Comment
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentItem comment={comment} />
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
