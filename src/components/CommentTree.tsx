import React, { useState } from 'react';
import { NestedComment } from '../types';
import { CommentItem } from './CommentItem';

interface CommentTreeProps {
  comments: NestedComment[];
  onReply: (content: string, parentId?: string) => Promise<void>;
  depth?: number;
}

export const CommentTree: React.FC<CommentTreeProps> = ({ 
  comments, 
  onReply, 
  depth = 0 
}) => {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const handleReply = async (content: string, parentId: string) => {
    await onReply(content, parentId);
    setReplyingTo(null);
  };

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentItem
            comment={comment}
            depth={depth}
            isReplying={replyingTo === comment.id}
            onReply={handleReply}
            onToggleReply={(commentId) => 
              setReplyingTo(replyingTo === commentId ? null : commentId)
            }
          />
          
          {comment.replies.length > 0 && (
            <div className="mt-4">
              <CommentTree
                comments={comment.replies}
                onReply={onReply}
                depth={depth + 1}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};