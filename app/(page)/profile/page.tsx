import Header from "@/app/widgets/header/Header"
import ProfileComponents from "@/app/widgets/profile/ui/ProfileComponents"
export default function Profile() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <ProfileComponents />
      </div>
    </>
  )
}