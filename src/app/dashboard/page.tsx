"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return null;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Panel de administración de propiedades</h1>
      <p className="mb-4">Bienvenido, {session.user?.name}. Aquí podrás administrar tus propiedades.</p>
      {/* Aquí puedes agregar la lógica para mostrar, crear, editar o eliminar propiedades */}
      <div className="border rounded p-6 bg-white shadow">
        <p className="text-gray-600">(Próximamente) Aquí aparecerán tus propiedades para administrar.</p>
      </div>
    </div>
  );
} 