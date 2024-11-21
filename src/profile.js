import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";


 export default function Profile({img,name,phone,tg,link,languages,office}){
    const lang=languages.map((item)=><span className="px-3 py-0.5  text-white bg-cyan-500/90 rounded-full ">{item}</span>)
    return(
        <div className="bg-teal-200 shadow-xl shandow-amber-200 rounded text-teal-900 relative ">
            <h2 className="pl-40 h-20 rounded-t text-white bg-teal-600 font-bold items-center flex text-xl "><MdOutlineSupportAgent />&nbsp;{name}</h2>
            <div className="flex px-2  ">
                <img src={img} alt="" className="object-contain bg-teal-300 w-36 h-36 z-10 rounded-full border-4 border-teal-200 relative -mt-16"/>
                <div className="justify-center pl-2 grid grid-gap-2 ">
                    <span className="flex items-center my-2">
                        <FaPhoneAlt className="text-xl" />&nbsp;{phone}
                    </span>
                    <span className="flex items-center my-2">
                        <FaTelegram className="text-xl"/>&nbsp;
                        <a href={"https:t.me/"+link} target="_blank" rel="noreferrer" className="text-amber-600 hover:text-amber-500 ">
                        {tg} 
                        </a>
                    </span>
                    <span className="grid grid-flow-col grid-row-1 grid-col-3 gap-1 items-center text-xs">
                        <LuLanguages className="text-xl "/>{lang}
                    </span>
                    <span className="flex items-center my-3">
                        <HiBuildingOffice className="text-xl"/>&nbsp;{office}
                    </span>
                </div>
            </div>
            

        </div>
    )
 }