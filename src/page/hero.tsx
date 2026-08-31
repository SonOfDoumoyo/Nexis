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
    return (
        <button className={`${type == 1 ? 'bg-linear-to-r shadow-lg shadow-bright-purple from-deep-purple to-bright-purple':'backdrop-blur-[1px] border border-warm-gold'} px-6 py-3 text-[clamp(0.95rem,0.9vw,1.45rem)] rounded-full outline-0 cursor-pointer flex flex-row items-center gap-3 h-full text-center justify-between`}>{text}{arrow == true && (<FiArrowRight className="text-white"/>)}</button>
    )
}

export default function HeroSection(){
    const [showNav, setShowNav ] = useState<string>('hidden');

    const isMobile = useIsMobile()
    return (
        <section className={`${isMobile == true ? 'gap-80':'gap-40'}  flex flex-col w-full`}>
            <div className="flex flex-row justify-between relative items-center w-full">
                <img src={NexisLogo} alt="Nexis logo" className="w-[80px]"/>
                <nav className={`${isMobile == true ? `${showNav} absolute right-0 items-start flex flex-col bg-deep-purple/30 backdrop-blur-[3px] z-20 top-0 w-[50%] rounded-[6px]`:'flex flex-row gap-6'} list-none`}>
                    <li className={`${isMobile == true ? 'py-4 hover:px-5 hover:border-b px-4':''}`} onClick={() => {setShowNav('hidden')}}>Home</li>
                    <li className={`${isMobile == true ? 'py-4 hover:px-5 hover:border-b px-4':''}`} onClick={() => {setShowNav('hidden')}}>Services</li>
                    <li className={`${isMobile == true ? 'py-4 hover:px-5 hover:border-b px-4':''}`} onClick={() => {setShowNav('hidden')}}>Philosophy</li>
                    <li className={`${isMobile == true ? 'py-4 hover:px-5 hover:border-b px-4':''}`} onClick={() => {setShowNav('hidden')}}>About Us</li>
                    <li className={`${isMobile == true ? 'py-4 hover:px-5 hover:border-b px-4':''}`} onClick={() => {setShowNav('hidden')}}>Contact</li>
                </nav>
                <div className="flex flex-row gap-3 items-center"><CreateButton text="Let's Build" type={2} arrow={false}/>{isMobile == true && (<span className="p-4 rounded-full bg-transparent border border-bright-gold justify-center items-center" onClick={() => {setShowNav('block')}}><Menu size={11} strokeWidth={1.5}/></span>)}</div>
            </div>
            <div className="flex flex-col gap-8">
                <p className="text-bright-gold">WELCOME TO NEXIS</p>
                {isMobile ?
                    (<p className="font-sora text-6xl font-light flex flex-col gap-2"><span>Building With People,</span><span>Purpose, and</span><span className="text-primary-purple">Possibility.</span></p>)
                    :(<p className="font-sora font-normal text-5xl flex flex-col gap-2">Building With <span> People, Purpose, </span><span>and Possibility.</span></p>)
                }
                <p className="text-white/60 text-xl">We design, build, and scale digital solutions <br/>that connect people, ideas, and technology <br/>to drive real results.</p>
                <div className={`${isMobile == true ? 'flex-row':'flex-row'} h-full flex gap-3`}>
                    <CreateButton text="Explore Our services" type={1} arrow={true}/>
                    <CreateButton text="Learn More" type={2} arrow={false} />
                </div>
                <div className="mt-[30px] flex flex-col gap-5">
                    <span className="flex flex-row gap-4 items-center">
                        <span className="w-11 bg-linear-to-r from-deep-purple to-primary-purple h-[0.3px]"></span>
                        <p className="text-sm text-white/70">SCROLL TO EXPLORE</p>
                        <span className="w-11 bg-linear-to-r from-primary-purple to-deep-purple  h-[0.3px]"></span>
                    </span>
                    <div className={`${isMobile ? 'flex-col gap-11':'flex-row'} justify-between flex bg-primary-purple/15 backdrop-blur-[3px] border border-bright-gold/10 p-11 rounded-2xl`}>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? '':'border-r border-primary-purple/30 justify-center'}`}>
                            <Lightbulb className="text-warm-gold"/>
                            <span className="flex flex-col gap-1">
                                <p className="font-bold">Innovation Solutions</p>
                                <p>Built for the future.</p>
                            </span>
                        </div>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? '':'border-r border-primary-purple/30 justify-center'}`}>
                            <UsersRound className="text-warm-gold"/>
                            <span className="flex flex-col gap-1">
                                <p className="font-bold">People First</p>
                                <p>We build together.</p>
                            </span>
                        </div>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? '':'border-r border-primary-purple/30 justify-center'}`}>
                            <Globe2 className="text-warm-gold"/>
                            <span className="flex flex-col gap-1">
                                <p className="font-bold">Global Mindset</p>
                                <p>Local impact. Global vision.</p>
                            </span>
                        </div>
                        <div className={`flex w-full flex-row items-center gap-2 ${isMobile ? '':'justify-center'}`}>
                            <Target className="text-warm-gold"/>
                            <span className="flex flex-col gap-1">
                                <p className="font-bold">Driven by impact</p>
                                <p>Purpose in every product.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}