import { useState, useEffect } from 'react';
import { NestedComment } from '../types';

const API_BASE = 'http://localhost:3001/api';

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<NestedComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/comments/post/${postId}`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (content: string, parentId?: string) => {
    try {
      const response = await fetch(`${API_BASE}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, content, parentId }),
      });
      if (!response.ok) throw new Error('Failed to add comment');
      
      // Refetch comments to get updated nested structure
      await fetchComments();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add comment');
      throw err;
    }
  };

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return { comments, loading, error, addComment, refetch: fetchComments };
};