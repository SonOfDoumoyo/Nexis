import { div, head } from "framer-motion/client"
import Crystal from "../assets/nexis_standalone_assets/05_purple_abstract_card.png"
import { FiArrowRight } from "react-icons/fi"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsLittleAndroid,  useIsMobile } from "../Hooks"

gsap.registerPlugin(ScrollTrigger)

const projects = [
{
    head:'Aurora resort',
    text:'Hospitality',
    src:"src/assets/nexis_standalone_assets/08_mountain_resort.png"
},
{
    head:'EMBER STEAKHOUSE',
    text:'Restaurant',
    src:"src/assets/nexis_standalone_assets/09_gourmet_food.png"
},
{
    head:'ALTITUDE CAPITAL',
    text:"Finance",
    src:"src/assets/nexis_standalone_assets/10_modern_house.png"
},
{
    head:'NexVault',
    text:'Banking and Finance',
    src:"src/assets/nexis_standalone_assets/banking_app.png"
}
]

function Aim(){
    const aimContRef = useRef<HTMLDivElement>(null)
    useGSAP(()=>{
        if (!aimContRef.current?.children) return;
        gsap.fromTo(aimContRef.current?.children,
        {
            x:window.innerWidth,
        },
        {
            x:0,
            stagger:0.2,
            ease:'power3.out',
            scrollTrigger:{
                trigger:aimContRef.current?.children,
                start:'top 80%',
                end:'+=1200',
                scrub:true
            }
        }
    )
    })
    return(
       <div className="flex flex-col gap-3">
        <p className="text-primary-purple text-xl">WHAT NEXIS DOES</p>
        <div ref={aimContRef} className="aim-cont grid lg:grid-cols-3 grid-cols-1 gap-8">
            <Sections num="01" head="DESIGN" text="We make people stop scrolling." src={Crystal} id="1" 
            description_text="Design is more than making something look good. It's about creating a visual language that feels international, memorable, and unmistakably yours. At Nexis, we shape every detail, from composition and typography to motion and interaction, so your digital presence doesn't just exist. It leaves an impression "/>
            <Sections num="02" head="EXPERIENCE" text="We turn visits into experiences." src="src/assets/nexis_standalone_assets/06_gold_tunnel_phone_copy.png" id="2" experience={true}
            description_text="A great website shouldn't feel like a collection of pages. It should feel alive. We build experiences that guide attention, reward curiosity, and make every interaction feel deliberate. From the first scroll to the smallest transition, we turn your website into something people don't just use, but remember"/>
            <Sections num="03" head="CONNECTION" text="We bring your business closer to the people looking for it." src="src/assets/nexis_standalone_assets/07_network_globe.png" id="3" 
            description_text="Technology means little if it doesn't connect people to what matters. Nexis builds digital experiences that bridge businesses, ideas, and the people behind them. Every interaction has a purpose: bringing your vision closer to your audience and turning a simple visit into a meaningful connection"/>
        </div>
       </div>
    )
}

function OurWork(){
    const isMobile = useIsMobile()
    const ProjectsList = projects.map((project,index)=>(
        <Section2 num={`0${String(index)}`} head={project.head} text={project.text} src={project.src}/>
    ))
    const [currentProject,setCurrentProject] = useState(ProjectsList[0])
    return (
        <div>
            <p className="text-primary-purple text-xl">OUR WORK</p>
            <div className="flex flex-row justify-between">
                <p className="lg:text-6xl text-[35px] my-1 font-bebas text-white">DIGITAL EXPERIENCES. <span className="text-metallic-gold">REAL RESULTS.</span></p>
                <div className="flex items-center gap-1 text-metallic-gold">
                    <p className="text-[14px] font-medium">VIEW ALL PROJECTS</p>
                    <FiArrowRight className="lg:size-5 size-9" />
                </div>
            </div>
            <div className={" overflow-x-auto scrollbar-hide gap-5 " + `${isMobile ? 'flex flex-row overflow-hidden':''}`}>
                <Section2 num="01" head="AURORA RESORT" text="Hospitality" src="src/assets/nexis_standalone_assets/08_mountain_resort.png"/>
                <Section2 num="02" head="EMBER STEAKHOUSE" text="Restaurant" src="src/assets/nexis_standalone_assets/09_gourmet_food.png"/>
                <Section2 num="03" head="ALTITUDE CAPITAL" text="Finance" src="src/assets/nexis_standalone_assets/10_modern_house.png"/>
                <Section2 num="04" head="SOLSTICE WELLNESS" text="Wellness" src="src/assets/nexis_standalone_assets/banking_app.png"/>

            </div>
        </div>
    )
}

