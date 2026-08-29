
import Crystal from "../assets/nexis_standalone_assets/05_purple_abstract_card.png"
import PhoneImg from "../assets/nexis_standalone_assets/06_gold_tunnel_phone_copy.png"
import GlobeImg from "../assets/nexis_standalone_assets/07_network_globe.png"
import AuroraResortImg from "../assets/nexis_standalone_assets/08_mountain_resort.png"
import SteakHouseImg from "../assets/nexis_standalone_assets/09_gourmet_food.png"
import AltitudeCapitalImg from "../assets/nexis_standalone_assets/10_modern_house.png"
import NexVaultImg from "../assets/nexis_standalone_assets/banking_app.png"
import { FiArrowRight } from "react-icons/fi"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {  useIsLittleAndroid, useIsMobile } from "../Hooks"
import { BuildButton } from "./Hero"
import { FaCheck } from "react-icons/fa6"

gsap.registerPlugin(ScrollTrigger)

const projects = [
{
    head:'Aurora resort',
    text:'Hospitality',
    src: AuroraResortImg
},
{
    head:'EMBER STEAKHOUSE',
    text:'Restaurant',
    src:SteakHouseImg
},
{
    head:'ALTITUDE CAPITAL',
    text:"Finance",
    src:AltitudeCapitalImg
},
{
    head:'NexVault',
    text:'Banking and Finance',
    src:NexVaultImg
}
]

function Aim(){
    // const isMobile = useIsMobile()
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
            duration:2,
            ease:'power3.out',
            scrollTrigger:{
                trigger:aimContRef.current?.children,
                start:'top 80%',
                end:'+=1200',
            }
        })
    })
    return(
       <div className="flex flex-col gap-3">
        <p className="text-primary-purple text-xl">WHAT NEXIS DOES</p>
        <ServiceHero/>
        <div ref={aimContRef} className="aim-cont grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full lg:self-center">
            <Sections num="01" head="DESIGN" text="We make people stop scrolling." src={Crystal} id="1" 
            description_text="Design is more than making something look good. It's about creating a visual language that feels international, memorable, and unmistakably yours. At Nexis, we shape every detail, from composition and typography to motion and interaction, so your digital presence doesn't just exist. It leaves an impression "/>
            <Sections num="02" head="EXPERIENCE" text="We turn visits into experiences." src={PhoneImg} id="2" experience={true}
            description_text="A great website shouldn't feel like a collection of pages. It should feel alive. We build experiences that guide attention, reward curiosity, and make every interaction feel deliberate. From the first scroll to the smallest transition, we turn your website into something people don't just use, but remember"/>
            <Sections num="03" head="CONNECTION" text="We bring your business closer to the people looking for it." src={GlobeImg} id="3" 
            description_text="Technology means little if it doesn't connect people to what matters. Nexis builds digital experiences that bridge businesses, ideas, and the people behind them. Every interaction has a purpose: bringing your vision closer to your audience and turning a simple visit into a meaningful connection"/>
            <Sections num="04" head="WEB DEVELOPMENT" text="High performance websites built with clean code and the latest technologies for seamles functionality." src={GlobeImg} id="4" 
            description_text="Meh."/>
            <Sections num="05" head="CONTENT CREATION" text="Engaging content that tells your brand story, builds trust, and keeps your audience coming back." src={Crystal} id="5" 
            description_text="meh"/>
            <Sections num="06" head="E-COMMERCE SOLUTIONS" text="Powerful online stores that provide smooth shopping experience and secure payment integrations." src={PhoneImg} id="6" 
            description_text="meh"/>
        </div>
        <ServiceHero2 />
        <div className="flex flex-col gap-9 mt-[70px]">
            <p className="text-primary-purple text-xl">WHY CHOOSE NEXIS?</p>
            <p className="text-white text-6xl font-bebas">WE DON'T JUST DELIVER SERVICES.<br />WE BUILD <span className="text-warm-gold">PARTNERSHIPS.</span></p>
            <div className="text-white text-xl flex flex-col gap-1">
                <p className="flex flex-row gap-3 items-center"><FaCheck className="text-black bg-warm-gold rounded-full p-1"/>Tailored solutions for your unique business needs</p>
                <p className="flex flex-row gap-3 items-center"><FaCheck className="text-black bg-warm-gold rounded-full p-1"/>Clear communication and transparent processes</p>
                <p className="flex flex-row gap-3 items-center"><FaCheck className="text-black bg-warm-gold rounded-full p-1"/>Creative designs with measurable results</p>
                <p className="flex flex-row gap-3 items-center"><FaCheck className="text-black bg-warm-gold rounded-full p-1"/>On-time delivery and ongoing support</p>
            </div>
            <BuildButton text="LET'S WORK TOGETHER" rounded={true}/>
        </div>
       </div>
    )
}

