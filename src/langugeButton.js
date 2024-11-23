import {  useEffect, useState } from "react"
import { useTranslation } from "react-i18next";



export default function ChangeLangage (){
  const { i18n } = useTranslation();
  const [language,setLanguage]=useState("en");
  useEffect(()=>{
    i18n.changeLanguage(language)
  },[language,i18n])
  useEffect(()=>{
    i18n.changeLanguage(language)
  })


    return(
            <select className=" h-10  text-amber-400 underline outline-transparent bg-inherit focus:outline-none" 
            onChange={(e)=>{
                setLanguage(e.target.value)
              }
            }>
            <option value={"en"}>English</option>
            <option value={"am"} >አማርኛ</option>
            <option value={"ti"}>ትግርኛ</option>
            <option value={"om"}>Afaan Oromoo</option>
          </select>
    )
}