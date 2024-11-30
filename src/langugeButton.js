import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();

  // State to store the selected language and placeholder index
  const [language, setLanguage] = useState(""); // Currently selected language code
  const [placeholderIndex, setPlaceholderIndex] = useState(0); // Index for rotating placeholder text
  const [placeholderShow, setPlaceholderShow] = useState(true); // Control visibility of placeholder

  // Language options for the select dropdown
  const languages = [
    { code: "am", label: "አማርኛ" },
    { code: "en", label: "English" },
    { code: "ti", label: "ትግርኛ" },
    { code: "om", label: "Afaan Oromoo" },
  ];

  // Effect to update i18n language when the language state changes
  useEffect(() => {
    if (language) i18n.changeLanguage(language); // Change language using i18n API
  }, [language, i18n]);

  // Effect to rotate the placeholder text every 2 seconds
  useEffect(() => {
    // Set interval to cycle through the languages for placeholder
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % languages.length); // Cycle through the language list
    }, 2000); // Change placeholder every 2 seconds

    // Cleanup interval when the component is unmounted
    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <div className="flex flex-col items-start">
      <select
        id="language-select"
        className="no-underline h-10 text-amber-400 underline outline-transparent bg-inherit focus:outline-none"
        value={language}
        onChange={(e) => setLanguage(e.target.value)} // Update language on change
        onMouseDown={() => setPlaceholderShow(false)} // Hide placeholder on mouse click
        onBlur={() => setPlaceholderShow(true)} // Show placeholder again when select loses focus
      >
        {/* Render placeholder if no language is selected and placeholder is visible */}
        {!language && placeholderShow && (
          <option value="" disabled>
            {languages[placeholderIndex].label} {/* Rotating placeholder text */}
          </option>
        )}
        
        {/* Map over available languages to display them in the dropdown */}
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
