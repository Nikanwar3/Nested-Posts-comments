import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { Post } from '../types';
import { MessageSquare, Calendar } from 'lucide-react';

interface PostListProps {
  onSelectPost: (post: Post) => void;
  selectedPostId?: string;
}

export const PostList: React.FC<PostListProps> = ({ onSelectPost, selectedPostId }) => {
  const { posts, loading, error } = usePosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600">Error loading posts: {error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
        <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-600 text-lg mb-2">No posts yet</p>
        <p className="text-gray-500">Be the first to start a discussion!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div
          key={post.id}
          onClick={() => onSelectPost(post)}
          className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-200 cursor-pointer hover:shadow-md hover:border-blue-200 ${
            selectedPostId === post.id ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
          }`}
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.createdAt)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};