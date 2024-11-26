import { data } from "./App"; // Import data for profiles
import Profile from "./profile"; // Import Profile component
import { useTranslation } from "react-i18next"; // Import translation hook
import TelegramForm from "./TelegramForm";

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
        <div className="flex justify-center ">
              <TelegramForm/>
        </div>
        
        {/* Profile Section - Render profiles dynamically */}
        <div className="grid gap-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles} {/* Render the mapped profiles */}
        </div>
      </div>
    </section>
  );
}
