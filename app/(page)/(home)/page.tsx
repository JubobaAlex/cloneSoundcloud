import BlockInfo from "@/app/shared/BlockInfo/ui/BlockInfo";
import Header from "@/app/widgets/header/ui/HeaderComponent";
import LiverTape from "@/app/widgets/liverTape/ui/LiverTapeComponent";
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center mb-20">
        <BlockInfo title={'Лента песен'}/>
      </div>
      <div>
       <LiverTape />
      </div>
    </>
  )
}