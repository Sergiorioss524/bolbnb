"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BecomeHostButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleClick = () => {
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm font-medium hover:text-rose-500"
    >
      Conviértete en anfitrión
    </button>
  );
} 