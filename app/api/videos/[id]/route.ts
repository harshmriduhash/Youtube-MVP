import { NextResponse } from 'next/server';
import { mockVideos } from '@/data/mockData';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const video = mockVideos.find(v => v.id === params.id);
  
  if (!video) {
    return NextResponse.json({ error: 'Video not found' }, { status: 404 });
  }
  
  return NextResponse.json(video);
}
