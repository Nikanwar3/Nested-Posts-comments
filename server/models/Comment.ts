import { prisma } from '../db';
import { Comment, NestedComment } from '../types';

function serialize(comment: {
  id: string;
  postId: string;
  content: string;
  parentId: string | null;
  createdAt: Date;
}): Comment {
  return { ...comment, createdAt: comment.createdAt.toISOString() };
}

export class CommentModel {
  async create(comment: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> {
    const created = await prisma.comment.create({ data: comment });
    return serialize(created);
  }

  async findByPostId(postId: string): Promise<Comment[]> {
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: 'asc' },
    });
    return comments.map(serialize);
  }

  async findNestedByPostId(postId: string): Promise<NestedComment[]> {
    const comments = await this.findByPostId(postId);
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
}

export const commentModel = new CommentModel();
