import BlockInfo from "@/app/shared/BlockInfo/ui/BlockInfo";
import Header from "@/app/widgets/header/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <BlockInfo title={'Лента песень'}/>
      </div>
    </>
  )
}