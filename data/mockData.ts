export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  uploader: {
    id: string;
    name: string;
    avatar: string;
    subscribers: number;
  };
  views: number;
  likes: number;
  uploadDate: string;
  category: string;
  tags: string[];
}

export interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  likes: number;
  replies: Comment[];
  timestamp: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  subscribers: number;
  videos: Video[];
  likedVideos: string[];
  subscriptions: string[];
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'How to Build a Modern Web App with Next.js and TailwindCSS',
    description: 'Learn how to create a beautiful, responsive web application using Next.js 14 and TailwindCSS. We\'ll cover everything from setup to deployment.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '15:30',
    uploader: {
      id: 'user1',
      name: 'Tech Tutorials',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      subscribers: 1250000
    },
    views: 2450000,
    likes: 89000,
    uploadDate: '2024-01-15',
    category: 'Technology',
    tags: ['nextjs', 'tailwindcss', 'react', 'web development']
  },
  {
    id: '2',
    title: 'Amazing Nature Documentary - Wildlife in 4K',
    description: 'Experience the beauty of nature with this stunning 4K wildlife documentary featuring rare animals and breathtaking landscapes.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '42:15',
    uploader: {
      id: 'user2',
      name: 'Nature Channel',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      subscribers: 890000
    },
    views: 1200000,
    likes: 45000,
    uploadDate: '2024-01-12',
    category: 'Nature',
    tags: ['nature', 'wildlife', 'documentary', '4k']
  },
  {
    id: '3',
    title: 'Cooking Masterclass: Perfect Pasta from Scratch',
    description: 'Join our master chef as they teach you how to make perfect pasta from scratch, including different shapes and sauces.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '28:45',
    uploader: {
      id: 'user3',
      name: 'Chef Master',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      subscribers: 2100000
    },
    views: 890000,
    likes: 67000,
    uploadDate: '2024-01-10',
    category: 'Cooking',
    tags: ['cooking', 'pasta', 'italian', 'recipe']
  },
  {
    id: '4',
    title: 'Gaming Review: Latest AAA Game Release',
    description: 'In-depth review of the latest AAA game release, covering gameplay, graphics, story, and overall experience.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '35:20',
    uploader: {
      id: 'user4',
      name: 'Game Reviews Pro',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      subscribers: 1560000
    },
    views: 2100000,
    likes: 125000,
    uploadDate: '2024-01-08',
    category: 'Gaming',
    tags: ['gaming', 'review', 'aaa', 'console']
  },
  {
    id: '5',
    title: 'Fitness Workout: 30-Minute Full Body HIIT',
    description: 'High-intensity interval training workout that targets your entire body in just 30 minutes. Perfect for busy schedules!',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '30:00',
    uploader: {
      id: 'user5',
      name: 'FitLife Channel',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      subscribers: 980000
    },
    views: 1560000,
    likes: 78000,
    uploadDate: '2024-01-05',
    category: 'Fitness',
    tags: ['fitness', 'hiit', 'workout', 'cardio']
  },
  {
    id: '6',
    title: 'Music Production Tutorial: Creating Beats in FL Studio',
    description: 'Learn the fundamentals of beat making and music production using FL Studio. Perfect for beginners!',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '22:10',
    uploader: {
      id: 'user6',
      name: 'Music Producer',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      subscribers: 450000
    },
    views: 780000,
    likes: 34000,
    uploadDate: '2024-01-03',
    category: 'Music',
    tags: ['music', 'production', 'fl studio', 'beats']
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    author: {
      id: 'commenter1',
      name: 'John Doe',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    text: 'Great tutorial! Really helped me understand the concepts better.',
    likes: 45,
    replies: [
      {
        id: '1-1',
        author: {
          id: 'commenter2',
          name: 'Tech Tutorials',
          avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
        },
        text: 'Thanks for watching! Glad it was helpful.',
        likes: 12,
        replies: [],
        timestamp: '2024-01-15T10:30:00Z'
      }
    ],
    timestamp: '2024-01-15T10:15:00Z'
  },
  {
    id: '2',
    author: {
      id: 'commenter3',
      name: 'Sarah Wilson',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    text: 'Could you make a follow-up video about advanced techniques?',
    likes: 23,
    replies: [],
    timestamp: '2024-01-15T11:45:00Z'
  },
  {
    id: '3',
    author: {
      id: 'commenter4',
      name: 'Mike Chen',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    text: 'This is exactly what I was looking for. Clear explanations and good pacing.',
    likes: 67,
    replies: [],
    timestamp: '2024-01-15T14:20:00Z'
  }
];

export const mockUser: User = {
  id: 'current-user',
  name: 'Current User',
  email: 'user@example.com',
  avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  subscribers: 50000,
  videos: mockVideos.slice(0, 3),
  likedVideos: ['1', '3', '5'],
  subscriptions: ['user1', 'user3', 'user5']
};
