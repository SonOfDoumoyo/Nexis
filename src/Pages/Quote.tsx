

export default function QuoteSection() {
    return (
        <div className="flex h-[405px] p-[29px] items-center gap-[290px] text-white bg-black border-y-border-color relative justify-between">
            <img src="src/assets/nexis_standalone_assets/02_purple_gold_corridor.png" alt="gold-corridor" className="absolute top-0 right-0 w-full h-full" />
            <p className="font-bebas z-[100] text-[43px] uppercase">Good businesses exist.<br /> Great experiences <br /> make peole <span className="text-primary-purple">notice</span></p>
            <p className="z-100 text-[17px] font-medium text-[#ffffffa4]">We create digital experiences that do more<br /> than look good they make people feel<br /> something and take action</p>
        </div>
    )
}