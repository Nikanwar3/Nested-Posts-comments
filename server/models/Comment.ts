import { Comment, NestedComment } from '../types';

export class CommentModel {
  private comments: Comment[] = [];

  create(comment: Omit<Comment, 'id' | 'createdAt'>): Comment {
    const newComment: Comment = {
      ...comment,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
    };
    this.comments.push(newComment);
    return newComment;
  }

  findByPostId(postId: string): Comment[] {
    return this.comments
      .filter(comment => comment.postId === postId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  findNestedByPostId(postId: string): NestedComment[] {
    const comments = this.findByPostId(postId);
    return this.buildNestedStructure(comments);
  }

  private buildNestedStructure(comments: Comment[]): NestedComment[] {
    const commentMap = new Map<string, NestedComment>();
    const rootComments: NestedComment[] = [];

    comments.forEach(comment => {
      commentMap.set(comment.id, { ...comment, replies: [] });
    });

    comments.forEach(comment => {
      const nestedComment = commentMap.get(comment.id)!;
      
      if (comment.parentId === null) {
        rootComments.push(nestedComment);
      } else {
        const parentComment = commentMap.get(comment.parentId);
        if (parentComment) {
          parentComment.replies.push(nestedComment);
        }
      }
    });

    return rootComments;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export const commentModel = new CommentModel();