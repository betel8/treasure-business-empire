import { data } from "./App"; // Import data for profiles
import Profile from "./profile"; // Import Profile component
import { FaRobot } from "react-icons/fa6"; // Import Telegram bot icon
import telegramLogo from "./Telegram_logo.png"; // Import Telegram logo image
import { useTranslation } from "react-i18next"; // Import translation hook

export default function Contact() {
  // Destructure translation function
  const { t } = useTranslation();

  // Map over data to create profile cards dynamically
  const profiles = data.map(({ phoneNumber, name, tg, pic, link, language, office }) => (
    <Profile
      key={phoneNumber}  // Ensure each profile has a unique key
      phone={phoneNumber} // Pass phone number
      name={t(name)}      // Translate name
      tg={tg}             // Pass Telegram handle
      img={pic}           // Pass profile image
      link={link}         // Pass link (if any)
      languages={language} // Pass available languages
      office={t(office)}  // Translate office name
    />
  ));

  return (
    <section className="grid gap-6 justify-center px-4 pt-14">
      {/* Main Container for Section */}
      <div className="grid gap-6">
        
        {/* Telegram Bot Section */}
        <div className="bg-teal-200 shadow-xl shadow-amber-200 rounded text-teal-900">
          <h2 className="pl-40 h-20 rounded-t text-white bg-teal-600 font-bold items-center flex text-xl">
            <FaRobot />&nbsp;{t("telegrambot")} {/* Display Telegram bot header */}
          </h2>
          <div className="flex p-4">
            {/* Telegram logo */}
            <img
              src={telegramLogo}
              alt="Telegram Bot Logo" // Improved alt text for accessibility
              className="object-contain bg-teal-300 w-36 h-36 z-10 rounded-full border-4 border-teal-200 relative -mt-16"
            />
            <div className="pl-4">
              {/* Link to Telegram bot */}
              <a 
                href="https://t.me/BetelAmeha" 
                target="_blank" 
                rel="noreferrer" 
                className="text-amber-600 hover:text-amber-500"
                aria-label="Telegram Bot Link"
              >
                @Tbebot
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile Section - Render profiles dynamically */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles} {/* Render the mapped profiles */}
        </div>
      </div>
    </section>
  );
}
