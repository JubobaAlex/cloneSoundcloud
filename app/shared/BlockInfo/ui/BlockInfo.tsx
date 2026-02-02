import { IBlockInfoProps } from "../model/types"
export default function BlockInfo({title}: IBlockInfoProps) {
    return (
        <div className="flex justify-center rounded-[20px] items-center w-150 h-20 bg-[linear-gradient(20deg,white,silver)]">
            <span className="text-black font-bold text-2xl">{title}</span>
        </div>
    )
}