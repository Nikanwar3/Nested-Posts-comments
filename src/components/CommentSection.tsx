import React, { useState } from 'react';
import { useComments } from '../hooks/useComments';
import { CommentForm } from './CommentForm';
import { CommentTree } from './CommentTree';
import { MessageSquare, Plus } from 'lucide-react';

interface CommentSectionProps {
  postId: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const { comments, loading, error, addComment } = useComments(postId);
  const [showAddComment, setShowAddComment] = useState(false);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-600">Error loading comments: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Comments header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Discussion ({comments.length} {comments.length === 1 ? 'comment' : 'comments'})
              </h2>
            </div>
            <button
              onClick={() => setShowAddComment(!showAddComment)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
              Add Comment
            </button>
          </div>
        </div>

        {/* Add comment form */}
        {showAddComment && (
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <CommentForm
              onSubmit={async (content) => {
                await addComment(content);
                setShowAddComment(false);
              }}
              onCancel={() => setShowAddComment(false)}
              placeholder="Share your thoughts on this post..."
            />
          </div>
        )}

        {/* Comments list */}
        <div className="p-6">
          {comments.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg mb-2">No comments yet</p>
              <p className="text-gray-400">Be the first to share your thoughts!</p>
            </div>
          ) : (
            <CommentTree 
              comments={comments} 
              onReply={addComment}
            />
          )}
        </div>
      </div>
    </div>
  );
};