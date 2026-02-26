'use client'
import { IApiMusic } from "@/app/features/auth/model/types";
import {  lazy, memo, Suspense, useState } from "react"
import { ILoadingMusicComponentProps } from "@/app/features/auth/model/types";
import { useDispatch, useSelector } from "react-redux";
import { addListenedItem } from '@/app/features/last-played/model/slice/ListenedToSlice';
import CircularProgress from '@mui/material/CircularProgress';


const TrackComonent = lazy(() => import("@/app/features/TrackCard/ui/TrackCardComponent"))

function LoadingMusicComponent({ initialData }: ILoadingMusicComponentProps) {
    
    const [tracks, setTracks] = useState<IApiMusic[]>(initialData)
     const dispatch = useDispatch()
    const musicData = useSelector((state:any) => state.listenedTo.musicData || [] )

    function ListenedItesm(track:IApiMusic) {
        dispatch(addListenedItem(track))
        console.log(musicData)
    }


    return (
        <div className="flex gap-6 justify-center flex-wrap">
            {
                tracks.length === 0 ? (
                    <div className="text-gray-500 text-lg">Нет доступных треков</div>
                ) : (
                    tracks.map((track) => (
                        <div key={track.id}>
                            <Suspense fallback={
                                <div style={{
                                     width: '320px',
                                    height: '480px',
                                    background: 'rgba(128, 128, 128, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px', 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CircularProgress size={40} sx={{ color: 'white'}} />
                                </div>
                            } >
                            <TrackComonent track={track} onPlay={ListenedItesm} />
                        </Suspense>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default memo(LoadingMusicComponent)