interface listDataProp{
    num: string,
    head: string,
    text: string,
    src: string,
    id: string
    description_text:string
    experience?: boolean
}

function Sections({num, head, text, src, id,description_text,experience = false}:listDataProp){
    return (
        <div className="perspective-[1500px]">
            <div className={`${'card'+num} transform-3d relative will-change-transform translate-z-0 bg-black shadow-sm shadow-white/30 flex h-[302px]  rounded-2xl border-2 border-border-color flex-col h-[100px] text-white w-full`} >
                <div className="overflow-hidden relative w-full h-full rounded-2xl">
                    <img src={src} className={"absolute " + `${experience ? 'left-33 -top-2 w-2xs h-93.25 transform-[rotate3d(0,1,0,-35deg)]':"top-0 left-0 h-full w-full"}`} />
                </div>
                {experience && <p className="absolute font-bebas left-58 text-center top-13 font-medium  uppercase text-[25px] leading-[1.3] bg-linear-to-r from-5% from-primary-purple to-60% to-warm-gold bg-clip-text text-transparent">Experiences <br /> that stay <br /> with you</p>}
                <div className="flex flex-col p-4 absolute justify-between gap-7 backface-hidden">
                    <div className=" flex flex-col gap-3 z-10 w-[59%]">
                        <p className={`${id !== "1" ? "text-warm-gold" : "text-primary-purple"} text-5xl font-bebas`}>{num} /</p>
                        <h1 className="text-5xl z-10 text-white font-bebas">{head}</h1>
                        <p className="text-[16px] font-medium text-white w-full">{text}</p>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center z-10" onClick={()=>{
                        gsap.set(`.${'card'+num}`,{z:10})
                        gsap.to(`.${'card'+num}`,{
                            rotateY:180,
                            duration:0.8,
                            ease:'power3.inOut'
                        })
                    }}>
                        <p className="uppercase z-10 font-medium text-primary-purple">explore</p>
                        <FiArrowRight/>
                    </div> 
                </div>
                <div className="absolute p-4 backface-hidden flex flex-col bg-[#00000075] gap-2" style={{transform: 'rotateY(180deg) translateZ(1px)'}}> 
                    <p className="text-5xl z-10 text-white font-bebas">{head}</p>
                    <p className="text-subText tracking-[1.2] font-bold">{description_text}</p>
                    <div className="flex flex-row gap-1.5 items-center z-10" onClick={()=>{
                        gsap.set(`.${'card'+num}`,{z:10})
                        gsap.to(`.${'card'+num}`,{
                            rotateY:0,
                            duration:0.8,
                            ease:'power3.inOut'
                        })
                    }}>
                        <p className="uppercase z-10 font-medium text-primary-purple">Go back</p>
                        <FiArrowRight/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

interface listDataProp2{
    num: string,
    head: string,
    text: string,
    src: string,
}

function Section2({num, head, text, src}:listDataProp2){
    const isMobile = useIsMobile()
    return (
        <div className={"relative overflow-hidden p-3 border border-border-color rounded-2xl " + `${isMobile ? 'w-[300px] shrink-0':''}`}>
            <div className="w-full absolute z-10 bg-[#0000006c] h-full top-0 left-0"></div>
            <img src={src} className="absolute top-0 left-0 w-full h-full" />
            <div className="flex flex-col z-10 text-white mt-15 gap-5">
                <div className="z-10">
                    <p className={`text-[12px] z-10`}>{num}</p>
                    <h1 className="text-xl z-10 text-white font-bebas">{head}</h1>
                    <p className=" text-[#ffffff9d] text-[13px] z-10">{text}</p>
                </div>
                <div className="flex flex-row gap-2.5 z-10 items-center text-[#ffffff9d] hover:text-white hover:cursor-pointer">
                    <p className="uppercase text-[13px] font-medium">View Project</p>
                    <FiArrowRight />
                </div>
            </div>
            
        </div>
    )
}

export default function AimSection(){
    return (
        <div className="bg-black p-[29px] relative flex flex-col gap-[50px] border-b border-b-white/10">
            <Aim />
            <OurWork />
        </div>
    )
}