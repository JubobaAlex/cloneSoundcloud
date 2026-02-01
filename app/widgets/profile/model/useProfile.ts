import { useSession, signOut } from "next-auth/react";
import { IUser } from "./types";
export function useProfile() {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  const user = session?.user as IUser | undefined;
  return {
    session,
    isLoading: status === "loading",
    isAuthenticated: !!session,
    logout: handleLogout,
    user
  };
}