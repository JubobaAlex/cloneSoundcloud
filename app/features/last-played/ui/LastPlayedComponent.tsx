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
                            className="rounded-2xl w-[280px] bg-white p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-200/80 hover:border-blue-200"
                            key={track.id}
                        >
                            <div className="space-y-3">
                                <div className="relative overflow-hidden rounded-xl group">
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl" />
                                    <img 
                                        className='w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300' 
                                        src={track.image} 
                                        alt={track.name} 
                                    />
                                    <div className="absolute bottom-2 right-2 z-20">
                                        <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                            {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-bold text-gray-800 truncate text-base">
                                        {track.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 truncate flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                        </svg>
                                        {track.artist_name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}