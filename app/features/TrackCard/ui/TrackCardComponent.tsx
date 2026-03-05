import { ITrackCardComponent } from "../model/types";
import { memo } from "react";

export default memo(function TrackCardComponent({ track, onPlay }: ITrackCardComponent) {
    return (
        <div 
            className="rounded-2xl w-[280px] bg-white p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-200/80 hover:border-blue-200"
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

                <div className="pt-1">
                    <audio 
                        onPlay={() => onPlay(track)}
                        className="w-full h-9 [&::-webkit-media-controls-panel]:bg-gray-50 [&::-webkit-media-controls-panel]:rounded-lg [&::-webkit-media-controls-play-button]:text-blue-500 [&::-webkit-media-controls-current-time-display]:text-gray-600 [&::-webkit-media-controls-time-remaining-display]:text-gray-600"
                        controls
                    >
                        <source src={track.audio} type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        </div>
    );
});