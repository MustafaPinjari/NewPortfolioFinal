import { NextRequest, NextResponse } from 'next/server';
import { getContributions } from '@/app/about/github-contributions/github';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'MustafaPinjari';
    const year = parseInt(searchParams.get('year') || '2024');

    const contributions = await getContributions(username, year);

    return NextResponse.json(contributions);
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch GitHub contributions',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
