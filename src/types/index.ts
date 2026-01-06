export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  parentId: string | null;
  createdAt: string;
}

export interface NestedComment extends Comment {
  replies: NestedComment[];
}

export interface CreatePostRequest {
  title: string;
  content: string;
}

export interface CreateCommentRequest {
  postId: string;
  content: string;
  parentId?: string;
}