import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useIsMobile } from "../Hooks";
import { FiArrowRight } from "react-icons/fi";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";

export default function ContactSection(){
    const isMoble = useIsMobile()
    return (
        <section className={`${isMoble ? 'flex-col':'flex-row justify-between'} flex gap-2`}>
            <div className="flex flex-col gap-3">
                <p className="text-bright-gold">LET'S CONNECT</p>
                <p className="text-5xl font-sora font-light">Let's Build Something <span className="text-primary-purple">Meaningful</span>.</p>
                <p className="text-white/60 text-xl lg:w-[250px] leading-relaxed">
                    Have a project in mind or want to explore how we can work together? We'd love to hear from you.
                </p>
                <div className="p-4 gap-5 flex flex-col">
                    <div className="flex flex-row items-center gap-6">
                        <EmailOutlinedIcon fontSize="large" className="text-bright-gold bg-primary-purple/50 rounded-[3px] p-2"/>
                        <div>
                            <p>Email Us</p>
                            <p className="text-white/60">nexis_hq@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <PhoneOutlinedIcon fontSize="large" className="text-bright-gold bg-primary-purple/50 rounded-[3px] p-2"/>
                        <div>
                            <p>Call Us</p>
                            <p className="text-white/60">+234 913 856 5782</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <LocationOnOutlinedIcon fontSize="large" className="text-bright-gold bg-primary-purple/50 rounded-[3px] p-2"/>
                        <div>
                            <p>Our Location</p>
                            <p className="text-white/60">Rivers, Lagos</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <AccessTimeOutlinedIcon fontSize="large" className="text-bright-gold bg-primary-purple/50 rounded-[3px] p-2"/>
                        <div>
                            <p>Business Hours</p>
                            <p className="text-white/60">Mon - Fri: 9:00 AM - 6:00 PM WAT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isMoble == true ? 'w-full':'w-[50%]'} flex flex-col gap-6`}>
            <div className={`flex flex-col gap-7 bg-primary-purple/30 p-11 rounded-3xl backdrop-blur-[11px] border border-primary-purple`}>
                <p className="text-4xl font-sora font-light">Send Us a Message</p>
                <p className="text-lg text-white/80">Fill out the form and we'll get back to you shortly.</p>
                <div className="flex flex-row w-full gap-4">
                    <div className="flex flex-col w-full gap-3">
                        <p>Full Name</p>
                        <input type="text" placeholder="Enter your full name" className="p-4 text-white/70 placeholder:text-white/30 w-full outline-0 border backdrop-blur-2xl border-primary-purple rounded-[4px]"/>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <p>Email Address</p>
                        <input type="text" placeholder="Enter your email" className="p-4 text-white/70 placeholder:text-white/30 w-full outline-0 border backdrop-blur-2xl border-primary-purple rounded-[4px]"/>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-4">
                    <div className="flex flex-col w-full gap-3">
                        <p>Company/Organization</p>
                        <input type="text" placeholder="Enter your company name" className="p-4 text-white/70 placeholder:text-white/30 w-full outline-0 backdrop-blur-2xl border border-primary-purple rounded-[4px]"/>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <p>Subject</p>
                        <input type="text" placeholder="What's this about?" className="p-4 text-white/70 placeholder:text-white/30 w-full outline-0 border backdrop-blur-2xl border-primary-purple rounded-[4px]"/>
                    </div>
                </div>
                <div className="gap-3 flex flex-col w-full">
                    <p>Message</p>
                    <textarea name="" placeholder="Tell us about your project or ideas..." className={`${isMoble == true ? 'h-[100px]':'h-[130px]'} text-white/70 placeholder:text-white/30 border p-3 backdrop-blur-2xl border-primary-purple w-full rounded-[4px]`} id=""></textarea>
                </div>
                <button className="flex flex-row items-center justify-center gap-3 bg-linear-to-r from-deep-purple to-warm-gold p-5 rounded-[4px]">Send Message <FiArrowRight /></button>
            </div>
            <div className="flex justify-between items-center fex-row gap-3 bg-primary-purple/30 p-11 rounded-3xl backdrop-blur-[11px] border border-primary-purple">
                <div className="flex flex-row gap-2 items-center">
                    <HeadsetMicOutlinedIcon fontSize="large"/>
                    <div>
                        <p className="font-semibold">Prefer a quick chat</p>
                        <p>Book a call with our team</p>
                    </div>
                </div>
                <p className="flex flex-row gap-4 items-center text-bright-gold">Schedule a call <FiArrowRight /></p>
            </div>
            </div>
        </section>
    )
}