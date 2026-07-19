import express from 'express';
import cors from 'cors';
import postsRouter from './routes/posts';
import commentsRouter from './routes/comments';
import { postModel } from './models/Post';
import { ensurePostsCollection, indexPost } from './search';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Discussion Thread API is running' });
});

// Seed some sample data (only on first run, since data now persists via Prisma)
const seedData = async () => {
  const existing = await postModel.findAll();
  if (existing.length > 0) {
    return;
  }

  await postModel.create({
    title: 'Welcome to the Discussion Thread System!',
    content: 'This is a demo post to showcase the nested comment functionality. Feel free to add comments and replies to test the threading system.',
  });

  console.log('Sample data seeded successfully');
};

const initSearch = async () => {
  try {
    await ensurePostsCollection();
    const posts = await postModel.findAll();
    await Promise.all(posts.map(indexPost));
    console.log(`Typesense ready, indexed ${posts.length} post(s)`);
  } catch (err) {
    console.error('Typesense unavailable, search will be disabled:', err instanceof Error ? err.message : err);
  }
};

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await seedData();
  await initSearch();
});
