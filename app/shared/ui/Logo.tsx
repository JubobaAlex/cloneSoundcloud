import Link from "next/link";
import Image from "next/image";
export default function Logo() {
    return (
        <div>
            <Link className="flex flex-row items-center gap-1" href={'/'}>
                <Image 
                src={'/image/ico/logo.png'}
                alt="logo"
                height={50}
                width={50}
                />
                 <h2 
            className="text-3xl [text-shadow:0_2px_4px_black]"  
            style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>
                cloneSoundcloud
            </h2>
            </Link>
        </div>
    )
}