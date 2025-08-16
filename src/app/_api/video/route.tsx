import { NextRequest, NextResponse } from 'next/server';
import handler from 'next-video/request-handler';

export async function GET(request: NextRequest) {
  // Create a mock response object or use NextResponse
  const response = new NextResponse();
  return handler(request, response);
}

export async function POST(request: NextRequest) {
  const response = new NextResponse();
  return handler(request, response);
}