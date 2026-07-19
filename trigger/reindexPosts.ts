import { schedules, logger } from '@trigger.dev/sdk';
import { prisma } from '../server/db';
import { ensurePostsCollection, indexPost } from '../server/search';

export const reindexPosts = schedules.task({
  id: 'reindex-posts',
  cron: '0 * * * *',
  run: async () => {
    await ensurePostsCollection();

    const posts = await prisma.post.findMany();
    let succeeded = 0;
    let failed = 0;

    for (const post of posts) {
      try {
        await indexPost({ ...post, createdAt: post.createdAt.toISOString() });
        succeeded++;
      } catch (err) {
        failed++;
        logger.error('Failed to reindex post', { postId: post.id, err });
      }
    }

    logger.info('Reindex run complete', { total: posts.length, succeeded, failed });

    return { total: posts.length, succeeded, failed };
  },
});
