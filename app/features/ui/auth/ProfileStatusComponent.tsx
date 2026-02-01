'use client'
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function ProfileStatusComponent() {
  const { data: session, status } = useSession();
  function Login() {
    signIn("github", { callbackUrl: "/" })
  }
    return (
        <div>
          {!session ? (
          <button onClick={() => Login()}>
              Войти через GitHub
          </button>
          ) : (
        <Link href="/profile">
          {session.user?.image && (
            <Image
              src={session.user.image} 
              alt={session.user?.name || "Аватар пользователя"}
              height={40}
              width={40}
            />
          )}
        </Link>
      )}
        </div>
      );
}