import LastPlayedComponent from "@/app/features/last-played/ui/LastPlayedComponent"
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
      <div className="flex justify-center mb-5">
        <ProfileComponents />
      </div>
      <div className="flex justify-center mb-5">
         <BlockInfo title={'Не давно слушали'} />
      </div>
      <div>
          <LastPlayedComponent />
      </div>
    </>
  )
}