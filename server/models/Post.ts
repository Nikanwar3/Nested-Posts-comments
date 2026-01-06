import { Post } from '../types';

export class PostModel {
  private posts: Post[] = [];

  create(post: Omit<Post, 'id' | 'createdAt'>): Post {
    const newPost: Post = {
      ...post,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
    };
    this.posts.push(newPost);
    return newPost;
  }

  findById(id: string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  findAll(): Post[] {
    return this.posts.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export const postModel = new PostModel();