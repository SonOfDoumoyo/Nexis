import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import NexisLogo from "../assets/nexis_logo.png"
import { FiArrowRight } from "react-icons/fi";
import { useIsMobile } from "../Hooks";

export default function Footer(){
    const isMobile = useIsMobile()
    return (
        <section className="flex flex-col justify-between gap-12,5 p-7">
            <div className={`${isMobile == true ? 'flex-col gap-8':'flex-row'} flex justify-between`}>
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-col gap-2 items-start">
                        <img src={NexisLogo} alt="" className={`${isMobile ? 'w-25':'w-31.25'} `}/>
                        <p className={`${isMobile ? 'text-[8px]':''} text-bright-gold font-bold`}>CONNECTING IDEAS.<br /> MAKING IMPACT.</p>
                        <p className={`text-white/60 ${isMobile ? 'text-[8px]':'text-xl'}`}>Nexis is a digital solution company<br/>driven by innovation, creativity, and <br/>purpose. We connect what matters<br/> and build solutions that move<br/> people, businesses, and the world <br/>forward.</p>
                    </div>
                    <div className="flex items-center flex-row gap-4">
                        <FacebookIcon className={`cursor-pointer hover:text-primary text-blue-600`}/>
                        <XIcon className="cursor-pointer hover:text-primary text-black bg-white rounded-[3px]" />
                        <InstagramIcon className="cursor-pointer hover:text-primary text-warm-gold" />
                        <LinkedInIcon className="cursor-pointer hover:text-primary text-blue-600" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`${isMobile ? 'text-[11px]':'text-2xl'} text-bright-gold font-bold`}>Quick Links</p>
                    <div className={`text-white/60 ${isMobile ? 'text-[8px]':'text-xl'} flex flex-col`}>
                        <p onClick={()=>{
                            document.getElementById("home")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                        }}>Home</p>
                        <p onClick={()=>{
                            document.getElementById("service")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",})
                        }}>Services</p>
                        <p onClick={()=>{
                            document.getElementById("philosophy")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",})
                        }}>Philosophy</p>
                        <p onClick={()=>{
                            document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",})
                        }}>About Us</p>
                        <p onClick={()=>{
                            document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",})
                        }}>Contact</p>
                    </div>
                </div>
                {/* <div className="flex flex-col gap-2">
                    <p className={`${isMobile ? 'text-[11px]':'text-2xl'} text-bright-gold font-bold`}>Resources</p>
                    <div className={`text-white/60 ${isMobile ? 'text-[8px]':'text-xl'} flex flex-col`}>
                        <p>FAQs</p>
                        <p>Blog</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div> */}
                <div className="flex flex-col gap-3">
                    <p  className={`${isMobile ? 'text-[11px]':'text-2xl'} text-bright-gold font-bold`}>Subscribe to our newsletter</p>
                    <div className={`text-white/60 ${isMobile ? 'text-[8px]':'text-xl'} flex flex-col`}>
                        <p>Get the latest news and updates <br /> delivered to your inbox.</p>
                    </div>
                    
                    <div className="flex flex-row w-full items-center  bg-[#7c3aed]/0.1 backdrop-blur-[5px] rounded-[3px]">
                        <input type="text" className={`outline-none  w-full ${isMobile ? 'text-[8px] p-2':'p-4'} border h-full border-primary-purple/30 text-xl`} placeholder="Enter your email address"/>
                        <button className={`flex flex-row gap-3 ${isMobile ? 'text-[8px] p-2':'p-4'} h-full items-center justify-center bg-warm-gold`}>Subscribe <FiArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className={`${isMobile ? 'flex-row gap-3 text-[5px] justify-between':'flex-row justify-between'} text-white/60 flex`}>
                <p className="">© 2026 Nexis. All rights reserved.</p>
                <p>Built with <span className="text-warm-gold">passion</span>. Designed for <span className="text-warm-gold">impact</span>.</p>
            </div>
        </section>
    )
}