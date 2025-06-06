"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <button disabled>Loading...</button>;

  if (!session) {
    return (
      <button
        onClick={() => router.push("/login")}
        className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600"
      >
        Iniciar sesión
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span>Hola, {session.user?.name}</span>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Cerrar sesión
      </button>
    </div>
  );
}