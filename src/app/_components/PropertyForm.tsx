'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

interface PropertyFormData {
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  images: FileList | null;
}

export default function PropertyForm() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState<PropertyFormData>({
    title: '',
    description: '',
    price: 0,
    location: '',
    bedrooms: 1,
    bathrooms: 1,
    images: null,
  });
  const [loading, setLoading] = useState(false);

  // Loading state
  if (status === "loading") return <div>Loading...</div>;

  // Not logged in
  if (!session) return <div>Please log in to access this page.</div>;

  // Not a verified host
  const user = session.user as { role?: string; isVerified?: boolean };
  if (user.role !== "host" || !user.isVerified) {
    return <div>Only verified hosts can list properties.</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'images' && value) {
          Array.from(value).forEach((file) => {
            form.append('images', file as Blob);
          });
        } else {
          form.append(key, String(value));
        }
      });

      const response = await fetch('/api/properties', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) throw new Error('Failed to create property');

      router.push('/properties');
      router.refresh();
    } catch (error) {
      console.error('Error creating property:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">List Your Property</h1>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Property Title
          </label>
          <input
            type="text"
            id="title"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price per night ($)
            </label>
            <input
              type="number"
              id="price"
              required
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
              Bedrooms
            </label>
            <input
              type="number"
              id="bedrooms"
              required
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.bedrooms}
              onChange={(e) => setFormData({ ...formData, bedrooms: Number(e.target.value) })}
            />
          </div>

          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
              Bathrooms
            </label>
            <input
              type="number"
              id="bathrooms"
              required
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.bathrooms}
              onChange={(e) => setFormData({ ...formData, bathrooms: Number(e.target.value) })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            Property Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            onChange={(e) => setFormData({ ...formData, images: e.target.files })}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
      >
        {loading ? 'Creating...' : 'Create Listing'}
      </button>
    </form>
  );
} 