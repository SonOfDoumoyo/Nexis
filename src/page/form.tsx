import {  useState, type SetStateAction } from "react"
import {createPortal} from "react-dom"
import {FaBullhorn, FaIdCard, FaWallet} from 'react-icons/fa6'
import { FiArrowLeft, FiCalendar, FiChevronDown, FiChevronUp, FiEdit3, FiFileText, FiGlobe, FiGrid, FiInfo, FiMail, FiPhone, FiShield, FiTag, FiTarget, FiUser, FiX } from "react-icons/fi"
import type { IconType } from "react-icons/lib"
import { FiBox } from "react-icons/fi"
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input"
import flags  from "react-phone-number-input/flags"
import { useFormContext} from "../context"
import { useIsLittleAndroid, useIsMobile } from "../Hooks"
import { type projectDetailsType } from "../context"
import {MdBusiness} from "react-icons/md"

function validateProjectForm(projectDetails:projectDetailsType,
    setFormNumber:React.Dispatch<SetStateAction<number>>,
    setServiceError:React.Dispatch<SetStateAction<boolean>>,
    setTimelineError:React.Dispatch<SetStateAction<boolean>>,
    setBudgetError:React.Dispatch<SetStateAction<boolean>>,
    totalErrors: number,
    setTotalErrors:React.Dispatch<SetStateAction<number>>){
        if(projectDetails.service === ''){
            setServiceError(true);setTotalErrors(e => e<3?e+1:e);console.log('serviceErrorSet')
        }
        else if(projectDetails.timeline === ''){
            setTimelineError(true);setTotalErrors(e => e<3?e+1:e)
        }
        else if(projectDetails.budget_range === ''){
            setBudgetError(true);setTotalErrors(e => e<3?e+1:e)
        }
        else{
            setServiceError(false);setTimelineError(false);setBudgetError(false);
            setTotalErrors(0)
            console.log(projectDetails)
            setFormNumber(n => n<3?n+1:n)
        }
        console.log(totalErrors)
    }

interface StepDetailsPrompt{
    number: number
    description: string
    active?: boolean
}

interface DropdownPrompt{
    label: string
    icon: IconType
    title: string
    required?:boolean
    onClick?:(content:string)=>void
    error?:boolean
    stateValue:string
    contents: string[]
}

interface FormHeadingProp{
    icon: IconType
    title: string
    description:string
}

