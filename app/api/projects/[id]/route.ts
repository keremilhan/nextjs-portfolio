import { NextResponse } from 'next/server';
import projects from '../data.json';
import { NextApiRequest } from 'next';

export async function GET(request: any, { params }: any) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'Project ID not provided' }, { status: 400 });
    }

    const project = projects.find(project => project.id === Number(id));

    if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
}
