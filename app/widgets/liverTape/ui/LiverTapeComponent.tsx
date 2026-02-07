import LoadingMusicComponent from "@/app/features/music/ui/LoadingMusicСomponent/LoadingMusicComponent";
import {getInitialDataMusicApi} from '@/app/entities/lib/getInitialDataMusicApi/getInitialDataMusicApi'

export default async function LiverTape() {
    const apiUrl = process.env.NEXT_PUBLIC_MUSIC_API_URL;

    
    if (!apiUrl) {
        console.error('API_URL is not defined');
        return <div>API_URL не настроен. Проверь .env.local файл</div>;
    }
    
    const initialData = await getInitialDataMusicApi(apiUrl);
    return (
        <div>
            <LoadingMusicComponent initialData={initialData} />
        </div>
    );
}