interface InputProp{
    label: string
    placeholder: string
    required?:boolean
    textarea?: boolean
    emailError?:boolean | null
    stateValue:string
    onChange?:(e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>void
}

interface StepSectionProp{
    formNumber: number
}

interface FormProp{
    setFormNumber:React.Dispatch<SetStateAction<number>>
}

interface SubmitBtnProp{
    text:string
}

interface DetailsHeadingProp{
    icon:IconType
    title:string
    pageNumber:number
    setFormNumber:React.Dispatch<SetStateAction<number>>
}



function Heading(){
    return(
        <div className="flex flex-col gap-1.5 mb-3.5">
            <p className="uppercase text-primary-purple font-medium leading-[1.1]">Work with us</p>
            <h1 className="text-white font-bold text-[50px] leading-none">Let's Build<br></br><span className="text-primary-purple">What's Next.</span></h1>
            <p className="text-subText ">Share your project or idea and our team<br/>will get back to you within 24 hours</p>
        </div>
    )
}

function StepDetails({number,description,active = false}:StepDetailsPrompt){
    const isLittleAndroid = useIsLittleAndroid()
    return(
        <div className="flex flex-col gap-1.5 items-center">
            <div className={`relative border-2 ${active ? 'border-purple-600':''} flex justify-center flex-col items-center size-12 rounded-full`}>
                {/* <div className="absolute inset-0 rounded-full bg-primary-purple/40 blur-xl" />
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-300 via-purple-600 to-purple-300 p-0.5">
                    <div className="h-full w-full bg-[#0d0715]"/>
                </div> */}
                <p className="text-white">{number}</p>
            </div>
            <p className={"text-white font-medium text-center " + `${isLittleAndroid ? 'text-[13px]':''}`}>{description}</p>      
        </div>
    )
}

function StepsSection({formNumber}:StepSectionProp){
    const isMobile = useIsMobile()
    
    return(
        <div className="bg-gray-800/40 mb-3.5 flex flex-col items-center px-3 lg:px-6 py-2.5 rounded-2xl border border-subText">
            <div className="flex flex-row gap-17.5 md:justify-between items-center lg:justify-between w-full relative">
                <StepDetails number={1} description="Project Details" active={formNumber >= 1 ? true:false}/>
                <div className={`h-0 ${formNumber >= 1 ? 'bg-purple-600':'bg-gray-700'} lg:left-25.75 left-[18%] w-[17%] md:left-[14%] md:w-[25%] lg:w-[28%] lg:-translate-y-3 p-0.5 absolute ${isMobile ? 'top-[25%]':''}`}/>
                <StepDetails number={2} description="Your Details" active={formNumber >= 2 ? true:false}/>
                <div className={`h-0 ${formNumber >= 2 ? 'bg-purple-600':'bg-gray-700'} lg:right-[18%] right-[24%] w-[20%] md:right-[18%] md:w-[28%] lg:w-[28%] lg:-translate-y-3 p-0.5 absolute ${isMobile ? 'top-[25%]':''}` }/>
                <StepDetails number={3} description="Review and Submit" active={formNumber >= 3 ? true:false}/>
            </div>
        </div>
    )
}

function FormHeading({icon:Icon,title,description}:FormHeadingProp){
    return(
        <div className="flex flex-row gap-2">
            <div className="h-fit p-2.5 bg-gray-700/80 rounded-[10px]"><Icon className="size-12 text-purple-600"/></div>
            <div className="w-[92%] lg:w-[50%]">
                <p className="font-medium uppercase text-[19px]">{title}</p>
                <p className="text-subText text-[17px] leading-none">{description}</p>
            </div>
        </div>
    )
}

function Dropdown({label,icon:Icon,title,contents,required = true,onClick = ()=>null,error=false,stateValue}:DropdownPrompt){
    const editedContents = contents.map((content)=>(<p onClick={()=>{setShowContent(false);onClick(content)}}>{content}</p>))
    const [showContent,setShowContent] = useState(false)
    const edited_title = !title.includes('a ') ? title.replace('Select ',''):title.replace('Select a','')
    return(
        <div>
            <p className="font-medium text-[17px]">{label} {required && <span className="text-red-500">*</span>}</p>
            <div className="flex justify-between px-4 py-2.5 rounded-[10px] bg-gray-700/70 outline-none border border-subText">
                <div className="flex gap-2">
                    <Icon className="text-purple-500 size-6"/>
                    <p className={`text-[14px] lg:text-[16px] ${!contents.includes(stateValue) ? 'text-subText':'text-white'}`}>{stateValue !== ''? stateValue:title}</p>
                </div>
                {showContent ? <FiChevronUp className="text-subText size-6" onClick={()=>setShowContent(c => !c)}/>:<FiChevronDown className="text-subText size-6" onClick={()=>setShowContent(c => !c)}/>}
            </div>
            <div className={`flex flex-row gap-1.5 mt-1.5 items-center text-red-600 tracking-[1px] ${error ? 'block':'hidden'}`}>
                <FiInfo className="size-5"/>
                <p>Please enter a {edited_title}</p>
            </div>
            {showContent && 
            <div className="bg-gray-700/80 rounded-[10px] p-2.5 mt-1.5 flex flex-col gap-3 border border-subText">
                {editedContents}
            </div>}
        </div>
    )
}

function Input({label,placeholder,textarea = false,required=true,onChange = ()=>null,emailError = null,stateValue}:InputProp){
    const edited_label = label.toLowerCase().replace(' ','_')
    return(
        <div className="flex flex-col gap-1.5">
            <label htmlFor={edited_label}>{label} {required && <span className="text-red-500">*</span>}</label>
            {textarea ? 
            <textarea name={edited_label} id={edited_label} value={stateValue} placeholder={placeholder} rows={5} className="rounded-[10px] bg-gray-700/70 outline-none border px-4 py-2.5 border-subText" onChange={(e)=>onChange(e)}></textarea>
            :
            <input type="text" placeholder={placeholder} value={stateValue} name={edited_label} id={edited_label} className={"rounded-[10px] placeholder:text-ellipsis placeholder:text-[14px] lg:placeholder:text-[16px] bg-gray-700/70 outline-none border px-4 py-2.5 " + `${emailError == null ? 'border-subText':!emailError ? 'border-green-500':'border-red-500'}`} required={required} onChange={(e)=>onChange(e)}/>}
            <div className={`flex flex-row gap-1.5 items-center text-red-600 tracking-[1px] ${emailError ? 'block':'hidden'}`}>
                <FiInfo className="size-5"/>
                <p>Invalid Email Address</p>
            </div>
        </div>
    )
}

function ProjectForm({setFormNumber}:FormProp){
    const budget_range = ['150,000 - 300,000','300,000 - 600,000','600,000 - 1,000,000']
    const naira_budget_range = budget_range.map((budget)=> {
        const budgets = budget.split('-')
        const new_budget = `\u20A6${budgets[0]} - \u20A6${budgets[1].replace(' ','')}`
        return new_budget
    })
    const {projectDetails,setProjectDetails} = useFormContext().projectDetailsContext
    const {serviceError,setServiceError} = useFormContext().serviceErrorContext
    const {timelineError,setTimelineError} = useFormContext().timelineErrorContext
    const {budgetError,setBudgetError} = useFormContext().budgetErrorContext
    const [totalErrors,setTotalErrors] = useState(3)
    const saveService = (content:string)=>{
        setProjectDetails(prev => ({...prev,service:content}))
    }
    const saveProjectTitle = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setProjectDetails(prev => ({...prev,project_title:e.target.value}))
    }
    const saveProjectDescription = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setProjectDetails(prev => ({...prev,project_description:e.target.value}))
    }
    const saveProjectGoals =  (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setProjectDetails(prev => ({...prev,project_goals:e.target.value}))
    }
    const saveTimeline = (content:string)=>{
        setProjectDetails(prev => ({...prev,timeline:content}))
    }
    const saveBudgetRange = (content:string)=>{
        setProjectDetails(prev => ({...prev,budget_range:content}))
    }
    const saveMediumHeard = (content:string)=>{
        setProjectDetails(prev => ({...prev,medium_heard:content}))
    }
    return(
        <form action="" className="bg-gray-800/40 border p-5 rounded-2xl border-subText flex flex-col gap-2.5" onSubmit={(e)=>{e.preventDefault();validateProjectForm(projectDetails,setFormNumber,setServiceError,setTimelineError,setBudgetError,totalErrors,setTotalErrors)}}>
            <FormHeading icon={FiBox} title="Tell us about your project" description="The more details you share. the better we can understand how to help."/>
            {/* Form forms 😅 */}
            <div className="flex flex-col gap-2.5">
                <Dropdown label="What do you need help with?" title="Select a service" icon={FiGrid} contents={['Web development', 'App development', 'Videography and Cinematography', 'Graphic designs']} onClick={saveService} error={serviceError} stateValue={projectDetails.service}/>
                <Input label="Project Title" placeholder="e.g. Company Website Redesign" onChange={saveProjectTitle} stateValue={projectDetails.project_title}/>
                <Input label="Project Description" placeholder="Tell us about your project,goals,challenges, and what success looks like for you..." textarea={true} onChange={saveProjectDescription} stateValue={projectDetails.project_description}/>
                <Input label="Project Goals" placeholder="What are your main goals for this project?" onChange={saveProjectGoals} stateValue={projectDetails.project_goals}/>
                <Dropdown label="Timeline" title="Select timeframe" icon={FiCalendar} contents={['1 - 3 months','3 - 6 months','1 year','2 years and more']} onClick={saveTimeline} error={timelineError} stateValue={projectDetails.timeline}/>
                <Dropdown label="Budget Range" title="Select budget range" icon={FaWallet} contents={naira_budget_range} onClick={saveBudgetRange} error={budgetError} stateValue={projectDetails.budget_range}/>
                <Dropdown label="How did you hear about us?" icon={FaBullhorn} title="Select an option" contents={['TikTok', 'Instagram', 'Whatsapp', 'LinkedIn', 'Other']} required={false} onClick={saveMediumHeard} stateValue={projectDetails.medium_heard}/>
            </div>
            <SubmitBtn text="Next: Your Details"/>
        </form>
    )
}

