import React, { useCallback } from "react";

export default function useSmoothSCroll(){

    const scrollTo=useCallback((id)=>{

        const el=document.getElementById(id)

        if(el){
            el.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        }
    },[])  

    return scrollTo
}