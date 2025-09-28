# YouTube 2.0 MVP Frontend

A modern YouTube clone built with **Next.js 14**, **TailwindCSS**, and **TypeScript**, designed to be deployed on **Vercel**.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Video Player**: Interactive video player with controls and AI-generated summary placeholder
- **Smart Search**: Advanced autocomplete with recent searches, trending suggestions, and real-time filtering
- **User Profile**: Complete profile page with videos, likes, and subscriptions
- **Comments System**: Interactive comments with likes and replies
- **Navigation**: Intuitive sidebar and top navigation with collapsible menu
- **Modern UI**: YouTube-inspired dark theme with smooth animations
- **Complete Page Structure**: Library, History, Settings, Help, and more
- **Keyboard Navigation**: Full keyboard support for search and navigation
- **Persistent Storage**: Recent searches and user preferences saved locally

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **State Management**: React Context API
- **Deployment**: Vercel

## 📁 Project Structure

```
youtube-2-mvp/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── videos/              # Video endpoints
│   │   │   └── [id]/            # Individual video endpoint
│   │   ├── search/              # Search endpoint
│   │   └── comments/            # Comments endpoint
│   ├── video/[id]/              # Dynamic video pages
│   ├── search/                  # Search results page
│   ├── profile/                 # User profile page
│   ├── trending/                # Trending videos page
│   ├── subscriptions/           # Subscriptions page
│   ├── library/                 # User's video library
│   ├── history/                 # Watch history page
│   ├── my-videos/               # User's uploaded videos
│   ├── watch-later/             # Watch later playlist
│   ├── liked/                   # Liked videos page
│   ├── settings/                # User settings page
│   ├── help/                    # Help center page
│   ├── report/                  # Content reporting page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── Navbar.tsx               # Top navigation
│   ├── Sidebar.tsx              # Collapsible side navigation
│   ├── VideoCard.tsx            # Video thumbnail card (grid/list)
│   ├── VideoPlayer.tsx          # Interactive video player
│   ├── CommentSection.tsx       # Comments with replies
│   ├── SearchResults.tsx        # Search results display
│   ├── SearchAutocomplete.tsx   # Smart search autocomplete
│   └── ProfilePage.tsx          # User profile component
├── context/                      # React Context
│   └── VideoContext.tsx         # Global state management
├── data/                         # Mock data
│   └── mockData.ts              # Sample videos, users, comments
├── public/                       # Static assets
├── tailwind.config.js           # TailwindCSS configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel deployment config
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd youtube-2-mvp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### 🏠 Home Page (`/`)
- Displays trending videos in a responsive grid
- Smart search with autocomplete functionality
- Responsive sidebar with collapsible navigation menu
- URL-based search query handling

### 🎥 Video Player (`/video/[id]`)
- Interactive video player with play/pause controls
- AI-generated summary placeholder (static content)
- Comments section with like/reply functionality
- Related videos sidebar
- Video controls and progress tracking

### 🔍 Search (`/search`)
- Advanced autocomplete with recent searches and trending suggestions
- Real-time search results with keyboard navigation
- List view with detailed video information
- URL-based search query handling

### 👤 Profile (`/profile`)
- User profile with avatar and comprehensive stats
- Tabs for Videos, Liked, and Subscriptions
- Upload and manage content (UI only)
- Channel analytics and metrics

### 📈 Trending (`/trending`)
- Videos sorted by view count
- Grid layout for easy browsing
- Performance metrics display

### 📺 Subscriptions (`/subscriptions`)
- Videos from subscribed channels
- Personalized content feed
- Channel management

### 📚 Library (`/library`)
- User's video library with statistics
- Uploaded videos and liked content
- Quick stats overview
- Content organization

### 🕒 History (`/history`)
- Watch history with progress tracking
- Timestamps and watch progress bars
- Clear history functionality
- Recent activity overview

### 🎬 My Videos (`/my-videos`)
- User's uploaded videos management
- Sorting by date, views, and likes
- Video statistics and analytics
- Edit and management tools

### ⏰ Watch Later (`/watch-later`)
- Saved videos for later viewing
- Play and remove functionality
- Organized playlist view

### ❤️ Liked Videos (`/liked`)
- All liked videos in one place
- Clean grid layout
- Easy access to favorite content

### ⚙️ Settings (`/settings`)
- **Account Management**: Profile info, email, channel description
- **Notifications**: Email, push, comment, and subscription alerts
- **Privacy**: Public/private settings, subscriber count visibility
- **Appearance**: Theme, language, video quality preferences
- **Data & Storage**: Download data, clear history, account deletion

### ❓ Help Center (`/help`)
- Searchable FAQ with expandable sections
- Contact support and live chat options
- Comprehensive help documentation
- Quick action buttons

### 🚩 Report Content (`/report`)
- Content reporting system
- Multiple report types (video, channel, comment)
- Detailed reporting reasons
- Privacy-focused reporting process

## 🎨 Design System

### Colors
- **Primary**: YouTube Red (#FF0000)
- **Background**: Dark (#0F0F0F)
- **Secondary**: Gray (#272727)
- **Light Gray**: (#3F3F3F)
- **Text**: White with various opacity levels

### Typography
- **Font**: Roboto (Google Fonts)
- **Weights**: 300, 400, 500, 700

### Components
- Responsive grid layouts (1-4 columns based on screen size)
- Hover effects and smooth transitions
- Custom scrollbars with dark theme
- Mobile-first design approach
- Collapsible sidebar navigation
- Interactive form controls and toggles

## 🔧 API Endpoints

### Videos
- `GET /api/videos` - Get all videos
- `GET /api/videos/[id]` - Get specific video

### Search
- `GET /api/search?q=query` - Search videos with filtering

### Comments
- `GET /api/comments` - Get comments for videos
- `POST /api/comments` - Add new comment

## 🔍 Search Features

### Smart Autocomplete
- **Recent Searches**: Last 5 searches saved to localStorage
- **Trending Suggestions**: Popular search terms
- **Video Suggestions**: Real-time matching from video titles, uploaders, and tags
- **Category Suggestions**: Video categories from your library
- **Keyboard Navigation**: Arrow keys, Enter, and Escape support

### Search Functionality
- **Real-time Filtering**: Instant results as you type
- **URL Integration**: Search queries update URL parameters
- **Multiple Match Types**: Title, description, tags, and uploader name
- **Case-insensitive**: Works regardless of capitalization

## 🚀 Deployment on Vercel

### Option 1: Deploy from GitHub

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Project name: `youtube-2-mvp`
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`

