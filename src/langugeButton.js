import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();

  // Initialize with the current language from i18n
  const [language, setLanguage] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [PlaceholderShow,setPlaceholderShow]=useState(true);

  // Language options
  const languages = [
    { code: "am", label: "አማርኛ" },
    { code: "en", label: "English" },
    { code: "ti", label: "ትግርኛ" },
    { code: "om", label: "Afaan Oromoo" },
  ];

  // Update i18n language when language changes
  useEffect(() => {
    if (language) i18n.changeLanguage(language);
  }, [language, i18n]);

  // Rotate placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [languages.length]);

  return (
    <div className="flex flex-col items-start">
      <select
        id="language-select"
        className="no-underline h-10 text-amber-400 underline outline-transparent bg-inherit focus:outline-none"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        onMouseDown={()=>{setPlaceholderShow(false)}}
        onBlur={()=>{setPlaceholderShow(true)}}
      >
        {(!language&&PlaceholderShow)&&<option value="" disabled>
          {languages[placeholderIndex].label}
        </option>}
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
