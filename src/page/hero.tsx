import NexisLogo from "../assets/nexis_logo.png"
import { useIsMobile } from "../Hooks"
import { FiArrowRight } from "react-icons/fi"
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Lightbulb,
  UsersRound,
  Globe2,
  Target
} from "lucide-react";


export function CreateButton({text, type, arrow}:any){
    const isMobile = useIsMobile();
    return (
        <button className={`${type == 1 ? 'bg-linear-to-r shadow-lg shadow-bright-purple from-deep-purple to-bright-purple':'backdrop-blur-[1px] border border-warm-gold'} ${isMobile == true ? 'py-2':'py-3'} px-6 text-[clamp(0.5rem,0.9vw,1.45rem)] rounded-full outline-0 cursor-pointer flex flex-row items-center gap-3 h-full text-center justify-between`}>{text}{arrow == true && (<FiArrowRight className="text-white"/>)}</button>
    )
}

export default function HeroSection(){
    const [showNav, setShowNav ] = useState<string>('hidden');

    const isMobile = useIsMobile()
    return (
        <section id="home" className={`${isMobile == true ? 'gap-50':'gap-40'}  flex flex-col w-full`}>
            <div className="flex flex-row justify-between relative items-center w-full">
                <img src={NexisLogo} alt="Nexis logo" className="w-[80px]"/>
                <nav className={`${isMobile == true ? `${showNav} absolute right-0 items-start flex flex-col bg-deep-purple/30 backdrop-blur-[3px] z-20 top-0 w-[50%] rounded-[6px]`:'flex flex-row gap-6'} list-none`}>
                    <li className={`${isMobile == true ? 'py-2 hover:px-5 hover:border-b px-4 text-[8px]':''}`} onClick={() => {setShowNav('hidden'); document.getElementById("home")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })}} >Home</li>
                    <li className={`${isMobile == true ? 'py-2 hover:px-5 hover:border-b px-4 text-[8px]':''}`} onClick={() => {setShowNav('hidden'); document.getElementById("service")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })}}>Services</li>
                    <li className={`${isMobile == true ? 'py-2 hover:px-5 hover:border-b px-4 text-[8px]':''}`} onClick={() => {setShowNav('hidden'); document.getElementById("philosophy")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })}}>Philosophy</li>
                    <li className={`${isMobile == true ? 'py-2 hover:px-5 hover:border-b px-4 text-[8px]':''}`} onClick={() => {setShowNav('hidden'); document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })}}>About Us</li>
                    <li className={`${isMobile == true ? 'py-2 hover:px-5 hover:border-b px-4 text-[8px]':''}`} onClick={() => {setShowNav('hidden');document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })}}>Contact</li>
                </nav>
                <div className="flex flex-row gap-2 items-center"><CreateButton text="Let's Build" type={2} arrow={false}/>{isMobile == true && (<span className={`${isMobile ? 'p-2':'p-3'} rounded-full bg-transparent border border-bright-gold justify-center items-center`} onClick={() => {setShowNav('block')}}><Menu size={11} strokeWidth={1.5}/></span>)}</div>
            </div>
            <div className="flex flex-col gap-5">
                <p className={`${isMobile ? 'text-[8px]':''} text-bright-gold font-bold`}>WELCOME TO NEXIS</p>
                {isMobile ?
                    (<p className="font-bebas text-3xl font-light flex flex-col"><span>Building With People,</span><span>Purpose, and</span><span className="text-primary-purple">Possibility.</span></p>)
                    :(<p className="font-bebas font-normal text-6xl flex flex-col gap-2">Building With <span> People, Purpose, </span><span>and Possibility.</span></p>)
                }
                <p className={`text-white/60 ${isMobile == true ? 'text-[8px]':'text-xl'}`}>We design, build, and scale digital solutions <br/>that connect people, ideas, and technology <br/>to drive real results.</p>
                <div className={`${isMobile == true ? 'flex-row':'flex-row'} h-full flex gap-3`}>
                    <CreateButton text="Explore Our services" type={1} arrow={true}/>
                    <CreateButton text="Learn More" type={2} arrow={false} />
                </div>
                <div className="mt-[30px] flex flex-col gap-3">
                    <span className="flex flex-row gap-2 items-center">
                        <span className="w-11 bg-linear-to-r from-deep-purple to-primary-purple h-[0.3px]"></span>
                        <p className={`text-white/70 ${isMobile ? 'text-[7px]':''}`}>SCROLL TO EXPLORE</p>
                        <span className="w-11 bg-linear-to-r from-primary-purple to-deep-purple  h-[0.3px]"></span>
                    </span>
                    <div className={`${isMobile ? 'flex-col gap-8 text-[8px]':'flex-row'} justify-between text-white/70 flex bg-primary-purple/15 backdrop-blur-[3px] border border-bright-gold/10 p-9 rounded-2xl`}>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? 'border-b border-primary-purple/30':'border-r border-primary-purple/30 justify-center'}`}>
                            <Lightbulb className="text-warm-gold" size={`${isMobile ? 20 : 25}`}/>
                            <span className="flex flex-col gap-[2px]">
                                <p className="font-bold text-warm-gold">Innovation Solutions</p>
                                <p>Built for the future.</p>
                            </span>
                        </div>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? 'border-b border-primary-purple/30':'border-r border-primary-purple/30 justify-center'}`}>
                            <UsersRound className="text-warm-gold" size={`${isMobile ? 20 : 25}`}/>
                            <span className="flex flex-col gap-[2px]">
                                <p className="font-bold text-warm-gold">People First</p>
                                <p>We build together.</p>
                            </span>
                        </div>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? 'border-b border-primary-purple/30':'border-r border-primary-purple/30 justify-center'}`}>
                            <Globe2 className="text-warm-gold" size={`${isMobile ? 20 : 25}`}/>
                            <span className="flex flex-col gap-[2px]">
                                <p className="font-bold text-warm-gold">Global Mindset</p>
                                <p>Local impact. Global vision.</p>
                            </span>
                        </div>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? 'border-b border-primary-purple/30':'justify-center'}`}>
                            <Target className="text-warm-gold" size={`${isMobile ? 20 : 25}`}/>
                            <span className="flex flex-col gap-[2px]">
                                <p className="font-bold text-warm-gold">Driven by impact</p>
                                <p>Purpose in every product.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}