### Environment Variables

No environment variables are required for this MVP. All data is mocked.

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Customization

### Adding New Videos
Edit `data/mockData.ts` to add more sample videos:

```typescript
export const mockVideos: Video[] = [
  {
    id: 'unique-id',
    title: 'Your Video Title',
    description: 'Video description...',
    thumbnail: 'https://example.com/thumbnail.jpg',
    duration: '10:30',
    uploader: {
      id: 'user-id',
      name: 'Channel Name',
      avatar: 'https://example.com/avatar.jpg',
      subscribers: 1000000
    },
    views: 500000,
    likes: 25000,
    uploadDate: '2024-01-15',
    category: 'Technology',
    tags: ['tag1', 'tag2', 'tag3']
  }
  // Add more videos...
];
```

### Styling
Modify `tailwind.config.js` to customize the design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        youtube: {
          red: '#FF0000',
          dark: '#0F0F0F',
          gray: '#272727',
          lightGray: '#3F3F3F',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    }
  }
}
```

### Adding New Pages
Create new pages in the `app/` directory:

```typescript
// app/new-page/page.tsx
'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function NewPage() {
  return (
    <div className="bg-youtube-dark min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-white">New Page</h1>
          {/* Your content here */}
        </main>
      </div>
    </div>
  );
}
```

### Customizing Search Autocomplete
Modify `components/SearchAutocomplete.tsx` to add new suggestion types:

```typescript
// Add new suggestion types
const customSuggestions = [
  {
    id: 'custom-1',
    text: 'Custom Suggestion',
    type: 'custom' as const,
    icon: CustomIcon
  }
];
```

### Adding Features
- **Authentication**: Integrate with Auth0, Firebase, or NextAuth.js
- **Real API**: Replace mock data with actual API calls
- **Video Upload**: Add file upload functionality with drag & drop
- **Real-time**: Implement WebSocket for live comments and notifications
- **AI Integration**: Connect to OpenAI for video summaries and recommendations
- **Video Streaming**: Integrate with video streaming services
- **User Management**: Add user registration, login, and profile management
- **Monetization**: Add ads, subscriptions, and payment processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Key Features Summary

### ✨ What's New in This Version
- **🔍 Smart Search Autocomplete** - Advanced search with recent searches, trending suggestions, and real-time filtering
- **📱 Complete Page Structure** - 12+ fully functional pages including Library, History, Settings, Help, and more
- **⌨️ Keyboard Navigation** - Full keyboard support for search and navigation
- **💾 Persistent Storage** - Recent searches and user preferences saved locally
- **🎨 Enhanced UI/UX** - Collapsible sidebar, improved forms, and better mobile experience
- **🔧 Comprehensive Settings** - Account, notifications, privacy, appearance, and data management
- **📊 Analytics & Stats** - Video statistics, watch progress, and user metrics
- **🚩 Content Reporting** - Complete reporting system for videos, channels, and comments

### 🚀 Ready for Production
- **Vercel Deployment** - One-click deployment with optimized configuration
- **TypeScript** - Fully typed for better development experience
- **Responsive Design** - Works perfectly on all devices
- **Performance Optimized** - Fast loading and smooth animations
- **SEO Ready** - Proper meta tags and URL structure

## 🙏 Acknowledgments

- YouTube for design inspiration and user experience patterns
- Next.js team for the amazing framework and App Router
- TailwindCSS for the utility-first CSS framework
- Lucide for the beautiful and consistent icon set
- React team for the powerful component system

---

**Happy Coding! 🎉**

This YouTube 2.0 MVP is now a complete, production-ready application with all the essential features users expect from a modern video platform. Deploy it to Vercel and start building your video community today!

For questions or support, please open an issue on GitHub.
