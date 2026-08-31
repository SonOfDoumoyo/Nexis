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
        <section className="flex flex-col justify-between gap-[50px] p-7">
            <div className={`${isMobile == true ? 'flex-col gap-8':'flex-row'} flex justify-between`}>
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-col gap-2 items-start">
                        <img src={NexisLogo} alt="" className="w-[125px]"/>
                        <p className="text-xl text-warm-gold">CONNECTING IDEAS.<br /> MAKING IMPACT.</p>
                        <p>Nexis is a digital solution company<br/>driven by innovation, creativity, and <br/>purpose. We connect what matters<br/> and build solutions that move<br/> people, businesses, and the world <br/>forward.</p>
                    </div>
                    <div className="flex items-center flex-row gap-4">
                        <FacebookIcon className="cursor-pointer hover:text-primary text-warm-gold" />
                        <XIcon className="cursor-pointer hover:text-primary text-warm-gold" />
                        <InstagramIcon className="cursor-pointer hover:text-primary text-warm-gold" />
                        <LinkedInIcon className="cursor-pointer hover:text-primary text-warm-gold" />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-3xl font-bold">Quick Links</p>
                    <div className="flex flex-col gap-1 text-xl">
                        <p>Home</p>
                        <p>Properties</p>
                        <p>About Us</p>
                        <p>How it Works</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-3xl font-bold">Resources</p>
                    <div className="flex flex-col gap-1 text-xl">
                        <p>FAQs</p>
                        <p>Blog</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-3xl font-bold">Subscribe to our newsletter</p>
                    <div className="flex flex-col gap-1 text-xl">
                        <p>Get the latest property listings and updates <br /> delivered to your inbox.</p>
                    </div>
                    
                    <div className="flex flex-row w-full items-center  bg-[#7c3aed]/0.1 backdrop-blur-[5px] rounded-[3px]">
                        <input type="text" className="outline-none  w-full p-4 border h-full border-primary-purple/30 text-xl" placeholder="Enter your email address"/>
                        <button className="flex flex-row gap-3 p-4 h-full items-center justify-center bg-warm-gold">Subscribe <FiArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className={`${isMobile ? 'flex-col gap-3':'flex-row justify-between'} text-white/60 flex`}>
                <p className="text-xl">© 2026 HousiFy. All rights reserved.</p>
                <p>Built with <span className="text-warm-gold">passion</span>. Designed for <span className="text-warm-gold">impact</span>.</p>
            </div>
        </section>
    )
}