import { FiArrowRight } from "react-icons/fi"
import NexisLogo from "../assets/nexis_logo.png"
// import Spline from "@splinetool/react-spline"
// import { Application } from "@splinetool/runtime"
import gsap from "gsap"
import {  useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { GiHamburgerMenu } from "react-icons/gi"
import {useIsLittleAndroid,useIsMobile} from "../Hooks"
import { FaX } from "react-icons/fa6"




interface ButtonProp {
    text:string
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


// function SplineObject(){
//     function onLoa(spline: Application) {
//         // Access to Spline Application
//         console.log("spline loaded", spline);
//         // const topHand = spline.findObjectById("3114c2e4-9b2d-479a-bf55-0f9e0d295182");
//         // console.log("topHand", topHand);
//     }
//     return (
//         <Spline scene="https://prod.spline.design/a-4jNPF4Hn0VmtLm/scene.splinecode" className='absolute z-[-100] top-0 right-0 w-full h-full' onLoad={onLoa}/>
//     );
// }

function DesktopNav(){
    return(
        <div className=" hidden gap-4 md:flex  lg:flex">
            <ul className="flex list-style-none text-white uppercase font-medium gap-10">
                <li className="hover:text-primary-purple cursor-pointer" onClick={() => {
                        document.getElementById("work")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                }}>
                    Work</li>
                <li className="hover:text-primary-purple cursor-pointer" onClick={() => {
                        document.getElementById("services")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                }}>
                    Services</li>
                <li className="hover:text-primary-purple cursor-pointer" onClick={() => {
                        document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                }}>
                    About
                </li>
                <li className="hover:text-primary-purple cursor-pointer" onClick={() => {
                        document.getElementById("philosophy")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                }}>
                    Philosophy</li>
            </ul>
            {/* <button className="rounded-xl font-medium uppercase text-white flex py-4 px-8 border-[0.5px] border-warm-gold/40 text-[13px]">LET'S BUILD</button> */}
        </div>
    )
}

function MobileNav({visible,mobileNavRef}:MobileNavProp){
    return(
        <div ref={mobileNavRef} className={"absolute opacity-[1] top-15.5 rounded-[10px_33px] flex-col items-center bg-transparent border-2 border-metallic-gold right-4.75  backdrop-blur-[14px] " + `${visible ? 'flex':'hidden'}`}>
            <ul className="flex flex-col p-5 w-50 list-style-none text-white uppercase font-medium gap-6 text-shadow-[1px_3px_3px_black]">
                <li className="hover:text-primary-purple">Work</li>
                <li className="hover:text-primary-purple">Services</li>
                <li className="hover:text-primary-purple">About</li>
                <li className="hover:text-primary-purple">Philosophy</li>
            </ul>
        </div>
    )
}

function Header() {
    const [visible,setVisible] = useState(false)
    const mobileNavRef = useRef<HTMLDivElement>(null)
    const isMobile = useIsMobile()
    return (
        <div className="flex items-center justify-between p-2.5">
            <img src={NexisLogo} alt="Nexis Logo" className="w-25" />
            {!visible ? <GiHamburgerMenu className="block relative lg:hidden md:hidden size-8 text-metallic-gold" onClick={()=>{setVisible(true);dropDownAnimation(mobileNavRef,true)}}/>: <FaX className="block relative lg:hidden size-8 text-metallic-gold" onClick={()=>{setVisible(false);dropDownAnimation(mobileNavRef,false)}}/>}
            <MobileNav visible={visible} mobileNavRef={mobileNavRef}/>
            <DesktopNav />
            {!isMobile && <button className="rounded-xl mb-4.25 md:mb-0 font-medium uppercase text-white flex py-4 px-8 border-[3px] border-warm-gold/40 text-[13px]">LET'S BUILD</button>}
        </div>
    )
}

function HeroText() {
    const textRef = useRef(null)
    // const divRef = useRef<HTMLDivElement>(null)
    const isLittleAndroid = useIsLittleAndroid()
    const isMobile = useIsMobile()
    useGSAP(()=>{
        gsap.fromTo('.head',
        {
           x:window.innerWidth,
        },
        {
            x:0,
            opacity:1,
            duration:1.5,
            stagger:0.4,
            ease:'back.out'
        }
)
    })
    return (
        <div className={"flex flex-col md:gap-15 md:mt-20 lg:mt-12 p-5 " + `${!isMobile ? 'gap-7': isLittleAndroid ? 'mt-1 gap-7':'mt-28.75 gap-11.25'}`}>
            <p className="w-fit uppercase text-xl font-medium bg-linear-to-r from-0% from-primary-purple to-70% to-metallic-gold bg-clip-text text-transparent">Nexis / digital experiences</p>
            {/* <div ref={divRef} className="w-fit uppercase text-xl font-medium bg-linear-to-r from-0% from-primary-purple to-70% to-metallic-gold bg-clip-text text-transparent">
                <span className="word inline-block">Nexis </span> 
                <span className="word inline-block"> /</span> 
                <span className="word inline-block"> digital</span> 
                <span className="word inline-block"> experiences</span>
            </div> */}
            <p className="text-white text-[70px] md:text-[6rem] uppercase font-bold  font-bebas leading-none" ref={textRef}><span className="head">Your Business</span> <br /> <span className="head">deserves to be</span> <span className="head bg-linear-to-r from-0% from-primary-purple to-50% to-metallic-gold bg-clip-text text-transparent">seen.</span></p>
            <p className="text-transparent text-[21px] font-medium leading-[1.2] bg-linear-to-r from-0% from-[#b8a3ce] to-70% to-metallic-gold bg-clip-text">We turn what you've built into a <br /> digital experience people remember</p>
            <div className="flex gap-2 items-center">
                <BuildButton rounded={true} text="Let's Build"/>
                <button className="rounded-xl font-medium uppercase text-white flex py-4 px-8 border-[3px] border-warm-gold/40 text-[13px] bg-linear-to-r from-0% from-[#75269f5c] to-[#a87a1933] backdrop-blur-xs">See our work</button>
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

export function BuildButton({text, rounded = false,onClick=()=>null}: ButtonProp) {
    return (
        <div>
            <button className={"flex gap-1 items-center text-white bg-linear-to-r from-0%  border-2 border-deep-purple uppercase font-medium " + `${!rounded ? 'rounded-3xl p-1.5 px-4 text-[15px] from-black to-primary-purple' : 'rounded-xl py-3 px-7 text-[16px] from-[#7a0e9d73] to-[#00000075] backdrop-blur-xs '}`}>{text} <FiArrowRight className={`${!rounded ? '' : 'size-5'}`} onClick={onClick}/></button>
        </div>
    )
}


export default function HeroSection() {
    return (
        <div id="work" className="hero relative z-1000 bg-black bg-cover bg-left lg:bg-right md:bg-left lg:bg-contain md:bg-cover">
            <Header />
            <div className=" p-4 min-h-screen">
                <HeroText />
            </div>
        </div>
        
    )
}