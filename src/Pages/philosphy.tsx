import { p } from "framer-motion/client"
import NexisLogo from "../assets/nexis_logo.png"

function Phil(){
    return (
        <div className="flex items-center text-center flex-col justify-center relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(src/assets/nexis_standalone_assets/03_futuristic_corridor.png)`}}>
            <p className="text-primary-purple text-xl">OUR PHILOSPHY</p>
            <p className="text-9xl font-bebas text-white mb-[120px]">WE DON'T BUILD WEBSITES.<br /> WE BUILD THE MOMENT SOMEONE DECIDES <br />YOUR BUSINESS IS WORTH THEIR <span className="text-primary-purple">ATTENTION.</span></p>
            <div className="flex flex-row justify-between w-[50%]">
                <p className="text-9xl font-bebas text-white text-start">READY TO BE <br /> <span className="text-metallic-gold">REMEMBERERD?</span></p>
                <div className="flex flex-col gap-11">
                    <p className="text-3xl text-white text-start">Your business already has a story <br />Let's give it an experience <br />Worthy of it.</p>
                    <button className="text-3xl text-white bg-warm-gold px-11 py-8">BUILD WITH NEXIS</button>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full mt-11">
                <div className="flex flex-row items-center gap-[20px]">
                    <img src={NexisLogo} alt="Nexis Logo" className="w-[80px]" />
                    <p className="text-gray-500 text-xl"><span className="text-2xl mr-2">&copy;</span>2026 Nexis. All Rights rreserved.</p>
                </div>
                
                <div className="flex flex-row gap-11">
                    <Socials  media="INSTAGRAM"/>
                    <Socials  media="LINKEDIN"/>
                    <Socials  media="TWITTER"/>
                    <Socials  media="BEHANCE"/>
                </div>
                <p className="text-2xl text-amber-50">hello@nexis.studio</p>
            </div>
        </div>
    )
}
interface SocialData{
    media: string
}

function Socials({media}:SocialData){
    return (
        <p className="text-gray-500 text-xl">{media}</p>
    )
}

export default function Philosophy(){
    return (
        <div className="bg-black px-7 pb-7 border-t pt-11">
            <Phil />
        </div>
    )
}