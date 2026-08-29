import { Infinity } from "lucide-react";
import {
    Code2,
    PenTool,
    Clapperboard,
    Megaphone,
    CakeSlice,
} from "lucide-react";
import FounderImg from "../assets/user_image.jpeg"
import { OurWork } from "./Aim";

function Dna(){
    function WhichDna({id, title, text}:any){
        return (
            <div className="flex flex-col items-center gap-5">
                {id == "1" && <Code2  size={42}  className="text-primary-purple mb-[10px]"/>}
                {id == "2" && <PenTool size={42}  className="text-primary-purple mb-[10px]"/>}
                {id == "3" && <Clapperboard size={42}  className="text-primary-purple mb-[10px]"/>}
                {id == "4" && <Megaphone size={42}  className="text-primary-purple mb-[10px]"/>}
                {id == "5" && <CakeSlice size={42}  className="text-primary-purple mb-[10px]"/>}
                <p className="text-white font-bold text-xl">{title}</p>
                <p className="text-xl text-white text-center w-[70%]">{text}</p>
            </div>
        )
    }
    return (
        <div className="mt-[50px] flex items-center flex-col gap-7">
            <p className="text-xl text-primary-purple">OUR DNA</p>
            <p className="text-white font-bebas text-6xl mb-[30px]">CREATIVE MINDS. DIVERSE SKILLS. <span className="text-bright-gold">ONE VISION.</span></p>
            <div className="flex flex-row w-full justify-between items-center">
                <WhichDna id="1" title="DEVELOPERS" text="We build fast, scalable and modern digital solutions." />
                <WhichDna id="2" title="DESIGNERS" text="We design visuals that communicate and captivate." />
                <WhichDna id="3" title="FILMMAKERS" text="We tell stories through cinematic visuals that leave an impact." />
                <WhichDna id="4" title="MARKETERS" text="We grow brands and communities through samrt strategies" />
                <WhichDna id="5" title="CAKE MAKERS" text="Yes, we bake too. Because creativity comes in flavors." />
            </div>
        </div>
    )
}

function Founders(){
    function FounderBox({name, title, skill}:any){
        return (
            <div className="relative lg:h-[400px] sm:h-[350px] w-[200px] bg-black">
                <div className="relative h-[50%] w-full">
                    <img
                    className="absolute inset-0 rounded-[9px] h-full opacity-70 w-full object-cover"
                    src={FounderImg}
                    alt={name}
                    />
                </div>

                <div className="relative left-0 z-10 text-white h-[50%] flex flex-col gap-5 justify-between p-7">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-5xl font-bebas">{name}</h1>
                            <p className="text-xl text-primary-purple font-black">{title}</p>
                        </div>
                        {skill}
                    </div>
                    <div className="">
                        <p className="text-2xl font-black text-white">in</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="text-xl text-primary-purple">THE FOUNDERS</p>
            <p className="text-white text-6xl font-bebas mb-11">5 CO-FOUNDERS. <span className="text-metallic-gold">1 MISSION.</span></p>
            <div className="flex items-center">
                <div className="grid lg:grid-cols-5 sm:grid-cols-1 lg:gap-11 w-full">
                    <FounderBox name="KUDOS" title="CO-FOUNDER" skill={<p>Full Stack Developer</p>} />
                    <FounderBox name="NIMI" title="CO-FOUNDER" skill={<p>Full Stack Developer</p>} />
                    <FounderBox name="DEAVER" title="CO-FOUNDER" skill={<p>Full Stack Developer</p>} />
                    <FounderBox name="GRANT" title="CO-FOUNDER" skill={<p>Cinematographer <br/>Content Manager <br/>Videographer</p>} />
                    <FounderBox name="MARVELOUS" title="CO-FOUNDER" skill={<p>Graphics Designer</p>} />
                </div>
            </div>
            {/* <FounderBox name="" title="" skill={<p></p>} /> */}
        </div>
    )
}

function Vision(){
    return (
        <div className="flex flex-col gap-11">
            <div className="grid lg:grid-cols-[5fr_7fr] gap-11">
                <div className="flex flex-col gap-4">
                    <p className="text-xl text-primary-purple">OUR VISION</p>
                    <p className="text-white text-8xl font-bebas">WE BUILD EXPERIENCES<br /> THAT CONNECT, INSPIRE, <br />AND <span className="text-bright-gold">DRIVE GROWTH.</span></p>
                    <p className="text-white">We believe every brand has a story worth telling. <br/> Our mission is to help businesses stand out in a <br />digital world that never stops moving.</p>
                </div>
                <div className="text-white flex flex-row justify-between items-center pr-[70px]">
                    <span className="flex flex-col gap-7">
                        <p className="font-bold text-3xl">OUR APPROACH</p>
                        <p>We listen, we strategize, <br/>we create, we deliver <br/>and we stay with you.</p>
                    </span>
                    <span className="flex flex-col gap-7">
                        <p className="font-bold text-3xl">OUR PROMISE</p>
                        <p>Quality, Consistency,<br/>Creativity. That's the<br/> Nexis promise.</p>
                    </span>
                    <span className="flex flex-col gap-7">
                        <p className="font-bold text-3xl">OUR CULTURE</p>
                        <p>We suuport ideas,<br/> encourage growth, and <br/>build as a family.</p>
                    </span>
                </div>
            </div>
            <OurWork />
        </div>
    )
}

export default function About(){
    return (
        <div id="about" className="p-7.25 flex flex-col gap-8">
            <p className="text-primary-purple text-xl">WHO WE ARE</p>
            <p className="text-9xl text-white font-bebas">WE'RE MORE THAN <br/> A <span className="text-warm-gold">DIGITAL</span> <span className="text-primary-purple">AGENCY.</span></p>
            <p className="text-xl text-white">Nexis is a collective of creators, thinkers,<br/> and builders. We blend code, creativity, <br/>and strategy to craft digital experiences <br/>that make businesses unforgettable.</p>
            <div className="flex flex-row gap-20 items-stretch">

                <div className="flex flex-col items-start justify-between gap-2">
                    <p className="text-6xl font-bebas text-primary-purple">5</p>
                    <p className="text-xl text-white">Co-Founders</p>
                </div>

                <div className="flex flex-col items-center justify-between gap-2">
                    <Infinity size={32} className="text-warm-gold" />
                    <p className="text-xl text-white">Possibilities</p>
                </div>

                <div className="flex flex-col items-start justify-between gap-2">
                    <p className="text-6xl font-bebas text-primary-purple">100%</p>
                    <p className="text-xl text-white">Commitment</p>
                </div>

            </div>
            <Dna />
            <Founders />
            <Vision />
        </div>
    )
}