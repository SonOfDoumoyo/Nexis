
import type { IconType } from "react-icons";
import { FiArrowRight, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import purpleAura from "../assets/nexis_standalone_assets/12_purple_energy.png"
import goldenAura from "../assets/nexis_standalone_assets/13_gold_energy.png"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

interface SocialProp{
    icon:IconType
    name:string
}

function PhilosophyPart(){
    useGSAP(()=>{
        gsap.fromTo('.philosophy',
        {
            opacity:0,
            duration:2,
        },
        {
            opacity:1,
            duration:2,
            stagger:0.4,
            ease:'power3.out',
            scrollTrigger:{
                trigger:'.philosophy',
                start:'top 100%',
                toggleActions:'play reverse play reverse'
            }

        })
    })
    return(
        <div className="relative border-b border-b-border-color bg-black p-2.5 flex flex-col items-center gap-1.5">
            <img src={purpleAura} alt="purple energy" className="absolute top-0 left-8.25 w-[50%] h-full lg:h-27.75 z-10 "/>
            <img src={goldenAura} alt="golden energy" className="absolute top-0 right-8.25 w-[50%] h-full lg:h-27.75"/>
            <p className="text-primary-purple uppercase font-medium z-100">our philosophy</p>
            <h1 className="uppercase text-center font-bebas lg:text-5xl text-[30px] text-white z-100"><span className="philosophy">We don't build websites.</span><br /><span className="philosophy">we build the moment someone decides</span><br/><span className="philosophy">your business is worth their</span><br /><span className="philosophy bg-linear-to-r from-0% from-primary-purple to-metallic-gold bg-clip-text text-transparent">attention.</span></h1>
        </div>
    )
}

function Socials({icon:Icon,name}:SocialProp){
    return(
        <div className="flex flex-col">
            <div className="size-13 flex items border border-border-color items-center justify-center rounded-[100%]">
                <Icon className="size-5 text-white"/>
            </div>
            <p className="text-white text-[13px] font-medium">{name}</p>
        </div>
    )
}

function Footer(){
    return(
        <div className="bg-black relative flex lg:flex-row flex-col p-3 w-full gap-[15%]">
            <img src={purpleAura} alt="purple energy" className="absolute bottom-0 right-8.25 w-[50%] h-full lg:h-27.75 z-10 "/>
            <img src={goldenAura} alt="golden energy" className="absolute bottom-0 left-8.25 w-[50%] h-full lg:h-27.75 z-10"/>
            <div className="flex flex-row order-2 lg:order-1 z-10 lg:pl-14 p-0 gap-5 self-center">
                <Socials icon={FiInstagram} name="Instagram"/>
                <Socials icon={FiLinkedin} name="Linkedin"/>
                <Socials icon={FiTwitter} name="X(Twitter)"/>
            </div>
            <div className="flex flex-col order-1 lg:order-2 z-10 items-center justify-self-center gap-1.5">
                <p className="uppercase text-white lg:text-5xl text-[30px] font-bebas">Ready to be <span className="bg-linear-to-r from-0% from-primary-purple to-metallic-gold bg-clip-text text-transparent">remembered</span></p>
                <p className="text-[#ffffff9d] font-medium text-center">Your business already has a story.<br />Let's give it an experience worthy of it.</p>
                <button className="uppercase flex  flex-row w-45.75 py-1.5 text-white text-[13px] self-center font-medium bg-linear-to-br from-20% from-primary-purple to-80% to-black items-center gap-2.5 justify-center border-2 p-1 rounded-[10px] border-border-color">
                    Build with Nexis <FiArrowRight className="size-4"/>
                </button>
            </div>
        </div>
    )
}


export default function Philosophy(){
    return(
        <div>
            <PhilosophyPart />
            <Footer />
        </div>
    )
}