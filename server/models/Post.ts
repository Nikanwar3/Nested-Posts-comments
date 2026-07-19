import { prisma } from '../db';
import { Post } from '../types';
import { indexPost } from '../search';

function serialize(post: { id: string; title: string; content: string; createdAt: Date }): Post {
  return { ...post, createdAt: post.createdAt.toISOString() };
}

export class PostModel {
  async create(post: Omit<Post, 'id' | 'createdAt'>): Promise<Post> {
    const created = await prisma.post.create({ data: post });
    const serialized = serialize(created);

    try {
      await indexPost(serialized);
    } catch (err) {
      console.error('Typesense indexing failed (post still saved to DB):', err);
    }

    return serialized;
  }

  async findById(id: string): Promise<Post | undefined> {
    const post = await prisma.post.findUnique({ where: { id } });
    return post ? serialize(post) : undefined;
  }

  async findAll(): Promise<Post[]> {
    const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
    return posts.map(serialize);
  }
}

export const postModel = new PostModel();
