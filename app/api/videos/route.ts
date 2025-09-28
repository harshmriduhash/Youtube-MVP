import { NextResponse } from 'next/server';
import { mockVideos } from '@/data/mockData';

export async function GET() {
  return NextResponse.json(mockVideos);
}
