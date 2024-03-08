import { NextRequest, NextResponse } from 'next/server';
import projects from './data.json';

export async function GET(request: Request | NextRequest) {
    return NextResponse.json(projects);
}
