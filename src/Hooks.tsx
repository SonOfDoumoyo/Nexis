import { useEffect, useState } from "react"


export function useIsLittleAndroid(){
    const [isLittleAndroid,setIsLittleAndroid] = useState(window.matchMedia('(max-width:400px)').matches)
    useEffect(()=>{
        const windowMedia = window.matchMedia('(max-width:400px)')
        const handleChange = (e:MediaQueryListEvent)=>{
            setIsLittleAndroid(e.matches)
        }
        windowMedia.addEventListener('change',handleChange)
        return ()=>{
            windowMedia.removeEventListener('change',handleChange)
        }
    },[])
    return isLittleAndroid
}

export function useIsMobile(){
    const [isMobile,setIsMobile] = useState(window.matchMedia('(max-width:767px)').matches)
    useEffect(()=>{
        const windowMedia = window.matchMedia('(max-width:767px)')
        const handleChange = (e:MediaQueryListEvent)=>{
            setIsMobile(e.matches)
        }
        windowMedia.addEventListener('change',handleChange)
        return ()=>{
            windowMedia.removeEventListener('change',handleChange)
        }
    },[])
    return isMobile
}