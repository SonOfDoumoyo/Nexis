
import QuoteImg from "../assets/nexis_standalone_assets/02_purple_gold_corridor.png"

export default function QuoteSection() {
    return (
        <div className="flex lg:flex-row md:flex-row flex-col gap-0 h-101.25 p-7.25 items-center lg:gap-72.5 text-white bg-black border-y-border-color relative justify-between">
            <img src={QuoteImg} alt="gold-corridor" className="absolute top-0 right-0 w-full h-full" />
            <p className="font-bebas z-100 text-[43px] uppercase">Good businesses exist.<br /> Great experiences <br /> make peole <span className="text-primary-purple">notice</span></p>
            <p className="z-100 text-[17px] font-medium text-subText">We create digital experiences that do more<br /> than look good they make people feel<br /> something and take action</p>
        </div>
    )
}