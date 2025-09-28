import { NextRequest, NextResponse } from 'next/server';
import { mockVideos } from '@/data/mockData';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([]);
  }

  const filteredVideos = mockVideos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.description.toLowerCase().includes(query.toLowerCase()) ||
    video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
    video.uploader.name.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filteredVideos);
}
