import Typesense from 'typesense';
import { Post } from '../types';

const POSTS_COLLECTION = 'posts';

export const typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST || 'localhost',
      port: Number(process.env.TYPESENSE_PORT) || 8108,
      protocol: process.env.TYPESENSE_PROTOCOL || 'http',
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY || 'xyz123devkey',
  connectionTimeoutSeconds: 2,
});

const postsSchema = {
  name: POSTS_COLLECTION,
  fields: [
    { name: 'title', type: 'string' as const },
    { name: 'content', type: 'string' as const },
    { name: 'createdAt', type: 'int64' as const },
  ],
  default_sorting_field: 'createdAt',
};

export async function ensurePostsCollection(): Promise<void> {
  try {
    await typesenseClient.collections(POSTS_COLLECTION).retrieve();
  } catch {
    await typesenseClient.collections().create(postsSchema);
  }
}

export async function indexPost(post: Post): Promise<void> {
  await typesenseClient
    .collections(POSTS_COLLECTION)
    .documents()
    .upsert({
      id: post.id,
      title: post.title,
      content: post.content,
      createdAt: new Date(post.createdAt).getTime(),
    });
}

export async function searchPosts(query: string): Promise<Post[]> {
  const results = await typesenseClient
    .collections(POSTS_COLLECTION)
    .documents()
    .search({
      q: query,
      query_by: 'title,content',
    });

  return (results.hits || []).map(hit => {
    const doc = hit.document as { id: string; title: string; content: string; createdAt: number };
    return {
      id: doc.id,
      title: doc.title,
      content: doc.content,
      createdAt: new Date(doc.createdAt).toISOString(),
    };
  });
}
