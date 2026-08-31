import { useIsMobile } from "../Hooks"
import { CreateButton } from "./hero";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import Users from "../assets/user_image.jpeg"
import { FiArrowRight } from "react-icons/fi";


export default function AboutSection(){
    const isMobile = useIsMobile();
    function Founders({name, skill, src}:any){
        return (
  <div
    className={`${isMobile == true ? 'w-[400px] h-[400px]':'w-[clamp(230px,250px,300px)] h-[35vh]'}
      group relative
      overflow-hidden
      rounded-3xl
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
      opacity-65
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
        p-7
        flex
        flex-col
        gap-2
      "
    >
      <p className="text-2xl font-sora font-medium text-white">
        {name}
      </p>

      <p className="text-sm uppercase tracking-[0.2em] text-bright-gold">
        Co-Founder · {skill}
      </p>

      <div className="mt-3 h-px w-0 bg-warm-gold transition-all duration-500 group-hover:w-16" />
    </div>
  </div>
)
    }
    
    return (
        <section className="">
            <div className={`${isMobile ? 'flex-col gap-8':'flex-row' } flex  justify-between`}>
                <div className="flex flex-col gap-8">
                    <p className="text-bright-gold">ABOUT NEXIS</p>
                    <div className="flex flex-col gap-2">
                        <p className={`${isMobile ? 'text-6xl font-light':'text-5xl font-normal'} font-sora`}>People. Ideas </p>
                        <p className={`${isMobile ? 'text-6xl font-light':'text-5xl font-normal'} font-sora`}>Purpose. <span className="text-bright-gold">Impact.</span></p>
                    </div>
                    <p className="text-white/60 text-xl lg:w-[250px] leading-relaxed">Nexis is a collective of thinkers, creators, and builders passionate about solving meaningful problems through intelligent technology and human centered design.</p>
                    <div className={`${isMobile == true ? 'flex-row':'flex-row'} flex gap-3`}>
                        <CreateButton text="Our Story" type={1} arrow={true}/>
                        <CreateButton text="Meet The Team" type={2} arrow={true} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-warm-gold p-8 rounded-2xl">
                        <p className="text-lg font-semibold">Who We Are</p>
                        <p className="text-white/60 text-xl lg:w-[250px]  leading-relaxed">A purpose driven company building digital solutions that connect people, ideas and technology.</p>
                    </div>
                    <div className="bg-warm-gold p-8 rounded-2xl">
                        <p className="text-lg font-semibold">What We Do</p>
                        <p className="text-white/60 text-xl lg:w-[250px]  leading-relaxed">We design and build intelligent digital products, platforms, and systems that drive real results.</p>
                    </div>
                    <div className="bg-warm-gold p-8 rounded-2xl">
                        <p className="text-lg font-semibold">Why It Matters</p>
                        <p className="text-white/60 text-xl lg:w-[250px] leading-relaxed">We believe technology should empower people, elevate businesses, and create a positive impact.</p>
                    </div>
                </div>
            </div>
            <div className={`${isMobile ? 'flex-col':'flex-row'} flex justify-between items-center text-[clamp(0.95rem,0.9vw,1.45rem)] p-22 gap-11`}>
                <div className="flex flex-row gap-7 justify-center items-center w-full">
                    <GroupsOutlinedIcon fontSize="large"/>
                    <div>
                        <p>50+</p>
                        <p className="text-[clamp(0.95rem,0.9vw,1.45rem)]">Exports & Innovators</p>
                    </div>
                </div>
                <div className="flex flex-row gap-7 justify-center items-center w-full">
                    <WorkOutlineOutlinedIcon fontSize="large"/>
                    <div>
                        <p>120+</p>
                        <p className="text-[clamp(0.95rem,0.9vw,1.45rem)]">Projects Delivered</p>
                    </div>
                </div>
                <div className="flex flex-row gap-7 justify-center items-center w-full">
                    <PublicOutlinedIcon fontSize="large"/>
                    <div>
                        <p>20+</p>
                        <p className="text-[clamp(0.95rem,0.9vw,1.45rem)]">Countries Served</p>
                    </div>
                </div>
                <div className="flex flex-row gap-7 justify-center items-center w-full">
                    <SentimentSatisfiedAltOutlinedIcon fontSize="large"/>
                    <div>
                        <p>98%</p>
                        <p className="text-[clamp(0.95rem,0.9vw,1.45rem)]">Client Satisfaction</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-bright-gold text-sm">THE PEOPLE BEHIND NEXIS</p>
                <p className="text-3xl font-sora font-light">A team united by curiosity,<br/> driven by purpose.</p>
                <div className={`${isMobile == true ? 'flex-col':'flex-row '} flex items-center justify-center gap-4 w-full`}>
                    <Founders name="Kudos Ajao" skill="Full-stack Dev." src={Users} />
                    <Founders name="Doumoyo Nimi" skill="Full-stack Dev." src={Users} />
                    <Founders name="Deaver" skill="Full-stack Dev." src={Users} />
                    <Founders name="Grant" skill="Cinematographer." src={Users} />
                    <Founders name="Marvelous" skill="Graphics Designer." src={Users} />
                </div>
                <p className="flex flex-row items-center text-bright-gold">View All Team Members <FiArrowRight /></p>
            </div>
        </section>
    )
}