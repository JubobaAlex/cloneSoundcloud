import { IApiMusic } from "../../auth/model/types";
export interface ITrackCardComponent {
    track: IApiMusic;
    onPlay: (track: IApiMusic) => void; 
}