import { FaArrowRight, FaCheck, FaX } from "react-icons/fa6"
import {FiArrowRight,} from "react-icons/fi"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface listDataProp{
    good?: boolean
    text: string
}

function ListData({good = false,text}:listDataProp){
    return(
        <div className="texts flex items-center gap-[6px]">
            {good ? <FaCheck className="text-bright-gold size-5"/>:<FaX className="text-white size-3"/>}
            <p className="text-subText lg:text-[13px] font-bold text-[13px]">{text}</p>
        </div>
    )
}


function Problem(){
    return(
        <div className="flex w-full p-3.25 flex-col gap-6 h-full lg:p-10 border-r border-border-color bg-linear-to-tr from-40% from-black to-deep-purple">
            <p className="text-warm-gold uppercase font-medium text-xl">The problem</p>
            <p className="font-bebas uppercase text-white text-[40px] font-extralight leading-[1.2]">Your business is<br /> better than your<br/> <span className="text-bright-gold">online presence</span></p>
            <p className="text-subText">Great businesses lose oppurtunities every day<br/> because their digital presence doesn't reflect<br/> the quality of what they deliver in real life.</p>
            <div className="flex lg:flex-row flex-col gap-10 lg:items-end items-start">
                <div className="border border-border-color relative w-full lg:w-[400px] h-fit rounded-[10px] overflow-hidden">
                    <img src="src/assets/nexis_standalone_assets/before-photo.png" alt="" />
                </div>
                <div className="lg:flex lg:flex-col w-full grid grid-cols-2 gap-3 lg:w-[37%]">
                    <ListData text="Outdated design"/>
                    <ListData text="Hard to navigate"/>
                    <ListData text="No clear message"/>
                    <ListData text="Doesn't build trust"/>
                    <ListData text="Doesn't convert"/> 
                </div>
            </div>
        </div>
    )
}

function Solution(){
    return(
        <div className="flex lg:flex-row flex-col lg:p-0 p-3 items-center gap-5">
            <div className="flex flex-col gap-4">
                <p className="uppercase font-medium text-bright-gold tracking-wider text-xl">The nexis transformation</p>
                <img src="src/assets/nexis_standalone_assets/after-photo.png" className="w-[450px]" alt=""/>
            </div>
            <div className="lg:flex lg:flex-col grid grid-cols-2 gap-[8px] lg:gap-6 self-center">
                <ListData good={true} text="Modern, intentional design"/>
                <ListData good={true} text="Seamless experience"/>
                <ListData good={true} text="Clear brand story"/>
                <ListData good={true} text="Builds trust instantly"/>
                <ListData good={true} text="Turns visitors into loyal customers"/> 
            </div>
        </div>
    )
}


export default function ProblemSection(){
    useGSAP(()=>{
        gsap.fromTo('.texts',{
            opacity:0,
            duration:2
        },{
            opacity:1,
            duration:2,
            stagger:0.2,
            scrollTrigger:{
                trigger:'.texts',
                start:'top 80%',
                once:true
            }
        })
    })
    return(
        <div className="flex lg:flex-row flex-col gap-0 relative h-fit lg:h-137.5 border-y bg-black border-y-border-color justify-between items-center">
            <Problem />
            <div className="flex items-center p-2.75  border border-bright-gold rounded-full h-fit -translate-x-6.5">
                <FiArrowRight className="text-bright-gold h-fit size-8 rotate-90 lg:rotate-0"/>
            </div>
            <Solution />
        </div>
    )
}