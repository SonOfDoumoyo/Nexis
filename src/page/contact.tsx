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
        <section id="contact" className={`${isMoble ? 'flex-col':'flex-row justify-between'} flex gap-2`}>
            <div className="flex flex-col gap-3">
                <p className={`${isMoble ? 'text-[8px]':''} text-bright-gold font-bold`}>LET'S CONNECT</p>
                <p className={`${isMoble ? 'text-3xl font-bold font-bebas':'text-6xl font-normal font-bebas'} `}>Let's Build Something <span className="text-primary-purple">Meaningful</span>.</p>
                <p className={`text-white/60 ${isMoble ? 'text-[8px]':'text-xl'}`}>
                    Have a project in mind or want to explore how we can work together? We'd love to hear from you.
                </p>
                <div className="p-4 gap-5 flex flex-col">
                    <div className="flex flex-row items-center gap-6">
                        <EmailOutlinedIcon fontSize={`${isMoble ? 'small':'large'}`} className="text-bright-gold rounded-[3px] sm:p-1"/>
                        <div>
                            <p className={`${isMoble ? 'text-[10px] font-bold text-warm-gold':''} `}>Email Us</p>
                            <p className={`${isMoble ? 'text-[8px] text-warm-gold':''} `}>nexis_hq@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <PhoneOutlinedIcon fontSize={`${isMoble ? 'small':'large'}`} className="text-bright-gold rounded-[3px] sm:p-1"/>
                        <div>
                            <p className={`${isMoble ? 'text-[10px] font-bold text-warm-gold':''} `}>Call Us</p>
                            <p className={`${isMoble ? 'text-[8px] text-warm-gold':''} `}>+234 913 856 5782</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <LocationOnOutlinedIcon fontSize={`${isMoble ? 'small':'large'}`} className="text-bright-gold rounded-[3px] sm:p-1"/>
                        <div>
                            <p className={`${isMoble ? 'text-[10px] font-bold text-warm-gold':''} `}>Our Location</p>
                            <p className={`${isMoble ? 'text-[8px] text-warm-gold':''} `}>Rivers, Lagos</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <AccessTimeOutlinedIcon fontSize={`${isMoble ? 'small':'large'}`} className="text-bright-gold rounded-[3px] sm:p-1"/>
                        <div>
                            <p className={`${isMoble ? 'text-[10px] font-bold text-warm-gold':''} `}>Business Hours</p>
                            <p className={`${isMoble ? 'text-[8px] text-warm-gold':''} `}>Mon - Fri: 9:00 AM - 6:00 PM WAT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isMoble == true ? 'w-full':'w-[50%]'} flex flex-col gap-6`}>
            <div className={`${isMoble ? 'p-4 rounded-xl gap-3':'p-11 rounded-3xl gap-7'} flex flex-col bg-primary-purple/30  backdrop-blur-[11px] border border-primary-purple`}>
                <p className={`${isMoble ? 'text-lg font-bold font-grotesk':'text-4xl font-normal font-sora'} `}>Send Us a Message</p>
                <p className={`text-white/60 ${isMoble ? 'text-[8px]':'text-xl'}`}>Fill out the form and we'll get back to you shortly.</p>
                <div className={`${isMoble ? 'text-[8px] gap-2':'gap-4'} flex flex-row w-full`}>
                    <div className={`${isMoble ? 'gap-1':'gap-2'} flex flex-col w-full text-white`}>
                        <p>Full Name</p>
                        <input type="text" placeholder="Enter your full name" className={`${isMoble ? 'p-2':'p-4'} text-white/70 placeholder:text-white/30 w-full outline-0 border backdrop-blur-2xl border-primary-purple rounded-[4px]`}/>
                    </div>
                    <div className={`${isMoble ? 'gap-1':'gap-2'} flex flex-col w-full`}>
                        <p>Email Address</p>
                        <input type="text" placeholder="Enter your email" className={`${isMoble ? 'p-2':'p-4'} text-white/70 placeholder:text-white/30 w-full outline-0 border backdrop-blur-2xl border-primary-purple rounded-[4px]`}/>
                    </div>
                </div>
                <div className={`${isMoble ? 'text-[8px] gap-2':'gap-4'} flex flex-row w-full`}>
                    <div className={`${isMoble ? 'gap-1':'gap-2'} flex flex-col w-full`}>
                        <p>Company/Organization</p>
                        <input type="text" placeholder="Enter your company name" className={`${isMoble ? 'p-2':'p-4'} text-white/70 placeholder:text-white/30 w-full outline-0 border backdrop-blur-2xl border-primary-purple rounded-[4px]`}/>
                    </div>
                    <div className={`${isMoble ? 'gap-1':'gap-2'} flex flex-col w-full`}>
                        <p>Subject</p>
                        <input type="text" placeholder="What's this about?" className={`${isMoble ? 'p-2':'p-4'} text-white/70 placeholder:text-white/30 w-full outline-0 border backdrop-blur-2xl border-primary-purple rounded-[4px]`}/>
                    </div>
                </div>
                <div className={`${isMoble ? 'text-[8px] gap-2':'gap-4'} flex flex-row w-full`}>
                    <p>Message:</p>
                    <textarea name="" placeholder="Tell us about your project or ideas..." className={`${isMoble == true ? 'h-[100px]':'h-[130px]'} text-white/70 placeholder:text-white/30 border p-3 backdrop-blur-2xl border-primary-purple w-full rounded-[4px]`} id=""></textarea>
                </div>
                <button className={`${isMoble ? 'p-2 font-bold text-[8px]':'p-5'} flex flex-row items-center justify-center gap-3 shadow-lg shadow-warm-gold bg-linear-to-r from-deep-purple to-warm-gold text-white/70 rounded-[4px]`}>Send Message <FiArrowRight /></button>
            </div>
            <div className={`${isMoble ? 'p-3 rounded-xl':'p-11 rounded-3xl'} flex justify-between items-center fex-row gap-3 bg-primary-purple/30  backdrop-blur-[11px] border border-primary-purple`}>
                <div className={`${isMoble ? 'text-[8px] gap-2':'gap-4'} flex flex-row items-center`}>
                    <HeadsetMicOutlinedIcon fontSize={`${isMoble ? 'small':'large'}`} />
                    <div className={`${isMoble ? '':''} flex flex-col`}>
                        <p className="font-semibold">Prefer a quick chat</p>
                        <p>Book a call with our team</p>
                    </div>
                </div>
                <p className={`${isMoble ? 'text-[8px]':'text-xl'} flex flex-row gap-4 items-center text-bright-gold`}>Schedule a call <FiArrowRight /></p>
            </div>
            </div>
        </section>
    )
}