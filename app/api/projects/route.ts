import { NextResponse } from 'next/server';
import projects from './data.json';
import { NextApiRequest } from 'next';

export async function GET(request: NextApiRequest) {
    return NextResponse.json(projects);
}
