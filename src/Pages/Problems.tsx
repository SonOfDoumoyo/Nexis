import { FaArrowRight, FaCheck, FaX } from "react-icons/fa6"

interface listDataProp{
    good?: boolean
    text: string
}

function ListData({good = false,text}:listDataProp){
    return(
        <div className="flex items-center gap-[3px]">
            {good ? <FaCheck className="text-bright-gold"/>:<FaX className="text-white"/>}
            <p className="text-subText text-[13px]">{text}</p>
        </div>
    )
}


function Problem(){
    return(
        <div className="flex flex-col gap-3.5 border-r p-10 border-r-border-color">
            <p className="text-primary-purple uppercase font-medium">The problem</p>
            <p className="font-bebas uppercase text-white text-[40px] font-extralight leading-[1.2]">Your business is<br /> better than your<br/> <span className="text-bright-gold">online presence</span></p>
            <p className="text-subText">Great businesses lose oppurtunities every day<br/> because their digital presence doesn't reflect<br/> the quality of what they deliver in real life.</p>
            <div className="flex gap-2.5">
                <div className="border border-border-color relative w-[400px] h-fit rounded-[10px] overflow-hidden">
                    <img src="src/assets/nexis_standalone_assets/before-photo.png" alt="" />
                </div>
                <div className="flex flex-col gap-3">
                    <ListData text="Outdated design"/>
                    <ListData text="Hard to navigate"/>
                    <ListData text="No clear message"/>
                    <ListData text="Doesn't build trust"/>
                    <ListData text="Doesn't convert"/>
                </div>
            </div>
        </div>
    )
}

function Solution(){
    return(
        <div className="flex flex-row p-4 pl-14 items-center gap-5">
            <div className="flex flex-col gap-5">
                <p className="uppercase font-medium text-bright-gold tracking-wider">The nexis transformation</p>
                <img src="src/assets/nexis_standalone_assets/after-photo.png" className="w-[430px]" alt=""/>
            </div>
            <div className="flex flex-col gap-5.5">
                <ListData good={true} text="Modern, intentional design"/>
                <ListData good={true} text="Seamless experience"/>
                <ListData good={true} text="Clear brand story"/>
                <ListData good={true} text="Builds trust instantly"/>
                <ListData good={true} text="Turns visitors into loyal customers"/> 
            </div>
        </div>
    )
}


export default function ProblemSection(){
    return(
        <div className="flex relative border-y-2 p-5 bg-black border-y-border-color">
            <Problem />
            <div className="flex items-center left-[584px] bottom-[249px] p-3.5 border-2 border-bright-gold rounded-full h-fit absolute">
                <FaArrowRight className="text-bright-gold h-fit size-6"/>
            </div>
            <Solution />
        </div>
    )
}