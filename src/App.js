import { Link,BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import { FaMapLocationDot, FaRegCopyright } from "react-icons/fa6";
import afi from'./afi.png'
import logo from './logo1.png'
import ChangeLangage from "./langugeButton";
import photo1 from "./photo_1.png"
import photo2 from "./photo_2.png"
import Home from "./Home";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import Location from "./Location";
import { useEffect, useState } from "react";




export default function App (){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {t}=useTranslation()
  return(
    <Router>
        <section className="bg-teal-100 relative">
          <header className={`fixed z-50 top-0 left-0 w-full transition-colors duration-300 ${
        scrolled ? "bg-teal-800/50 backdrop-blur-md" : "bg-transparent"
      }`}>
            <nav className="px-2 py-1 flex flex-wrap justify-between item-center ">
              <Link to={''} className="flex h-10">
                <img src={logo} alt="" className="h-10 w-24"/>
              </Link>
              <div className="flex h-10 w-auto space-x-1">
                
                <Link to={'./location'} className="no-underline h-10 flex text-amber-400 hover:bg-amber-400 hover:text-white hover:border-amber-400 border border-amber-600 text-center font-medium p-1 items-center w-24">
                  <FaMapLocationDot className="mr-1"/>
                  {t('locationButton')}
                </Link>
                <ChangeLangage/>
              </div>
            </nav>
          </header>
          
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/location" element={<Location/>}/>
            <Route path="" element={<Home/>}/>
          </Routes>
          <footer className="bg-teal-100 mt-2 py-2">
            <span className="flex text-center items-center justify-center text-slate-400">
              <FaRegCopyright/>&nbsp; Copyright Treasures Business Empire 2024
            </span>
          </footer>
        </section>
    </Router>
    
  );
}
export const data=[
  {
    name:"Efrata Abebe",
    pic:afi,
    phoneNumber:"+251963291322",
    tg:"@Efrata123",
    link:"Efrata123",
    language:["አማርኛ","English"],
    office:"addis"
  },{
    name:"Netsanet Debebe",
    pic:photo1,
    phoneNumber:"+251910731378",
    tg:"@Netsanetnegn",
    link:"Netsanetnegn",
    language:["አማርኛ","Afaan Oromoo"],
    office:"adama",
  },{
    name:"Melese Debebe",
    pic:photo2,
    phoneNumber:"+251913377495",
    tg:"@melesedebebe",
    link:"melesedebebe",
    language:["አማርኛ","Afaan Oromoo"],
    office:"adama",
  }
]