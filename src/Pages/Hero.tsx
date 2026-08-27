import { FiArrowRight } from "react-icons/fi"
import NexisLogo from "../assets/nexis_logo.png"
import Spline from "@splinetool/react-spline"
import { Application } from "@splinetool/runtime"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { GiHamburgerMenu } from "react-icons/gi"
import {useIsLittleAndroid,useIsMobile} from "../Hooks"
import { FaX } from "react-icons/fa6"


interface ButtonProp {
    rounded?: boolean
    onClick?:()=>void
}

interface MobileNavProp{
    visible:boolean
    mobileNavRef: React.RefObject<HTMLDivElement | null>
}

function dropDownAnimation(mobileNavRef:React.RefObject<HTMLDivElement | null>,entrance:boolean = true){
    entrance ?
    gsap.fromTo(mobileNavRef.current,{
        x:window.innerWidth,
        opacity:0,
        duration:1,
    },{
        x:0,
        opacity:1,
        duration:1,
        ease:'back.out'
    }):
    gsap.to(mobileNavRef.current,{
        x:window.innerWidth,
        duration:1,
        ease:'power3.in'
    })
}


function SplineObject(){
    function onLoa(spline: Application) {
        // Access to Spline Application
        console.log("spline loaded", spline);
        // const topHand = spline.findObjectById("3114c2e4-9b2d-479a-bf55-0f9e0d295182");
        // console.log("topHand", topHand);
    }
    return (
        <Spline scene="https://prod.spline.design/a-4jNPF4Hn0VmtLm/scene.splinecode" className='absolute -z-[100] top-0 right-0 w-full h-full' onLoad={onLoa}/>
    );
}

function DesktopNav(){
    return(
        <div className="hidden lg:block">
            <ul className="flex list-style-none text-white uppercase font-medium gap-6">
                <li>Work</li>
                <li>Services</li>
                <li>About</li>
                <li>Philosophy</li>
                <li>Journal</li>
            </ul>
            <button className="rounded-xl text-[12px] font-medium uppercase text-white flex py-4 px-8 border-[0.5px] border-warm-gold/40 text-[13px]">LET'S BUILD</button>
        </div>
    )
}

function MobileNav({visible,mobileNavRef}:MobileNavProp){
    return(
        <div ref={mobileNavRef} className={"absolute opacity-[1] top-15.5 flex-col items-center bg-[#0a0611a3] right-4.75  backdrop-blur-[14px] " + `${visible ? 'flex':'hidden'}`}>
            <ul className="flex flex-col p-5 w-[200px] list-style-none text-white uppercase font-medium gap-6">
                <li>Work</li>
                <li>Services</li>
                <li>About</li>
                <li>Philosophy</li>
                <li>Journal</li>
            </ul>
            <button className="rounded-xl mb-4.25 text-[12px] font-medium uppercase text-white flex py-4 px-8 border-[3px] border-warm-gold/40 text-[13px]">LET'S BUILD</button>
        </div>
    )
}

function Header() {
    const [visible,setVisible] = useState(false)
    const mobileNavRef = useRef<HTMLDivElement>(null)
    return (
        <div className="flex items-center justify-between p-2.5">
            <img src={NexisLogo} alt="Nexis Logo" className="w-[100px]" />
            {!visible ? <GiHamburgerMenu className="block relative lg:hidden size-8 text-metallic-gold" onClick={()=>{setVisible(true);dropDownAnimation(mobileNavRef,true)}}/>: <FaX className="block relative lg:hidden size-8 text-metallic-gold" onClick={()=>{setVisible(false);dropDownAnimation(mobileNavRef,false)}}/>}
            <MobileNav visible={visible} mobileNavRef={mobileNavRef}/>
            <DesktopNav />
        </div>
    )
}

function HeroText() {
    const textRef = useRef(null)
    const divRef = useRef<HTMLDivElement>(null)
    const isLittleAndroid = useIsLittleAndroid()
    const isMobile = useIsMobile()
    // useGSAP(()=>{
    //     const tl = gsap.timeline()
    //     if (!divRef.current) return;
    //     tl.fromTo(".word",{
    //         y:-50,
    //         opacity:0,
    //         duration:0.6,
    //         ease:'sine.in'
    //     },{
    //         y:50,
    //         opacity:1,
    //         ease:'sine.out'
    //     })
    //     .from(textRef.current,{
    //         x:-200,
    //         opacity:0,
    //         duration:1,
    //         ease:'sine.in'
    //     })
    // },{scope:divRef})
    return (
        <div className={"flex flex-col lg:mt-12 p-5 " + `${!isMobile ? 'gap-7': isLittleAndroid ? 'mt-1 gap-7':'mt-28.75 gap-11.25'}`}>
            <p className="w-fit uppercase text-xl font-medium bg-linear-to-r from-0% from-primary-purple to-70% to-metallic-gold bg-clip-text text-transparent">Nexis / digital experiences</p>
            {/* <div ref={divRef} className="w-fit uppercase text-xl font-medium bg-linear-to-r from-0% from-primary-purple to-70% to-metallic-gold bg-clip-text text-transparent">
                <span className="word inline-block">Nexis </span> 
                <span className="word inline-block"> /</span> 
                <span className="word inline-block"> digital</span> 
                <span className="word inline-block"> experiences</span>
            </div> */}
            <p className="text-white text-[70px] uppercase font-bold  font-bebas leading-[1]" ref={textRef}>Your Business <br /> deserves to be <span className="bg-linear-to-r from-0% from-primary-purple to-50% to-metallic-gold bg-clip-text text-transparent">seen.</span></p>
            <p className="text-white text-[21px] font-medium leading-[1.2]">We turn hat you've built into a <br /> digital experience people remember</p>
            <div className="flex gap-2 items-center">
                <BuildButton rounded={true} />
                <button className="rounded-xl text-[12px] font-medium uppercase text-white flex py-4 px-8 border-[0.5px] border-warm-gold/40 text-[13px]">See our work</button>
            </div>
            {/* <div>
                <p className="uppercase [word-spacing:20px] text-white font-medium">Nexis + <span className="[word-spacing:3px]">Your business</span> = </p>
                    <div>
                        <p>Connection</p>
                    </div>
            </div> */}

        </div>
    )
}

function BuildButton({ rounded = false,onClick=()=>null}: ButtonProp) {
    return (
        <div>
            <button className={"flex gap-1 items-center text-white bg-linear-to-br from-0%  border-2 border-[#271252] uppercase font-medium " + `${!rounded ? 'rounded-3xl p-1.5 px-4 text-[15px] from-black to-[#7136D1]' : 'rounded-xl py-3 px-7 text-[16px] from-bright-purple to-black'}`}>Let's Build <FiArrowRight className={`${!rounded ? '' : 'size-5'}`} onClick={onClick}/></button>
        </div>
    )
}


export default function HeroSection() {
    return (
        <div className="relative z-[1000] bg-black">
            <Header />
            <div className=" p-4 min-h-[100vh]">
                <HeroText />
                {/* <SplineObject /> */}
            </div>
        </div>
        
    )
}