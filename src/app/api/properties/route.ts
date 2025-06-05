import { NextResponse } from 'next/server';
import { auth } from '@/app/auth';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const location = formData.get('location') as string;
    const bedrooms = Number(formData.get('bedrooms'));
    const bathrooms = Number(formData.get('bathrooms'));
    const images = formData.getAll('images') as File[];

    // Here you would typically:
    // 1. Upload images to a cloud storage service (e.g., S3, Cloudinary)
    // 2. Get the URLs of the uploaded images
    // For now, we'll just store the property without images

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
        location,
        bedrooms,
        bathrooms,
        userId: session.user.id,
        // imageUrls: [], // Add this field after implementing image upload
      },
    });

    return NextResponse.json(property);
  } catch (error) {
    console.error('Error creating property:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
} 