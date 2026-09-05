import { useIsMobile } from "../Hooks"
import { CreateButton } from "./hero";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import Users from "../assets/user_image.jpeg"
import Kudos from "../assets/founders/kudos_ajao.png"
import Nimi from "../assets/founders/nimi_duomoyo.jpg"
import Grant from "../assets/founders/grant_godspower.jpg"
import Deaver from "../assets/founders/Deaver.jpg"
import Marvellous from "../assets/founders/marvellous_akani.jpg"
import { FiArrowRight } from "react-icons/fi";


export default function AboutSection(){
    const isMobile = useIsMobile();
    function Founders({name, skill, src}:any){
        return (
  <div
    className={`${isMobile == true ? 'w-[200px] h-[250px]':'w-[clamp(230px,250px,300px)] h-[35vh]'}
      group relative
      overflow-hidden
      rounded-xl
      bg-cover
      flex
      shrink
      bg-center
      bg-no-repeat
      border border-white/10
      shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-warm-gold/30
    `}
    style={{ backgroundImage: `url(${src})` }}
  >

    {/* Image overlay */}
    <div
      className="
        absolute inset-0
        bg-linear-to-t
        from-black/90
        via-black/20
        to-transparent
        transition-all
        duration-500
        group-hover:from-black/95
      "
    />

    {/* Gold glow */}
    <div
      className="
        absolute
        -bottom-20
        left-1/2
        -translate-x-1/2
        w-40
        h-40
        rounded-full
        bg-warm-gold/20
        blur-3xl
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
    />

    {/* Content */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        p-4
        flex
        flex-col
        gap-2
      "
    >
      <p className={`${isMobile ? 'text-[12px] font-black':'text-2xl font-medium'}  font-sora text-white`}>
        {name}
      </p>

      <p className={`${isMobile ? 'text-[9px] font-bold':'text-md font-medium'}  font-sora text-bright-gold tracking-[0.2em]`}>
        Co-Founder · {skill}
      </p>

      <div className="mt-3 h-px w-0 bg-warm-gold transition-all duration-500 group-hover:w-16" />
    </div>
  </div>
)
    }
    
    return (
        <section className="flex flex-col w-full" id="about">
            <div className={`${isMobile ? 'flex-col gap-8':'flex-row' } flex  justify-between`}>
                <div className="flex flex-col gap-4">
                    <p className={`${isMobile ? 'text-[8px]':''} text-bright-gold font-bold`}>ABOUT NEXIS</p>
                    <div className="flex flex-col font-bebas">
                        <p className={`${isMobile ? 'text-3xl font-light':'text-5xl font-normal'} `}>People. Ideas </p>
                        <p className={`${isMobile ? 'text-3xl font-light':'text-5xl font-normal'} `}>Purpose. <span className="text-bright-gold">Impact.</span></p>
                    </div>
                    <p className={`text-white/60 ${isMobile ? 'text-[8px]':'text-xl'}`}>Nexis is a collective of thinkers, creators, and builders passionate about solving meaningful problems through intelligent technology and human centered design.</p>
                    <div className={`${isMobile == true ? 'flex-row':'flex-row'} flex gap-3`}>
                        <div className="opacity-50"><CreateButton text="Our Story" type={1} arrow={true}/></div>
                        <CreateButton text="Meet The Team" type={2} arrow={true} onClick={()=>{
                            document.getElementById("team")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",})
                        }}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-warm-gold p-8 rounded-2xl">
                        <p className="text-lg font-semibold">Who We Are</p>
                        <p className={`${isMobile == true ? 'text-[8px] font-grotesk':'text-xl w-[250px] leading-relaxed'}  text-white/60`}>A purpose driven company building digital solutions that connect people, ideas and technology.</p>
                    </div>
                    <div className="bg-warm-gold p-8 rounded-2xl">
                        <p className="text-lg font-semibold">What We Do</p>
                        <p className={`${isMobile == true ? 'text-[8px] font-grotesk':'text-xl w-[250px] leading-relaxed'}  text-white/60`}>We design and build intelligent digital products, platforms, and systems that drive real results.</p>
                    </div>
                    <div className="bg-warm-gold p-8 rounded-2xl">
                        <p className="text-lg font-semibold">Why It Matters</p>
                        <p className={`${isMobile == true ? 'text-[8px] font-grotesk':'text-xl w-[250px] leading-relaxed'}  text-white/60`}>We believe technology should empower people, elevate businesses, and create a positive impact.</p>
                    </div>
                </div>
            </div>
            <div className={`${isMobile ? 'grid-cols-1 grid gap-11 w-full':'flex-row flex justify-between items-center '} text-[clamp(0.95rem,0.9vw,1.45rem)] m-22 gap-11`}>
                <div className={`${isMobile ? 'gap-2':'gap-7'} flex flex-row justify-center items-center w-full`}>
                    <GroupsOutlinedIcon fontSize={`${isMobile ? 'small':'large'}`}/>
                    <div className="w-full flex-col gap-1">
                        <p className={`${isMobile ? 'text-[11px]':'text-2xl'} font-bebas font-semibold`}>50+</p>
                        <p className={`${isMobile ? 'text-[8px]':'text-2xl'} w-full font-grotesk font-semibold`}>Exports & Innovators</p>
                    </div>
                </div>
                <div className={`${isMobile ? 'gap-2':'gap-7'} flex flex-row justify-center items-center w-full`}>
                    <WorkOutlineOutlinedIcon fontSize={`${isMobile ? 'small':'large'}`}/>
                    <div className="w-full flex-col gap-1">
                        <p className={`${isMobile ? 'text-[11px]':'text-2xl'} font-bebas font-semibold`}>120+</p>
                        <p className={`${isMobile ? 'text-[8px]':'text-2xl'} w-full font-grotesk font-semibold`}>Projects Delivered</p>
                    </div>
                </div>
                <div className={`${isMobile ? 'gap-2':'gap-7'} flex flex-row justify-center items-center w-full`}>
                    <PublicOutlinedIcon fontSize={`${isMobile ? 'small':'large'}`}/>
                    <div className="w-full flex-col gap-1">
                        <p className={`${isMobile ? 'text-[11px]':'text-2xl'} font-bebas font-semibold`}>20+</p>
                        <p className={`${isMobile ? 'text-[8px]':'text-2xl'} w-full font-grotesk font-semibold`}>Countries Served</p>
                    </div>
                </div>
                <div className={`${isMobile ? 'gap-2':'gap-7'} flex flex-row justify-center items-center w-full`}>
                    <SentimentSatisfiedAltOutlinedIcon fontSize={`${isMobile ? 'small':'large'}`}/>
                    <div className="w-full flex-col gap-1">
                        <p className={`${isMobile ? 'text-[11px]':'text-2xl'} font-bebas font-semibold`}>98%</p>
                        <p className={`${isMobile ? 'text-[8px]':'text-2xl'} w-full font-grotesk font-semibold`}>Client Satisfaction</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p  className={`${isMobile ? 'text-[8px]':''} text-bright-gold font-bold`}>THE PEOPLE BEHIND NEXIS</p>
                <p className={`${isMobile ? 'text-3xl font-light':'text-5xl font-normal'} font-bebas text-metallic-gold`}>A team united by curiosity,<br/> driven by purpose.</p>
                <div className={`${isMobile == true ? 'flex-col':'flex-row '} flex items-center justify-center gap-4 w-full`} id="team">
                    <Founders name="Kudos Ajao" skill="Full-stack Dev." src={Kudos} />
                    <Founders name="Doumoyo Nimi" skill="Full-stack Dev." src={Nimi} />
                    <Founders name="Deaver" skill="Full-stack Dev." src={Deaver} />
                    <Founders name="Grant" skill="Cinematographer." src={Grant} />
                    <Founders name="Marvelous" skill="Graphics Designer." src={Marvellous} />
                </div>
                {/* <p className={`${isMobile ? 'text-[8px]':''} text-bright-gold flex flex-row items-center gap-2`}>View All Team Members <FiArrowRight /></p> */}
            </div>
        </section>
    )
}