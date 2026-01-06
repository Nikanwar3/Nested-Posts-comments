import React from 'react';
import { NestedComment } from '../types';
import { CommentForm } from './CommentForm';
import { Calendar, Reply, MessageCircle } from 'lucide-react';

interface CommentItemProps {
  comment: NestedComment;
  depth: number;
  isReplying: boolean;
  onReply: (content: string, parentId: string) => Promise<void>;
  onToggleReply: (commentId: string) => void;
}

export const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  depth,
  isReplying,
  onReply,
  onToggleReply,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const maxDepth = 6;
  const indentLevel = Math.min(depth, maxDepth);
  const marginLeft = indentLevel * 24; // 24px per level

  return (
    <div 
      className="relative"
      style={{ marginLeft: `${marginLeft}px` }}
    >
      {/* Thread line for nested comments */}
      {depth > 0 && (
        <div 
          className="absolute top-0 left-0 w-px bg-gray-200 h-full"
          style={{ left: `${-marginLeft + 12}px` }}
        />
      )}
      
      <div className="bg-white border border-gray-200 rounded-lg p-4 relative">
        {/* Comment metadata */}
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageCircle className="h-4 w-4 text-blue-600" />
          </div>
          <span className="font-medium">Anonymous User</span>
          <span>•</span>
          <Calendar className="h-3 w-3" />
          <span>{formatDate(comment.createdAt)}</span>
        </div>

        {/* Comment content */}
        <div className="mb-4">
          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
            {comment.content}
          </p>
        </div>

        {/* Comment actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onToggleReply(comment.id)}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Reply className="h-4 w-4" />
            Reply
          </button>
          
          {comment.replies.length > 0 && (
            <span className="text-sm text-gray-400">
              {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
            </span>
          )}
        </div>

        {/* Reply form */}
        {isReplying && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="mb-2 text-sm text-gray-600 font-medium">
              Replying to comment
            </div>
            <CommentForm
              onSubmit={(content) => onReply(content, comment.id)}
              onCancel={() => onToggleReply(comment.id)}
              placeholder="Write a reply..."
              compact
            />
          </div>
        )}
      </div>
    </div>
  );
};