function ServiceHero2(){
    function Process({title, text, num}:any) {
        return (
            <div className="flex flex-col items-center mb-6">
                <div className="flex items-center justify-center p-2 border border-warm-gold rounded-full">
                    <p className="text-white font-bold bg-primary-purple rounded-full p-2">{num}</p>
                </div>
                <p className="text-2xl font-semibold text-white">{title}</p>
                <p className="text-xl text-white text-center w-[80%]">{text}</p>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center mt-[60px] gap-5">
            <p className="text-primary-purple text-xl">OUR PROCESS</p>
            <p className="text-white text-7xl font-bebas">A CLEAR PROCESS. <span className="text-bright-gold">REAL RESULTS.</span></p>
            <div className="flex flex-row justify-between w-full">
                <Process title="DISCOVER" text="We learn about your goals, audience, and challenges." num="01"/>
                <Process title="STRATEGIZE" text="We plan the best appproach to bring your vision to life." num="02"/>
                <Process title="DESIGN & BUILD" text="We design and develop with precision and passion." num="03"/>
                <Process title="LAUNCH" text="We deliver and launch your project successfully." num="04"/>
                <Process title="GROW" text="We support you with strategies to grow further." num="05"/>
            </div>
        </div>
    )
}

function ServiceHero() {
    return (
        <div className="">
            <div className="flex flex-col gap-7 mb-[40px]">
                <p className="text-8xl text-white font-bebas">OUR SERVICES.</p>
                <p className="text-white text-2xl">We craft digital experiences that <br />help your business grow, connect. <br />and stand out.</p>
                <BuildButton text="LET'S BUILD" rounded={true}/>
            </div>
            <div className="flex items-center flex-col gap-4">
                <p className="text-xl text-primary-purple">WHAT WE OFFER</p>
                <p className="text-5xl text-white font-bebas mb-6">DIGITAL SOLUTIONS BUILT FOR <span className="text-primary-purple">IMPACT.</span></p>
            </div>
        </div>
    )
}


export function OurWork(){
    const isMobile = useIsMobile()
    const ProjectsList = projects.map((project,index)=>(
        <Section2 num={`0${String(index)}`} head={project.head} text={project.text} src={project.src}/>
    ))
    return (
        <div>
            <div className="flex flex-row justify-between">
                <p className="lg:text-6xl text-[35px] my-1 font-bebas text-white">DIGITAL EXPERIENCES. <span className="text-metallic-gold">REAL RESULTS.</span></p>
                <div className="flex items-center gap-1 text-metallic-gold">
                    <p className="text-[14px] font-medium">VIEW ALL PROJECTS</p>
                    <FiArrowRight className="lg:size-5 size-9" />
                </div>
            </div>
            <div className={`overflow-x-auto scrollbar-hide gap-5 flex flex-row overflow-hidden ${isMobile ? '':'h-[400px]'}`}>
                {/* <Section2 num="01" head="AURORA RESORT" text="Hospitality" src="../assets/nexis_standalone_assets/08_mountain_resort.png"/>
                <Section2 num="02" head="EMBER STEAKHOUSE" text="Restaurant" src="../assets/nexis_standalone_assets/09_gourmet_food.png"/>
                <Section2 num="03" head="ALTITUDE CAPITAL" text="Finance" src="../assets/nexis_standalone_assets/10_modern_house.png"/>
                <Section2 num="04" head="SOLSTICE WELLNESS" text="Wellness" src="../assets/nexis_standalone_assets/banking_app.png"/> */}
                {ProjectsList}
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
    // const isMobile = useIsMobile()
    const isLittleAndroid = useIsLittleAndroid()
    useEffect(() => {
        gsap.set(`.back-content-${num}`, {
            opacity: 0
        })
    }, [num])
    return (
        <div style={{perspective: "1500px",}}>
            <div className={`${'card'+num} transform-3d relative will-change-transform translate-z-0 bg-black shadow-sm shadow-white/30 flex h-90 rounded-2xl border-2 border-border-color flex-col text-white w-full overflow-hidden`} style={{transformStyle: "preserve-3d",}}>
                <div className="overflow-hidden relative w-full h-full rounded-2xl">
                    <img src={src} className={"absolute " + `${experience ? 'left-33 -top-2 w-2xs h-93.25 transform-[rotate3d(0,1,0,-35deg)]':"top-0 left-0 h-full w-full"}`} />
                </div>
                {experience && <p className={"absolute font-bebas text-center top-13 font-medium  uppercase text-[25px] leading-[1.3] bg-linear-to-r from-5% from-primary-purple to-60% to-warm-gold bg-clip-text text-transparent "+`${isLittleAndroid ? 'right-0':'left-58'}`}>Experiences <br /> that stay <br /> with you</p>}
                <div className={`front-content-${num} absolute inset-0 flex min-h-0 flex-col justify-between gap-4 p-4 backface-hidden`} style={{backfaceVisibility: "hidden",}}>
                    <div className="z-10 flex min-h-0 w-[59%] flex-col gap-3 overflow-hidden">
                        <p className={`${id !== "1" ? "text-warm-gold" : "text-primary-purple"} text-5xl font-bebas`}>{num} /</p>
                        <h1 className="text-5xl z-10 text-white font-bebas">{head}</h1>
                        <p className="w-full break-words text-[clamp(0.8rem,1em,1rem)] font-medium leading-tight text-white">
                            {text}
                        </p>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center w-fit z-10 hover:cursor-pointer" onClick={()=>{
                        gsap.set(`.${'card'+num}`, { z: 10 })

                        gsap.to(`.front-content-${num}`, {
                            opacity: 0,
                            duration: 0.3
                        })

                        gsap.to(`.${'card'+num}`, {
                            rotateY: 180,
                            duration: 0.8,
                            ease: "power3.inOut"
                        })

                        gsap.to(`.back-content-${num}`, {
                            opacity: 1,
                            delay: 0.4,
                            duration: 0.3
                        })
                    }}>
                        <p className="uppercase z-10 font-medium text-primary-purple hover:bg-purple-600">explore</p>
                        <FiArrowRight />
                    </div> 
                </div>
                <div
                    className={`back-content-${num} absolute inset-0 flex min-h-0 items-start flex-col overflow-hidden p-4 ${
                        isLittleAndroid ? 'gap-0' : 'gap-2'
                    }`}
                    style={{ transform: 'rotateY(180deg) translateZ(1px)', }}
                >
                    <p className="text-5xl z-10 text-white font-bebas">{head}</p>
                    <div className="min-h-0 flex-1 overflow-y-auto">
                        <p className="break-words text-[1.1em] font-medium leading-tight tracking-[1.2px] text-subText">
                            {description_text}
                        </p>
                    </div>

                    <div
                        className="z-10 flex shrink-0 cursor-pointer flex-row items-center gap-1.5"
                        onClick={() => {

                            gsap.to(`.back-content-${num}`, {
                                opacity: 0,
                                duration: 0.2
                            })

                            gsap.to(`.${'card'+num}`, {
                                rotateY: 0,
                                duration: 0.8,
                                ease: "power3.inOut"
                            })

                            gsap.to(`.front-content-${num}`, {
                                opacity: 1,
                                delay: 0.4,
                                duration: 0.3
                            })
                        }}
                    >
                        <p className="font-medium uppercase inline text-primary-purple hover:text-purple-600">
                            Go back
                        </p>

                        <FiArrowRight />
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

function Section2({num, head, text, src}: listDataProp2) {
    const isMobile = useIsMobile()

    return (
        <div
            className={
                "relative overflow-hidden border border-border-color rounded-2xl " +
                `${isMobile
                    ? "w-[75%] h-[250px] shrink-0"
                    : "w-[40%] h-[300px] shrink-0"}`
            }
        >
            <div className="absolute inset-0 z-0 bg-[#0000006c]" />

            <img
                src={src}
                className="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
                alt=""
            />

            <div className="absolute inset-0 z-10 flex flex-col items-start justify-between p-11 text-white">

                <div>
                    <p className="text-[12px]">
                        {num}
                    </p>

                    <h1 className="font-bebas text-xl text-white">
                        {head}
                    </h1>

                    <p className="text-[13px] text-[#ffffff9d]">
                        {text}
                    </p>
                </div>

                <div className="flex cursor-pointer items-center gap-2.5 text-[#ffffff9d] hover:text-white">
                    <p className="text-[13px] font-medium uppercase">
                        View Project
                    </p>

                    <FiArrowRight />
                </div>

            </div>
        </div>
    )
}

export default function AimSection(){
    return (
        <div id="services" className="bg-black p-7.25 relative flex flex-col gap-12.5 border-b border-b-white/10">
            <Aim />
        </div>
    )
}