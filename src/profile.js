import React, { useMemo } from "react";
import PropTypes from "prop-types"; // For prop validation
import { FaTelegram } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";

// Profile Component
export default function Profile({ img, name, phone, tg, link, languages, office }) {
  // Memoize the list of languages for performance optimization
  const langList = useMemo(
    () =>
      languages.map((item, index) => (
        <span key={index} className="bg-cyan-500 text-white text-sm rounded-full px-2 py-0.5">{item}</span>
      )),
    [languages]
  );

  return (
    <div className="bg-teal-200 shadow-lg rounded-lg w-full max-w-3xl mx-auto overflow-hidden">
      {/* Profile Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-8 flex flex-col items-center space-y-6 ">
        <div className="w-48 h-48 rounded-full border-4 border-teal-300 object-cover shadow-lg mb-4 overflow-hidden relative">
          <img
            src={img}
            alt={`Profile of ${name}`}
            className="w-full h-full object-cover object-top" // Ensuring the image fits properly
          />
        </div>
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-lg">{phone}</p>
        <a
          href={`https://t.me/${link}`}
          target="_blank"
          rel="noreferrer"
          className="text-amber-600 hover:text-amber-500 font-semibold transition-colors duration-300"
        >
          <FaTelegram className="text-2xl inline-block mr-2" /> {tg}
        </a>
      </div>

      {/* Profile Info Sections */}
      <div className="p-6 space-y-6">
        {/* Languages Section */}
        <ProfileInfoSection title="Languages" icon={<LuLanguages />} content={<div className="flex gap-2">{langList}</div>} />

        {/* Office Location Section */}
        <ProfileInfoSection title="Office Location" icon={<HiBuildingOffice />} content={office} />
      </div>
    </div>
  );
}

// Reusable Info Section Component
const ProfileInfoSection = ({ title, icon, content }) => (
  <div className="bg-teal-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center mb-2">
      {icon && <div className="text-teal-600 text-xl mr-3">{icon}</div>}
      <h3 className="text-lg font-semibold text-teal-700">{title}</h3>
    </div>
    <div className="text-teal-800">{content}</div>
  </div>
);

// Prop Validation for Profile Component
ProfileInfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  content: PropTypes.node.isRequired,
};

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  tg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  office: PropTypes.string.isRequired,
};
