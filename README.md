# Discussion Thread System

A full-stack discussion platform with nested comments, similar to Reddit, GitHub, or Medium. Built with React, Express.js, and TypeScript, featuring unlimited comment nesting, real-time interactions, and a modern, responsive design.


## 🚀 Features

### Core Functionality
- **Create Discussion Posts** - Share ideas with title and content
- **Nested Comments** - Unlimited depth comment threading
- **Reply System** - Reply to posts or existing comments
- **Real-time Updates** - Comments update instantly after posting
- **Visual Threading** - Clear indentation and connection lines for nested comments
- **Full-Text Search** - Instant search over post titles and content, powered by Typesense

### User Experience
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI** - Clean, card-based design with smooth animations
- **Intuitive Navigation** - Easy switching between post list and detailed views
- **Loading States** - Skeleton loading for better perceived performance
- **Error Handling** - Graceful error messages and retry mechanisms

### Technical Features
- **TypeScript** - Full type safety across frontend and backend
- **RESTful API** - Clean, documented API endpoints
- **Modular Architecture** - Organized codebase with separation of concerns
- **Custom Hooks** - Reusable React hooks for data management
- **Component Library** - Modular, reusable UI components

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Prisma** - Type-safe ORM for schema modeling, migrations, and queries
- **SQLite** - Persistent relational storage (swappable for Postgres/MySQL via Prisma's datasource config)
- **Typesense** - Instant full-text search over posts, with automatic re-indexing on create and startup backfill
- **CORS** - Cross-origin resource sharing support

### Development Tools
- **ESLint** - Code linting and formatting
- **Nodemon** - Automatic server restart during development
- **Concurrently** - Run multiple commands simultaneously
- **TSX** - TypeScript execution engine

## 📋 Requirements

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher
- **Modern web browser** with ES2020 support

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Nikanwar3/Nested-Posts-comments.git
cd Nested-Posts-comments
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

This command will:
- Start the Express.js backend server on `http://localhost:3001`
- Start the React development server on `http://localhost:5173`
- Enable hot reloading for both frontend and backend

### 4. Access the Application
Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
discussion-thread-system/
├── src/                          # Frontend React application
│   ├── components/               # Reusable UI components
│   │   ├── PostList.tsx         # Display list of posts
│   │   ├── PostView.tsx         # Single post detailed view
│   │   ├── CreatePostForm.tsx   # Form to create new posts
│   │   ├── CommentSection.tsx   # Comments container
│   │   ├── CommentTree.tsx      # Nested comment structure
│   │   ├── CommentItem.tsx      # Individual comment display
│   │   └── CommentForm.tsx      # Form to add/reply comments
│   ├── hooks/                   # Custom React hooks
│   │   ├── usePosts.ts          # Posts data management
│   │   ├── usePost.ts           # Single post data
│   │   └── useComments.ts       # Comments data management
│   ├── types/                   # TypeScript type definitions
│   │   └── index.ts             # Shared type interfaces
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # React application entry point
│   └── index.css                # Global styles and Tailwind imports
├── server/                      # Backend Express.js application
│   ├── models/                  # Data models and business logic
│   │   ├── Post.ts              # Post model and operations
│   │   └── Comment.ts           # Comment model and operations
│   ├── routes/                  # API route handlers
│   │   ├── posts.ts             # Post-related endpoints
│   │   └── comments.ts          # Comment-related endpoints
│   ├── types/                   # Backend type definitions
│   │   └── index.ts             # Server-side interfaces
│   ├── db.ts                    # Prisma Client instance
│   └── index.ts                 # Express server entry point
├── prisma/
│   ├── schema.prisma             # Post/Comment models & datasource config
│   └── migrations/               # Generated SQL migrations
├── package.json                 # Project dependencies and scripts
├── nodemon.json                 # Nodemon configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## 🔌 API Documentation

### Base URL
```
http://localhost:3001/api
```

### Posts Endpoints

#### Get All Posts
```http
GET /posts
```
**Response:**
```json
[
  {
    "id": "abc123",
    "title": "Sample Post Title",
    "content": "Post content here...",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

#### Get Single Post
```http
GET /posts/:id
```
**Response:**
```json
{
  "id": "abc123",
  "title": "Sample Post Title",
  "content": "Post content here...",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

#### Create New Post
```http
POST /posts
Content-Type: application/json

{
  "title": "New Post Title",
  "content": "Post content here..."
}
```

### Comments Endpoints

#### Get Comments for Post
```http
GET /comments/post/:postId
```
**Response:** (Nested structure)
```json
[
  {
    "id": "comment1",
    "postId": "abc123",
    "content": "Top-level comment",
    "parentId": null,
    "createdAt": "2024-01-15T10:35:00.000Z",
    "replies": [
      {
        "id": "comment2",
        "postId": "abc123",
        "content": "Reply to comment1",
        "parentId": "comment1",
        "createdAt": "2024-01-15T10:40:00.000Z",
        "replies": []
      }
    ]
  }
]
```

#### Create New Comment
```http
POST /comments
Content-Type: application/json

{
  "postId": "abc123",
  "content": "Comment content here...",
  "parentId": "comment1"  // Optional: for replies
}
```

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#3B82F6` - Main actions and links
- **Secondary Slate:** `#64748B` - Text and subtle elements
- **Accent Green:** `#10B981` - Success states
- **Warning Orange:** `#F59E0B` - Warning states
- **Error Red:** `#EF4444` - Error states
- **Neutral Gray:** `#6B7280` - Background and borders

### Typography
- **Headings:** Inter font family, weights 600-700
- **Body Text:** Inter font family, weight 400
- **Line Height:** 150% for body text, 120% for headings
- **Font Sizes:** Responsive scale from 14px to 32px

### Spacing System
- **Base Unit:** 8px
- **Scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Component Padding:** 16px-24px
- **Section Margins:** 32px-48px

## 🧩 Component Architecture

### Data Flow
1. **App.tsx** - Main application state and routing
2. **Custom Hooks** - Data fetching and state management
3. **Components** - UI rendering and user interactions
4. **API Layer** - HTTP requests to backend
5. **Backend Models** - Data processing and storage

### Key Components

#### PostList
- Displays all posts in a card layout
- Handles post selection and navigation
- Shows loading states and empty states

#### PostView
- Shows detailed post content
- Integrates comment section
- Provides navigation back to post list

#### CommentSection
- Manages comment display and creation
- Handles top-level comment form
- Shows comment count and statistics

#### CommentTree
- Recursively renders nested comments
- Manages reply state across the tree
- Handles unlimited nesting depth

#### CommentItem
- Individual comment display
- Reply button and form integration
- Visual threading with indentation

## 🔧 Development Scripts

```bash
# Start both frontend and backend in development mode
npm run dev

# Start only the backend server
npm run server

# Build the frontend for production
npm run build

# Run ESLint for code quality
npm run lint

# Preview production build
npm run preview

# Type checking without compilation
npm run typecheck
```

## 🚀 Deployment

### Frontend Deployment
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to your hosting service (Netlify, Vercel, etc.)

### Backend Deployment
1. Set up your production server (Heroku, Railway, DigitalOcean, etc.)
2. Configure environment variables if needed
3. Deploy the `server/` directory
4. Update frontend API base URL to point to production backend

### Environment Variables
Create a `.env` file for production configuration:
```env
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://your-frontend-domain.com
DATABASE_URL=file:./dev.db
TYPESENSE_HOST=localhost
TYPESENSE_PORT=8108
TYPESENSE_PROTOCOL=http
TYPESENSE_API_KEY=your-typesense-api-key
```

### Database Setup
This project uses Prisma with SQLite. On first install, `npm install` runs `prisma generate`
automatically. To apply schema migrations:
```bash
npm run prisma:migrate
```

### Search Setup
Search is powered by [Typesense](https://typesense.org). Run a local instance (Docker or the
standalone binary) before starting the server:
```bash
typesense-server --data-dir=/tmp/typesense-data --api-key=xyz123devkey --listen-port=8108
```
On startup, the app creates the `posts` collection if it doesn't exist and backfills any existing
posts. If Typesense isn't running, the rest of the app still works — search requests just return a
503 until it's available.

## 🧪 Testing

### Manual Testing Checklist
- [ ] Create a new post
- [ ] View post details
- [ ] Add a top-level comment
- [ ] Reply to a comment
- [ ] Create nested replies (3+ levels deep)
- [ ] Navigate between posts
- [ ] Test responsive design on mobile
- [ ] Verify error handling with invalid data

### Future Testing Enhancements
- Unit tests with Jest and React Testing Library
- Integration tests for API endpoints
- End-to-end tests with Playwright or Cypress

## 🔮 Future Enhancements

### Planned Features
- **User Authentication** - Login/register system
- **User Profiles** - Avatar, username, profile pages
- **Vote System** - Upvote/downvote posts and comments
- **Comment Search** - Extend full-text search to comment content, not just posts
- **Categories/Tags** - Organize posts by topics
- **Real-time Updates** - WebSocket integration
- **Rich Text Editor** - Markdown support for posts/comments
- **Image Uploads** - Support for images in posts
- **Moderation Tools** - Report, hide, delete functionality

### Technical Improvements
- **Production Database** - Swap SQLite for Postgres/MySQL via Prisma's datasource config
- **Caching Layer** - Redis for performance
- **API Rate Limiting** - Prevent abuse
- **Input Sanitization** - XSS protection
- **Pagination** - Handle large datasets
- **SEO Optimization** - Meta tags and server-side rendering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test thoroughly before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Express.js** - For the minimal web framework
- **TypeScript** - For type-safe JavaScript development

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page for existing problems
2. Create a new issue with detailed description
3. Include steps to reproduce the problem
4. Provide system information (OS, Node.js version, browser)

---

**Built with ❤️ using React, TypeScript, Express.js, and Prisma**
