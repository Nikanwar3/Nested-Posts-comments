import { Router } from 'express';
import { commentModel } from '../models/Comment';
import { CreateCommentRequest } from '../types';

const router = Router();

router.get('/post/:postId', (req, res) => {
  const nestedComments = commentModel.findNestedByPostId(req.params.postId);
  res.json(nestedComments);
});

router.post('/', (req, res) => {
  const { postId, content, parentId }: CreateCommentRequest = req.body;
  
  if (!postId || !content) {
    return res.status(400).json({ error: 'Post ID and content are required' });
  }

  const comment = commentModel.create({
    postId,
    content,
    parentId: parentId || null,
  });
  
  res.status(201).json(comment);
});

export default router;