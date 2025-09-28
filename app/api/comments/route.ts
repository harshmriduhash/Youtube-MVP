import { NextResponse } from 'next/server';
import { mockComments } from '@/data/mockData';

export async function GET() {
  return NextResponse.json(mockComments);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // In a real app, you would save the comment to a database
  const newComment = {
    id: Date.now().toString(),
    author: {
      id: 'current-user',
      name: 'Current User',
      avatar: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    text: body.text,
    likes: 0,
    replies: [],
    timestamp: new Date().toISOString()
  };

  return NextResponse.json(newComment, { status: 201 });
}
