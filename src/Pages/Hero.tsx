import { FiArrowRight } from "react-icons/fi"
import NexisLogo from "../assets/nexis_logo.png"
import Spline from "@splinetool/react-spline"
import { Application } from "@splinetool/runtime"

interface ButtonProp{
    rounded?: boolean
}


function SplineObject(){
    function onLoa(spline: Application) {
        // Access to Spline Application
        console.log("spline loaded", spline);
        // const topHand = spline.findObjectById("3114c2e4-9b2d-479a-bf55-0f9e0d295182");
        // console.log("topHand", topHand);
    }
    return (
        <Spline scene="https://prod.spline.design/a-4jNPF4Hn0VmtLm/scene.splinecode" className='absolute -z-[100] top-0 right-0 w-full h-full' onLoad={onLoa}/>
    );
}

function Header(){
    return(
        <div className="flex items-center justify-between p-2.5">
            <img src={NexisLogo} alt="Nexis Logo" className="w-[100px]"/>
            <ul className="flex list-style-none text-white uppercase font-medium gap-6">
                <li>Work</li>
                <li>Services</li>
                <li>About</li>
                <li>Philosophy</li>
                <li>Journal</li>
            </ul>
            <BuildButton />
        </div>
    )
}

function HeroText(){
    return(
        <div className="flex flex-col gap-7 mt-12 p-5">
            <p className="w-fit uppercase font-medium bg-linear-to-r from-0% from-primary-purple to-70% to-metallic-gold bg-clip-text text-transparent">Nexis / digital experiences</p>
            <p className="text-white text-[70px] uppercase font-bold  font-bebas leading-[1]">Your Business <br /> deserves to be <span className="bg-linear-to-r from-0% from-primary-purple to-50% to-metallic-gold bg-clip-text text-transparent">seen.</span></p>
            <p className="text-white text-[21px] font-medium leading-[1.2]">We turn hat you've built into a <br /> digital experience people remember</p>
            <div className="flex gap-2 items-center">
                <BuildButton rounded={true}/>
                <button className="rounded-[10px] text-[12px] font-medium uppercase text-white flex py-3 px-7 border border-metallic-gold text-[16px]">See our work</button>
            </div>
            {/* <div>
                <p className="uppercase [word-spacing:20px] text-white font-medium">Nexis + <span className="[word-spacing:3px]">Your business</span> = </p>
                    <div>
                        <p>Connection</p>
                    </div>
            </div> */}
            
        </div>
    )
}

function BuildButton({rounded = false}:ButtonProp){
    return(
        <div>
            <button className={"flex gap-1 items-center text-white bg-linear-to-br from-0%  border-2 border-[#271252] uppercase font-medium " + `${!rounded ? 'rounded-3xl p-1.5 px-4 text-[15px] from-black to-[#7136D1]':'rounded-[10px] py-3 px-7 text-[16px] from-bright-purple to-black'}`}>Let's Build <FiArrowRight className={`${!rounded ? '' : 'size-5'}`}/></button>   
        </div>
    )
}


export default function HeroSection(){
    return(
        <div className="bg-black p-4 relative z-[1000] h-[100vh]">
            <Header />
            <HeroText />
            <SplineObject />
        </div>
    )
}