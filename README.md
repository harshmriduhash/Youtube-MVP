# YouTube 2.0 MVP Frontend

A modern YouTube clone built with **Next.js 14**, **TailwindCSS**, and **TypeScript**, designed to be deployed on **Vercel**.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Video Player**: Interactive video player with controls and AI-generated summary placeholder
- **Search Functionality**: Real-time search with filtering capabilities
- **User Profile**: Complete profile page with videos, likes, and subscriptions
- **Comments System**: Interactive comments with likes and replies
- **Navigation**: Intuitive sidebar and top navigation
- **Modern UI**: YouTube-inspired dark theme with smooth animations

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
│   │   ├── search/              # Search endpoint
│   │   └── comments/            # Comments endpoint
│   ├── video/[id]/              # Dynamic video pages
│   ├── search/                  # Search results page
│   ├── profile/                 # User profile page
│   ├── trending/                # Trending videos page
│   ├── subscriptions/           # Subscriptions page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── Navbar.tsx               # Top navigation
│   ├── Sidebar.tsx              # Side navigation
│   ├── VideoCard.tsx            # Video thumbnail card
│   ├── VideoPlayer.tsx          # Video player component
│   ├── CommentSection.tsx       # Comments section
│   ├── SearchResults.tsx        # Search results display
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
- Search functionality in the top navigation
- Responsive sidebar with navigation menu

### 🎥 Video Player (`/video/[id]`)
- Interactive video player with play/pause controls
- AI-generated summary placeholder (static content)
- Comments section with like/reply functionality
- Related videos sidebar

### 🔍 Search (`/search`)
- Real-time search results
- List view with detailed video information
- Search filters and sorting

### 👤 Profile (`/profile`)
- User profile with avatar and stats
- Tabs for Videos, Liked, and Subscriptions
- Upload and manage content (UI only)

### 📈 Trending (`/trending`)
- Videos sorted by view count
- Grid layout for easy browsing

### 📺 Subscriptions (`/subscriptions`)
- Videos from subscribed channels
- Personalized content feed

## 🎨 Design System

### Colors
- **Primary**: YouTube Red (#FF0000)
- **Background**: Dark (#0F0F0F)
- **Secondary**: Gray (#272727)
- **Text**: White with various opacity levels

### Typography
- **Font**: Roboto (Google Fonts)
- **Weights**: 300, 400, 500, 700

### Components
- Responsive grid layouts
- Hover effects and transitions
- Custom scrollbars
- Mobile-first design approach

## 🔧 API Endpoints

### Videos
- `GET /api/videos` - Get all videos
- `GET /api/videos/[id]` - Get specific video

### Search
- `GET /api/search?q=query` - Search videos

### Comments
- `GET /api/comments` - Get comments
- `POST /api/comments` - Add new comment

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
  // Add your video objects here
];
```

### Styling
Modify `tailwind.config.js` to customize the design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      }
    }
  }
}
```

### Adding Features
- **Authentication**: Integrate with Auth0, Firebase, or NextAuth.js
- **Real API**: Replace mock data with actual API calls
- **Video Upload**: Add file upload functionality
- **Real-time**: Implement WebSocket for live comments
- **AI Integration**: Connect to OpenAI for video summaries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- YouTube for design inspiration
- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Lucide for the beautiful icons

---

**Happy Coding! 🎉**

For questions or support, please open an issue on GitHub.
