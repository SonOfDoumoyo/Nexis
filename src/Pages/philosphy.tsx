
import type { IconType } from "react-icons";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BuildButton } from "./Hero";
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
        <div className="relative backdrop-blur-[2px] border-b border-b-border-color p-2.5 flex flex-col items-center gap-1.5">
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
        <div className=" relative backdrop-brightness-[0.5] flex lg:flex-row flex-col p-3 w-full lg:gap-[15%] gap-7.5 md:gap-[15%]">
            <div className="flex flex-row order-2 lg:order-1 z-10 lg:pl-14 p-0 gap-5 self-center">
                <Socials icon={FiInstagram} name="Instagram"/>
                <Socials icon={FiLinkedin} name="Linkedin"/>
                <Socials icon={FiTwitter} name="X(Twitter)"/>
            </div>
            <div className="flex flex-col order-1 lg:order-2 z-10 lg:translate-x-[-25%] items-center justify-self-center gap-1.5">
                <p className="uppercase text-white lg:text-5xl text-[30px] font-bebas">Ready to be <span className="bg-linear-to-r from-0% from-primary-purple to-metallic-gold bg-clip-text text-transparent">remembered</span></p>
                <p className="text-[#ffffff9d] font-medium text-center">Your business already has a story.<br />Let's give it an experience worthy of it.</p>
                <BuildButton text="Build with nexis" rounded={true}/>
            </div>
        </div>
    )
}


export default function Philosophy(){
    return(
        <div className="footer relative bg-size-[100%_100%,50%_100%,50%_100%] lg:bg-size-[100%_100%,37%_100%,37%_100%] md:bg-size-[100%_100%,37%_100%,37%_100%]">
            <PhilosophyPart />
            <Footer />
            {/* <img src={RightPillar} alt="rightPillar" className="absolute right-0"/>
            <img src={LeftPillar} alt="leftPillar" className="absolute left-0"/> */}
        </div>
    )
}