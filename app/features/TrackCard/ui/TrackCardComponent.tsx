import { ITrackCardComponent } from "../model/types";
import { memo } from "react";
export default memo(function TrackCardComponent({ track, onPlay }: ITrackCardComponent) {
    return (
          <div 
            className="rounded-2xl text-black w-[320px] bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                            <audio 
                                onPlay={() => onPlay(track)}
                                className="w-full h-10 [&::-webkit-media-controls-panel]:bg-gray-200 [&::-webkit-media-controls-panel]:rounded-lg shadow-inner"
                                controls
                                >
                                <source src={track.audio} type="audio/mpeg" />
                            </audio>
                    </div>
                </div>
    )
})
