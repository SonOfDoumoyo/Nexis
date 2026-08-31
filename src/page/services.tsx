import { useIsMobile } from "../Hooks"
import { CreateButton } from "./hero";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import DeveloperModeOutlinedIcon from "@mui/icons-material/DeveloperModeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { FiArrowRight } from "react-icons/fi"

export default function ServicesSection(){
    const isMobile = useIsMobile();
    function Services({title, text, id}:any){
        return (
            <div className={`${isMobile == true ? 'flex-col':'flex-row'} flex gap-8 p-11 bg-primary-purple/50 backdrop-blur-xl`}>
                {id == "1" && (<ExploreOutlinedIcon className="text-bright-gold w-[fit]" fontSize="large"/>)}
                {id == "2" && (<AutoModeOutlinedIcon className="text-bright-gold w-[fit]" fontSize="large"/>)}
                {id == "3" && (<DesignServicesOutlinedIcon className="text-bright-gold w-[fit]" fontSize="large"/>)}
                {id == "4" && (<DeveloperModeOutlinedIcon className="text-bright-gold w-[fit]" fontSize="large"/>)}
                {id == "5" && (<VideocamOutlinedIcon className="text-bright-gold w-[fit]" fontSize="large"/>)}
                {id == "6" && (<CampaignOutlinedIcon className="text-bright-gold w-[fit]" fontSize="large"/>)}
                <div className="flex flex-col justify-between gap-4 h-full w-full">
                    <div className="flex flex-col gap-3">
                        <p className="text-2xl font-semibold font-grotesk">{title}</p>
                        <p className={`${isMobile == true ? '':''} text-[clamp(0.95rem,0.9vw,1.45rem)] text-white/60`}>{text}</p>
                    </div>
                    <p className="text-sm text-bright-gold flex flex-row gap-2 items-center">Learn More <FiArrowRight /></p>
                </div>
            </div>
        )
    }



    return (
        <section className={`${isMobile ? 'grid-cols-1 gap-6':'grid-cols-[3fr_7fr]'} grid w-full`}>
            <div className="flex flex-col gap-8">
                <p className="text-bright-gold">OUR SERVICES</p>
                <p className={`${isMobile ? 'text-6xl font-light':'text-5xl font-normal'} font-sora`}>Digital Solution.<br/><span className="text-primary-purple">Real Impact.</span></p>
                <p className="text-white/60 text-xl">We design, build, and scale intelligent digital<br/>solutions that help businesses grow, operate<br/>smarter, and lead the future.</p>
                <div className={`${isMobile == true ? 'flex-row w-full':'flex-row'} flex gap-3`}>
                    <CreateButton text="Work With Us" type={1} arrow={true}/>
                    <CreateButton text="Explore Our Process" type={2} arrow={false} />
                </div>
            </div>
            <div className={`${isMobile ? 'grid-cols-2':'grid-cols-2'} grid gap-5`}>
                <Services title="Digital Strategy" text={"Building clear digital roadmaps that turn business goals into measurable growth."} id="1" />
                <Services title="Systems & Process Automations" text={"Streamlining operations and workflows through intelligent automation and integration."} id="2" />
                <Services title="UI/UX & Digital Experiences" text={"Designing intuitive digital experiences that connect brands with their audiences."} id="3" />
                <Services title="Product & Software Development" text={"Building scalable digital products and software tailored to real business needs."} id="4" />
                <Services title="Content & Cinematography" text={"Producing cinematic videos, brand content, and visual stories that make businesses stand out."} id="5" />
                <Services title="Brand & Social Presence" text={"Building stronger brands through graphic design, social media management, and strategic digital content."} id="6" />
            </div>
        </section>
    )
}