"use client";
import Image from "next/image";
import { useProfile } from "../model/useProfile";
import '../style/ProfileComponents.css'
import '../style/animation/ProfileComponents.css'

export default function ProfileComponent() {
  const { user, isLoading, isAuthenticated, logout } = useProfile();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!isAuthenticated) {
    return <div>Извините, возникли проблемы с профилем</div>;
  }

  return (
    <div className="block-profile">  
      <div className="flex mt-2">
        {user?.image && (
          <Image
            src={user.image}
            alt={user?.name || "Аватар пользователя"}
            height={120}
            width={120}
            className="ml-2 mt-2 mr-2 rounded-[45%]"
          />
        )}
        <div className="block-profile-info">
          <h2 className="text-black text-3xl">{user?.name || "Пользователь"}</h2>
            <button className="button-signOut-profile" onClick={logout}>
              Выйти из аккаунта
            </button>
        </div>
      </div>
    </div>
  );
}