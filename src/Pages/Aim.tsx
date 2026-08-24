import { div } from "framer-motion/client"

function Aim(){
    return(
       <div className="flex flex-col gap-3">
        <p className="text-primary-purple text-xl">WHAT NEXIS DOES</p>
        <div className="flex flex-row justify-between gap-6 items-start">
            <Sections num="01" head="DESIGN" text="We make people stop scrolling." src="src/assets/nexis_standalone_assets/14_purple_crystal.png" id="1"/>
            <Sections num="02" head="EXPERIENCE" text="We turn visits into experiences." src="src/assets/nexis_standalone_assets/06_gold_tunnel_phone.png" id="2"/>
            <Sections num="03" head="CONNECTION" text="We bring your business closer to the people looking for it." src="src/assets/nexis_standalone_assets/07_network_globe.png" id="3"/>
        </div>
       </div>
    )
}

function OurWork(){
    return (
        <div>
            <p className="text-primary-purple text-xl">OUR WORK</p>
            <div className="flex flex-row justify-between">
                <p className="text-6xl font-bebas text-white">DIGITAL EXPERIENCES. <span className="text-metallic-gold">REAL RESULTS.</span></p>
                <p className="text-metallic-gold text-xl">VIEW ALL PROJECTS</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-8">
                <Section2 num="01" head="AURORA RESORT" text="Hospitality" src="src/assets/nexis_standalone_assets/08_mountain_resort.png"/>
                <Section2 num="02" head="EMBER STEAKHOUSE" text="Restaurant" src="src/assets/nexis_standalone_assets/09_gourmet_food.png"/>
                <Section2 num="03" head="ALTITUDE CAPITAL" text="Finance" src="src/assets/nexis_standalone_assets/10_modern_house.png"/>
                <Section2 num="04" head="SOLSTICE WELLNESS" text="Wellness" src="src/assets/nexis_standalone_assets/17_warm_interior.png"/>
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
}

function Sections({num, head, text, src, id}:listDataProp){
    return (
        <div className={`bg-black shadow-sm shadow-white/30 relative flex h-[350px]  rounded-2xl  justify-between p-4 flex-col gap-7 text-white w-full bg-no-repeat bg-right`} style={{backgroundImage: `url(${src})`}}>
            <div className="flex flex-col gap-3">
                <p className={`${id !== "1" ? "text-warm-gold" : "text-primary-purple"} text-5xl font-bebas`}>{num} /</p>
                <h1 className="text-5xl z-10 text-white font-bebas">{head}</h1>
                <p className="text-2xl text-white w-[30%]">{text}</p>
            </div>
            
            <p className={`${id !== "1" ? "text-warm-gold" : "text-primary-purple"} text-2xl`}>DISCOVER</p>
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
    return (
        <div className={`bg-black shadow-sm shadow-white/20 relative flex h-[350px] justify-end pb-22 rounded-2xl  justify-between p-4 flex-col gap-7 text-white w-full bg-no-repeat bg-right bg-cover`} style={{backgroundImage: `url(${src})`}}>
            <div className="flex flex-col gap-3">
                <p className={` text-5xl font-bebas`}>{num} /</p>
                <h1 className="text-5xl z-10 text-white font-bebas">{head}</h1>
                <p className="text-2xl text-white w-[30%]">{text}</p>
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