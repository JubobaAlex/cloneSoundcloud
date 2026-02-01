"use client";

import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Загрузка...</div>;
  }

  return (
      <div>
        {session ? (
          <div>
              
        <h1>Вы вошли!</h1>
        <p>Добро пожаловать, {session.user?.name}!</p>
        
        <div>
          {session.user?.image && (
            <img
              src={session.user.image}
              alt="Avatar"
            />
          )}
          <div>
            <h2>{session.user?.name || "Пользователь"}</h2>
            <p>{session.user?.email || "Email не указан"}</p>
          </div>
        </div>

        <button onClick={() => signOut({ callbackUrl: "/" })}>
          Выйти из аккаунта
        </button>
      </div>
        ) : (
          <div>Извините вознкили проблемы с профилем</div>    
        )
      
      }
      </div>
  );
}