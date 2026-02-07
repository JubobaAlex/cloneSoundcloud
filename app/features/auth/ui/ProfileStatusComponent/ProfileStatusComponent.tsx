'use client'
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import '@/app/features/auth/style/animation/ProfileStatusComponent.css'
import '@/app/features/auth/style/ProfileStatusComponent.css'
export default function ProfileStatusComponent() {
  const { data: session, status } = useSession();
  function Login() {
    signIn("github", { callbackUrl: "/" })
  }
    return (
        <div>
          {!session ? (
          <button 
              className="button-login"
              onClick={() => Login()}
           >
              Войти через GitHub
          </button>
          ) : (
        <Link href="/profile">
          {session.user?.image && (
            <Image
              src={session.user.image} 
              alt={session.user?.name || "Аватар пользователя"}
              height={64}
              width={64}
              className="rounded-[45%] profile-logo"
            />
          )}
        </Link>
      )}
        </div>
      );
}