import { IBlockInfoProps } from "../model/types"
import '../style/BlockInfo.css'
export default function BlockInfo({title}: IBlockInfoProps) {
    return (
        <div className="block-info flex justify-center rounded-[20px] items-center w-150 h-20 bg-[linear-gradient(20deg,white,silver)]">
            <span className="text-black font-bold text-2xl">{title}</span>
        </div>
    )
}