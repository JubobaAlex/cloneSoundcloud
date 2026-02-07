'use client'
import { IApiMusic } from "@/app/features/auth/model/types";
import { useState } from "react"
import { ILoadingMusicComponentProps } from "@/app/features/auth/model/types";
export default function LoadingMusicComponent({ initialData }: ILoadingMusicComponentProps) {
    const [tracks, setTracks] = useState<IApiMusic[]>(initialData)

    return (
        <div className="flex gap-2 justify-center flex-wrap">
            {
             tracks.length === 0 ? (
                <div>Нет доступных треков</div>
            ) : (
                tracks.map((track) => (
                    <div className="text-xl rounded-[20px] text-black w-[300px] bg-gray-300 w-[320px]" key={track.id}>
                       <div>
                        <div className="flex my-1.5 justify-center">
                        <img className='rounded-[20px]'src={track.image} alt={track.name} />
                        </div>
                            <div>{track.name}</div>
                            <div>{track.artist_name}</div>
                            <div>Длительность: {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}</div>
                            <audio onClick={() => console.log('222')} className="w-full h-10 rounded-lg [&::-webkit-media-controls-panel]:bg-gray-200 [&::-webkit-media-controls-panel]:rounded-lg" controls>
                                <source src={track.audio} type="audio/mpeg" />
                            </audio>
                       </div>
                    </div>
                ))
            )}
        </div>
    )
}