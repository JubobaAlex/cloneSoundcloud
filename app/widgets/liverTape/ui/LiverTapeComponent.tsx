import { getInitialDataMusicApi } from '@/app/entities/lib/getInitialDataMusicApi/getInitialDataMusicApi'
import dynamic from 'next/dynamic'

const LoadingMusicComponent = dynamic(
  () => import("@/app/features/track-player/ui/LoadingMusicComponent/LoadingMusicComponent")
)

export default async function LiverTape() {
  const apiUrl = process.env.NEXT_PUBLIC_MUSIC_API_URL;
  
  if (!apiUrl) {
    return <div>API_URL не настроен</div>;
  }
  
  const initialData = await getInitialDataMusicApi(apiUrl);
  
  return (
    <div>
      <LoadingMusicComponent initialData={initialData} />
    </div>
  );
}