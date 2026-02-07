import BlockInfo from "@/app/shared/BlockInfo/ui/BlockInfo"
import Header from "@/app/widgets/header/ui/HeaderComponent"
import ProfileComponents from "@/app/widgets/profile/ui/ProfileComponents"
export default function Profile() {
  return (
    <>
      <Header />
      <div className="flex justify-center mb-5">
        <BlockInfo title={'Ваш профиль'} />
      </div>
      <div className="flex justify-center">
        <ProfileComponents />
      </div>
    </>
  )
}