function SubmitBtn({text}:SubmitBtnProp){
    return(
        <input type='submit' value={text} className="rounded-3xl border-3 bg-linear-to-br from-0% from-[#e676e6a4] to-[#3a0b3a] border-transparent w-full p-2.5 mt-4 [background-clip:border-area]"/>
    )
}


function PersonalForm({setFormNumber}:FormProp){
    // const [phoneNum, setPhoneNum] = useState('')
    const [emailError,setEmailError] = useState<boolean | null>(null)
    const [phoneNumError,setPhoneNumError] = useState(false)
    const {personalDetails,setPersonalDetails} = useFormContext().personalDetailsContext
    const emailVerification = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setPersonalDetails(prev => ({...prev,email:e.target.value}))
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)){
            setEmailError(true)
        }
        else{
            setEmailError(false)
        }
    }
    const setFullName = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setPersonalDetails(prev => ({...prev,full_name:e.target.value}))
    }
    const setCompany = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setPersonalDetails(prev => ({...prev,company:e.target.value}))
    }
    const setRole = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setPersonalDetails(prev => ({...prev,role:e.target.value}))
    }
    const setWebsite = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        setPersonalDetails(prev => ({...prev,website:e.target.value}))
    }
    const setPhoneNumber = (e:string | undefined) =>{
        if (e === undefined) return;
        if(!isValidPhoneNumber(e)){
            setPhoneNumError(true)
        }
        else{
            setPhoneNumError(false)
            // setPhoneNum(e)
            setPersonalDetails(prev => ({...prev,phone_number:e}))
        }

    }
    return(
            <form className="bg-gray-800/40 border p-5 rounded-2xl border-subText flex flex-col gap-2.5" onSubmit={(e)=>{e.preventDefault();setFormNumber(n => n+1)}}>
                <FormHeading icon={FiUser} title="Your Details" description="Let's get to know you so we can connect the right way." />
                <Input label="Full Name" placeholder="John Doe" onChange={setFullName} stateValue={personalDetails.full_name}/>
                <Input label="Email Address" placeholder="john@example.com" emailError={emailError} onChange={emailVerification} stateValue={personalDetails.email}/>
                <div className="flex flex-col gap-1.5">
                    <label>Phone Number <span className="text-red-500">*</span></label>
                    <PhoneInput international defaultCountry="NG" flags={flags} value={personalDetails.phone_number} onChange={(e)=>setPhoneNumber(e)}/>
                    <div className={`flex flex-row gap-1.5 mt-1.5 items-center text-red-600 tracking-[1px] ${phoneNumError ? 'block':'hidden'}`}>
                        <FiInfo className="size-5"/>
                        <p>Please Enter A Correct Phone Number</p>
                    </div>
                </div>
                <Input label="Company / Organization" placeholder="Your Company" required={false} onChange={setCompany} stateValue={personalDetails.company}/>
                <Input label="Your Role / Position" placeholder="e.g Founder,CEO,Marketing Manager" required={false} onChange={setRole} stateValue={personalDetails.role}/>
                <Input label="Website (is any)" placeholder="https://yourwebsite.com" required={false} onChange={setWebsite} stateValue={personalDetails.website}/>
                <div className="flex flex-row gap-3 p-3.5 rounded-[10px] bg-gray-700/70 border border-subText">
                    <div className="bg-gray-800/60 border border-purple-400 rounded-full h-fit p-3.5"><FiCalendar className="text-purple-600 size-9"/></div>
                    <div className="flex flex-col leading-none gap-1.5">
                        <p className="text-white tracking-[1px]">We typically respond within</p>
                        <h3 className="text-fuchsia-600 font-bold text-2xl">24 Hours</h3>
                        <p className="text-subText">Mon - Fri, 9AM - 6PM (WAT)</p>
                    </div>
                </div>
                <SubmitBtn text="Next: Review & Submit"/>
            </form>
    )
}

