import React, { useState } from 'react';
import { PostList } from './components/PostList';
import { PostView } from './components/PostView';
import { CreatePostForm } from './components/CreatePostForm';
import { Post } from './types';
import { MessageSquare } from 'lucide-react';

function App() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Discussion Threads</h1>
                <p className="text-sm text-gray-600">Share ideas and connect with the community</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedPost ? (
          <PostView
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          <div className="space-y-8">
            {/* Create post form */}
            <CreatePostForm
              onPostCreated={(post) => setSelectedPost(post)}
            />

            {/* Posts list */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Discussions</h2>
              <PostList
                onSelectPost={setSelectedPost}
                selectedPostId={selectedPost?.id}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;