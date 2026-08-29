
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BuildButton } from "./Hero";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)


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
        <div className="relative backdrop-blur-[2px] p-2.5 flex flex-col items-center gap-1.5">
            <p className="text-primary-purple uppercase font-medium z-100">our philosophy</p>
            <h1 className="uppercase text-center font-bebas lg:text-5xl text-[30px] text-white z-100"><span className="philosophy">We don't build websites.</span><br /><span className="philosophy">we build the moment someone decides</span><br/><span className="philosophy">your business is worth their</span><br /><span className="philosophy bg-linear-to-r from-0% from-primary-purple to-metallic-gold bg-clip-text text-transparent">attention.</span></h1>
        </div>
    )
}

function Socials(){
    return(
        <div className="flex flex-col p-4">
            <div className="flex flex-row order-2 lg:order-1 z-10 lg:pl-14 p-0 text-white gap-5 self-center">
                <div className="flex flex-row gap-4 items-center"><FiInstagram /> <p className="">Instagram</p></div>
                <div className="flex flex-row gap-4 items-center"><FiLinkedin/><p>LinkedIn</p></div>
                <div className="flex flex-row gap-4 items-center"><FiTwitter/><p>X</p></div>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <div className=" relative backdrop-brightness-[0.5] items-start justify-center flex lg:flex-row flex-col p-3 w-full lg:gap-[5%] gap-7.5 md:gap-[15%]">
            <p className="uppercase text-white lg:text-5xl text-[30px] font-bebas">Ready to be <br/><span className="bg-linear-to-r from-0% from-primary-purple to-metallic-gold bg-clip-text text-transparent">remembered</span></p>
            <div className="flex flex-col gap-8">
                <p className="text-[#ffffff9d] font-medium">Your business already has a story.<br />Let's give it an experience worthy of it.</p>
                <BuildButton text="Build with nexis" rounded={true}/>
            </div>
        </div>
    )
}


export default function Philosophy(){
    return(
        <div id="philosophy" className="footer flex flex-col items-center relative bg-size-[100%_100%,50%_100%,50%_100%] lg:bg-size-[100%_100%,37%_100%,37%_100%] md:bg-size-[100%_100%,37%_100%,37%_100%]">
            <PhilosophyPart />
            <Footer />
            {/* <img src={RightPillar} alt="rightPillar" className="absolute right-0"/>
            <img src={LeftPillar} alt="leftPillar" className="absolute left-0"/> */}
            <Socials/>
        </div>
    )
}