import { useIsMobile } from "../Hooks"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";

export default function PhilosophySection(){
    const isMobile = useIsMobile();
    return (
        <section className="rounded-3xl">
            <div className="flex flex-col gap-8">
                <p className="text-bright-gold px-22">OUR PHILOSOPHY</p>
                <p className={`${isMobile ? 'text-5xl font-light':'text-5xl font-normal'} font-sora px-22`}>We are the <span className="text-primary-purple">nexus</span> between people, ideas, and possibilities.</p>
                <div className={`${isMobile ? 'flex flex-col':'grid grid-cols-[6fr_4fr] items-start'} gap-11 overflow-hidden`}>
                    <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-8 py-11">
                        <div className={`${isMobile == true ? 'w-[80vw] h-[40] p-11':'w-[35vw] h-[260px] p-16'}
                            relative
                            rounded-3xl
                            shrink
                            bg-warm-gold
                            backdrop-blur-xl
                            border border-warm-gold/20
                            grid grid-cols-2
                            gap-4
                            shadow-2xl
                            shadow-bright-gold
                            [transform:perspective(1000px)_rotateY(-20deg)_rotateX(8deg)]
                            transition-transform
                            duration-500
                            hover:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(2deg)]
                        `}>
                            <div className="bg-linear-to-tr from-metallic-gold p-5 to-bright-gold">
                                 <LightbulbOutlinedIcon className="text-primary-purple" fontSize="large"/>
                                <p>Innovation</p>
                                <p>We challenge boundaries and build for the future.</p>
                            </div>
                            <div>
                                 <GroupsOutlinedIcon className="text-bright-gold" fontSize="large"/>
                                <p>People</p>
                                <p>We put people at the heart of everything we create.</p>
                            </div>
                            <div>
                                 <WorkspacePremiumOutlinedIcon className="text-bright-gold" fontSize="large"/>
                                <p>Excellence</p>
                                <p>We pursue excellence in every deatil and every outocme.</p>
                            </div>
                            <div className="bg-linear-to-tr from-metallic-gold p-5 to-bright-gold">
                                 <TrendingUpOutlinedIcon className="text-primary-purple" fontSize="large"/>
                                <p>Progress</p>
                                <p>We build solutions that create momentum and drive growth.</p>
                            </div>
                        </div>
                        <div className="bg-deep-purple backdrop-blur-[1px]">
                        <div className="p-16 rounded-2xl gap-4 grid grid-cols-2">
                            <div className="bg-linear-to-tr from-primary-purple p-5 to-bright-purple">
                                 <BoltOutlinedIcon className="text-warm-gold" fontSize="large"/>
                                <p>Impact</p>
                                <p>We build for impact today and for generations to come.</p>
                            </div>
                            <div>
                                 <VerifiedUserOutlinedIcon className="text-primary-purple" fontSize="large"/>
                                <p>Trust</p>
                                <p>We earn trust through transparency, security, and integrity.</p>
                            </div>
                            <div>
                                 <AutoFixHighOutlinedIcon className="text-primary-purple" fontSize="large"/>
                                <p>Simplicity</p>
                                <p>We design with clarity and build with purpose.</p>
                            </div>
                            <div className="bg-linear-to-tr from-primary-purple p-5 to-bright-purple">
                                 <HubOutlinedIcon className="text-warm-gold" fontSize="large"/>
                                <p>Connection</p>
                                <p>We connect ideas, technology, and people to unlock potential.</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-3 p-8">
                            <p className="text-4xl font-sora">Our goal is not just to build products, <br/>but to build a better future.</p>
                            <span className="w-[25px] bg-bright-gold flex h-[2px]"/>
                            <p className="text-bright-gold">Nexis Team</p>
                        </div>
                        </div>
                    </div>
                    <div className={`${isMobile ? 'flex-col':'flex-col'} flex  gap-8 self-start`}>
                        <p className="text-white/60 text-xl lg:w-[300px] text-justify leading-relaxed">
                            At Nexis, we believe meaningful technology is built at the intersection of human insight, intelligent systems, and purposeful design.
                        </p>
                        <p className="text-white/60 text-xl lg:w-[300px] text-justify leading-relaxed">
                            We exist to connect what matters and create solutions that move people, businesses, and the world forward.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}