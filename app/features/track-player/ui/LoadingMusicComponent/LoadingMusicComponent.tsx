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
                        <Suspense  key={track.id} fallback={<CircularProgress size={40} sx={{color:'white'}}/>} >
                            <TrackComonent track={track} onPlay={ListenedItesm} />
                        </Suspense>
                    ))
                )
            }
        </div>
    )
}

export default memo(LoadingMusicComponent)