function DetailsHeading({icon:Icon,title,pageNumber,setFormNumber}:DetailsHeadingProp){
    return(
        <div className="flex w-full justify-between">
            <div className="text-purple-600 flex flex-row items-center gap-2">
                <Icon className="size-6"/>
                <p className="uppercase font-bold">{title}</p>
            </div>
            <div className="text-purple-600 hover:cursor-pointer flex flex-row items-center gap-1" onClick={()=>setFormNumber(pageNumber)}>
                <FiEdit3 className="size-6"/>
                <p className="font-bold">Edit</p>
            </div>
        </div>
    )
}

function Table({icons,formDetails}:{icons:IconType[],formDetails:Record<string, string>}){
    return(
        <div className="bg-gray-800/40 overflow-hidden border rounded-2xl border-subText">
            <table className="w-full border-collapse ">
                <tbody className="rounded-2xl">
                    {Object.entries(formDetails).map(([key,value],index)=>{
                        const Icon = icons[index]
                        return(
                            <tr key={index} className="border-b p-5 border-subText">
                                <td className="p-4"><Icon className="size-6 text-purple-600"/></td>
                                <td className="font-bold text-white p-3">{key.replace(key[0],key[0].toUpperCase()).replace('_', " ")}</td>
                                <td className="text-subText p-3">{value !== '' ? value:'-'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}

function ReviewPart({setFormNumber}:{setFormNumber:React.Dispatch<SetStateAction<number>>}){
    const {projectDetails} = useFormContext().projectDetailsContext
    const {personalDetails} = useFormContext().personalDetailsContext
    const projectDetailsIcons = [FiGrid,FiTag,FiFileText,FiTarget,FiCalendar,FaWallet,FaBullhorn]
    const personalDetailsIcons = [FiUser,FiMail,FiPhone,MdBusiness,FaIdCard,FiGlobe]
    const projectDetailsList = Object.entries(projectDetails).map(([key,value])=>(`${key}:${value}`))
    const personalDetailsList = Object.entries(personalDetails).map(([key,value])=>(`${key}:${value}`))
    const projectDetailsMessage = projectDetailsList.join('\n\n')
    const personalDetailsMessage = personalDetailsList.join('\n\n')
    const phone = "2347060478435"
    const message = projectDetailsMessage+personalDetailsMessage
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    return(
        <div className="flex flex-col gap-6">
            <p className="text-white font-bold text-2xl">Review Your Information</p>
            <div className="flex flex-col gap-1.5">
                <DetailsHeading icon={FiBox} title="Project Details" pageNumber={1} setFormNumber={setFormNumber}/>
                <Table formDetails={projectDetails} icons={projectDetailsIcons} />
            </div>
            <div className="flex flex-col gap-1.5">
                <DetailsHeading icon={FiUser} title="Your Details" pageNumber={2} setFormNumber={setFormNumber}/>
                <Table formDetails={personalDetails} icons={personalDetailsIcons}/>
            </div>
            <div className="flex flex-row gap-6 items-center p-3.5 rounded-[10px] bg-gray-700/70 border border-subText">
                <div className="bg-gray-800/60 border border-purple-400 rounded-full h-fit p-3.5"><FiShield className="text-purple-600 size-9"/></div>
                <p className="text-subText">Your information is secure and will<br /> never be shared with third parties</p>
            </div>
            <button className="rounded-3xl bg-purple-700 border-none w-full p-2.5"><a className="[text-decoration:none] font-bold text-white text-[18px]" href={link} target="_blank" rel="noopener noreferrer">Submit My Request</a></button>
        </div>
    )
}


export default function FormSection(){
    const [formNumber,setFormNumber] = useState(1)
    const {setOpenModal} = useFormContext().modalContext
    return(
        createPortal(
            <div className="fixed top-0 h-dvh overflow-y-auto backdrop-blur-[5px] w-full flex flex-col items-center justify-center bg-[#00000045]">
                {formNumber > 1 ? <FiArrowLeft className="size-10 text-white absolute top-2.75 right-5.5" onClick={()=>setFormNumber(n=>n-1)}/>:<FiX className="size-10 text-white absolute top-2.75 right-5.5" onClick={()=>setOpenModal(false)}/>}
                <div className=" w-[93%] lg:w-[63%] h-[80vh]">
                    <Heading />
                    <StepsSection formNumber={formNumber}/>
                    {formNumber === 1 ? <ProjectForm setFormNumber={setFormNumber}/>:formNumber === 2 ? <PersonalForm setFormNumber={setFormNumber}/>:<ReviewPart setFormNumber={setFormNumber}/>}
                </div>
            </div>,
            document.getElementById('root')!
        )
    )
}