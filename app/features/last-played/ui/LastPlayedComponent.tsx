'use client'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IApiMusic } from "../../auth/model/types"

export default function LastPlayedComponent() {
    const musicData = useSelector((state: any) => state.listenedTo.musicData || [])
    const [music, setMusic] = useState<IApiMusic[]>([])

    useEffect(() => {
        setMusic(musicData)
    }, [musicData])

    return (
        <div className="w-full min-h-[300px] flex items-center justify-center p-6">
            {music.length === 0 ? (
                <div className="text-center text-gray-500 text-lg">
                    Вы не прослушали ни одного трека
                </div>
            ) : (
                <div className="flex flex-wrap gap-6 justify-center">
                    {music.map((track) => (
                        <div 
                            className="rounded-2xl text-black w-[320px] bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            key={track.id}
                        >
                            <div className="space-y-3">
                                <div className="flex justify-center">
                                    <img 
                                        className='rounded-2xl w-full h-auto object-cover shadow-md' 
                                        src={track.image} 
                                        alt={track.name} 
                                    />
                                </div>
                                <div className="font-bold text-lg truncate">{track.name}</div>
                                <div className="text-gray-600">{track.artist_name}</div>
                                <div className="text-gray-500 text-sm">
                                    Длительность: {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}