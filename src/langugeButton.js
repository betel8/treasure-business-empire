import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();

  // Initialize with the current language from i18n
  const [language, setLanguage] = useState(i18n.language || "en");

  // Update the language when it changes
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // Language options
  const languages = [
    { code: "en", label: "English" },
    { code: "am", label: "አማርኛ" },
    { code: "ti", label: "ትግርኛ" },
    { code: "om", label: "Afaan Oromoo" },
  ];

  return (
    <div className="flex flex-col items-start">
      <select
        id="language-select"
        className="h-10 text-amber-400 underline outline-transparent bg-inherit focus:outline-none"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
