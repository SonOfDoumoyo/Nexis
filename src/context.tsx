import { createContext,useContext,useState, type SetStateAction } from "react";

type ContextType = {
    modalContext:{
        openModal:boolean;
        setOpenModal:React.Dispatch<SetStateAction<boolean>>
    };
    projectDetailsContext:{
        projectDetails:projectDetailsType;
        setProjectDetails:React.Dispatch<SetStateAction<projectDetailsType>>
    };
    personalDetailsContext:{
        personalDetails:personalDetailsType,
        setPersonalDetails:React.Dispatch<SetStateAction<personalDetailsType>>
    }
    serviceErrorContext:{
        serviceError: boolean;
        setServiceError:React.Dispatch<SetStateAction<boolean>>
    };
    timelineErrorContext:{
        timelineError: boolean;
        setTimelineError:React.Dispatch<SetStateAction<boolean>>
    };
    budgetErrorContext:{
        budgetError:boolean;
        setBudgetError:React.Dispatch<SetStateAction<boolean>>
    }

}

export type projectDetailsType = {
    service: string;
    project_title: string;
    project_description: string;
    project_goals: string;
    timeline: string;
    budget_range: string;
    medium_heard: string;
}

export type personalDetailsType = {
    full_name: string;
    email: string;
    phone_number: string;
    company: string;
    role: string;
    website: string;
}

export const formContext = createContext<ContextType | null>(null)

export function FormContextProvider({children}:{children:React.JSX.Element}){
    const [openModal,setOpenModal] = useState(false)
    const [projectDetails,setProjectDetails] = useState({
        service: "",
        project_title:'',
        project_description:'',
        project_goals:'',
        timeline:'',
        budget_range:'',
        medium_heard:''
    })
    const [personalDetails,setPersonalDetails] = useState({
        full_name:'',
        email:'',
        phone_number:'',
        company:'',
        role:'',
        website:''
    })
    const [serviceError,setServiceError] = useState(false)
    const [timelineError,setTimelineError] = useState(false)
    const [budgetError,setBudgetError] = useState(false)
    const values = {
        modalContext:{openModal,setOpenModal},
        projectDetailsContext:{projectDetails,setProjectDetails},
        personalDetailsContext:{personalDetails,setPersonalDetails},
        serviceErrorContext:{serviceError,setServiceError},
        timelineErrorContext:{timelineError,setTimelineError},
        budgetErrorContext:{budgetError,setBudgetError}
    }
    return(
        <formContext.Provider value={values}>
            {children}
        </formContext.Provider>
    )
}

export function useFormContext(){
    const ctx = useContext(formContext)
    if (!ctx) throw new Error('useFormContext must be used within it\'s provider')
    return ctx
}