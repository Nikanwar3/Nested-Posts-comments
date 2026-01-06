import React from 'react';
import { Post } from '../types';
import { Calendar, ArrowLeft } from 'lucide-react';
import { CommentSection } from './CommentSection';

interface PostViewProps {
  post: Post;
  onBack: () => void;
}

export const PostView: React.FC<PostViewProps> = ({ post, onBack }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to posts
      </button>

      {/* Post content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            {formatDate(post.createdAt)}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
          </div>
        </div>
      </div>

      {/* Comments section */}
      <CommentSection postId={post.id} />
    </div>
  );
};