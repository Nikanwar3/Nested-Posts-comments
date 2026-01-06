import express from 'express';
import cors from 'cors';
import postsRouter from './routes/posts';
import commentsRouter from './routes/comments';
import { postModel } from './models/Post';

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

// Seed some sample data
const seedData = () => {
  const samplePost = postModel.create({
    title: 'Welcome to the Discussion Thread System!',
    content: 'This is a demo post to showcase the nested comment functionality. Feel free to add comments and replies to test the threading system.',
  });
  
  console.log('Sample data seeded successfully');
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  seedData();
});