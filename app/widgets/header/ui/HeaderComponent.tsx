import ProfileStatusComponent from "@/app/features/auth/ui/ProfileStatusComponent/ProfileStatusComponent";
import Logo from "@/app/shared/Logo/ui/Logo";

export default function Header() {
    return (
        <header className="flex items-center h-20 justify-between mb-2 px-5 border-b-1 border-b-gray-700">
            <Logo />
            <ProfileStatusComponent />
        </header>
    )
}