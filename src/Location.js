import React, { useRef, forwardRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { IoIosPin } from "react-icons/io";
import jemoMap from "./map jemo.png";
import romanat from "./romanat.png";
import { HiOfficeBuilding } from "react-icons/hi";

export default function Location() {
  const { t } = useTranslation();
  
  // Use useRef to create refs for each location
  const addisRef = useRef(null);
  const mekeleRef = useRef(null);
  const adamaRef = useRef(null);

  const locations = [
    {
      map: jemoMap,
      building: "officeAddis",
      city: t("addis"),
      sub: t("detailSub"),
      mapLink: "https://maps.app.goo.gl/FerZ7iBJSvcdkTEs6",
      ref: addisRef,
    },
    {
      map: romanat,
      building: "officetigray",
      city: t("tigray"),
      sub: t("tigraySub"),
      mapLink: "https://maps.app.goo.gl/W26wJWcRSuDPEAGFA",
      ref: mekeleRef,
    },
    {
      map: romanat,
      building: "officeAdama",
      city: t("Adama"),
      sub: t("AdamaSub"),
      mapLink: "https://maps.app.goo.gl/W26wJWcRSuDPEAGFA",
      ref: adamaRef,
    },
  ];

  // Scroll to the corresponding location using ref
  const scrollToLocation = (locationRef) => {
    locationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-teal-100">
      <div className="container mx-auto px-6 lg:px-12 space-y-14">
        <h2 className="text-center text-4xl font-extrabold text-teal-800 tracking-tight">
          {t("ourLocation")}
        </h2>

        {/* Secondary buttons */}
        <div className="flex justify-center space-x-2 mb-8">
          <button
            onClick={() => scrollToLocation(addisRef)}
            className="inline-flex items-center space-x-2 px-2 py-2 border border-amber-400 text-amber-600 text-sm  rounded-lg hover:bg-amber-100 hover:text-amber-700 active:translate-y-1 active:shadow-inner active:shadow-amber-500 transition-all"
          >
            <HiOfficeBuilding className="text-xl " />
            <span>{t("addisButton")}</span>
          </button>

          <button
            onClick={() => scrollToLocation(mekeleRef)}
            className="inline-flex items-center space-x-1 px-4 py-2 border border-amber-400 text-amber-600 text-sm rounded-lg hover:bg-amber-100 hover:text-amber-700 active:translate-y-1 active:shadow-inner active:shadow-amber-500 transition-all"
          >
            <HiOfficeBuilding className="text-xl " />
            <span>{t("mekeleButton")}</span>
          </button>

          <button
            onClick={() => scrollToLocation(adamaRef)}
            className="inline-flex items-center space-x-2 px-4 py-2 border border-amber-400 text-amber-600 text-sm rounded-lg  hover:bg-amber-100 hover:text-amber-700 active:translate-y-1 active:shadow-inner active:shadow-amber-500 transition-all"
          >
            <HiOfficeBuilding className="text-xl " />
            <span>{t("adamaButton")}</span>
          </button>

        </div>

        {/* Location items */}
        {locations.map((location, index) => (
          <LocationItem
            key={index}
            {...location}
            ref={location.ref} // Pass ref to each LocationItem
            isReversed={index % 2 === 1} // Alternate reverse layout for every other item
          />
        ))}
      </div>
    </section>
  );
}

// Location Item Component
const LocationItem = forwardRef(({ map, building, city, sub, mapLink, isReversed }, ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref} // Attach ref to the DOM element
      className={`grid lg:grid-cols-12 gap-8 items-center py-12 ${isReversed ? "lg:grid-flow-row-dense" : ""}`}
    >
      {/* Map Section */}
      <div
        className={`lg:col-span-6 xl :col-span-7 relative overflow-hidden rounded-lg shadow-lg ${isReversed ? "lg:order-2" : ""}`}
      >
        <img
          src={map}
          alt=""
          className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center z-10 no-underline"
        >
          <button className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white font- rounded shadow-md shadow-teal-800 hover:bg-teal-700 transition">
            <IoIosPin className="text-xl " />
            <span>{t("directionsButton")}</span>
          </button>
        </a>
      </div>

      {/* Content Section */}
      <div
        className={`lg:col-span-6 xl :col-span-5 flex flex-col space-y-6 ${isReversed ? "lg:order-1" : ""}`}
      >
        {/* Location Details */}
        <Card
          customClass="bg-teal-50 shadow-md hover:shadow-lg"
          title={<Trans i18nKey={building} />}
          description={
            <>
              <span className="font- text-teal-700">{city}</span>: {sub}
            </>
          }
        />
      </div>
    </div>
  );
});

// Reusable Card Component
const Card = React.memo(({ title, description, action, customClass }) => (
  <div className={`p-8 rounded-lg shadow-md ${customClass}`}>
    <h3 className="text-3xl font-bold text-teal-700 leading-tight">{title}</h3>
    {description && (
      <p className="text-lg text-gray-600 mt-4 leading-relaxed">{description}</p>
    )}
    {action && action}
  </div>
));
