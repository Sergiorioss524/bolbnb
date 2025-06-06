"use client"
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Inicia sesión para continuar</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="px-6 py-3 bg-rose-500 text-white rounded hover:bg-rose-600"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
} 