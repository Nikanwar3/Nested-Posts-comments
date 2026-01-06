import { Router } from 'express';
import { postModel } from '../models/Post';
import { CreatePostRequest } from '../types';

const router = Router();

router.get('/', (req, res) => {
  const posts = postModel.findAll();
  res.json(posts);
});

router.get('/:id', (req, res) => {
  const post = postModel.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});

router.post('/', (req, res) => {
  const { title, content }: CreatePostRequest = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const post = postModel.create({ title, content });
  res.status(201).json(post);
});

export default router;