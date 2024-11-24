import React, { useMemo } from "react";
import PropTypes from "prop-types"; // For prop validation
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

// Profile Component
export default function Profile({ img, name, phone, tg, link, languages, office }) {
  // Memoize the list of languages for performance optimization
  const langList = useMemo(
    () =>
      languages.map((item, index) => (
        <span key={index} className="px-3 py-0.5 text-white bg-cyan-500/90 rounded-full">
          {item}
        </span>
      )),
    [languages]
  );

  return (
    <div className="bg-teal-200 shadow-xl shadow-amber-200 rounded text-teal-900 relative">
      {/* Profile Header */}
      <h2 className="pl-40 h-20 rounded-t bg-[url('./pattern.svg')] bg-teal-600 text-white font-bold flex items-center text-xl">
        <MdOutlineSupportAgent />
        &nbsp;{name}
      </h2>

      {/* Profile Content */}
      <div className="flex px-2">
        {/* Profile Image */}
        <img
          src={img}
          alt={`Profile of ${name}`}
          className="object-contain bg-teal-300 w-36 h-36 z-10 rounded-full border-4 border-teal-200 relative -mt-16"
        />

        {/* Profile Details */}
        <div className="pl-2 grid gap-2">
          {/* Phone Number */}
          <ProfileField icon={<FaPhoneAlt className="text-xl" />} text={phone} />

          {/* Telegram Link */}
          <ProfileField
            icon={<FaTelegram className="text-xl" />}
            text={
              <a
                href={`https://t.me/${link}`}
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 hover:text-amber-500"
              >
                {tg}
              </a>
            }
          />

          {/* Languages */}
          <ProfileField
            icon={<LuLanguages className="text-xl" />}
            text={<div className="flex gap-1">{langList}</div>}
          />

          {/* Office Location */}
          <ProfileField icon={<HiBuildingOffice className="text-xl" />} text={office} />
        </div>
      </div>
    </div>
  );
}

// Reusable Field Component
const ProfileField = ({ icon, text }) => (
  <div className="flex items-center my-2">
    {icon}
    &nbsp;{text}
  </div>
);

ProfileField.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};

// Prop Validation for Profile Component
Profile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  tg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  office: PropTypes.string.isRequired,
};
