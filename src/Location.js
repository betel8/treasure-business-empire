import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { IoIosPin } from "react-icons/io";
import jemoMap from "./map jemo.png";
import romanat from "./romanat.png";

export default function Location() {
  const { t } = useTranslation();
  const locations = [
    {
      map: jemoMap,
      building: "officeAddis",
      city: t("addis"),
      sub: t("detailSub"),
      mapLink: "https://maps.app.goo.gl/FerZ7iBJSvcdkTEs6",
    },
    {
      map: romanat,
      building: "officetigray",
      city: t("tigray"),
      sub: t("tigraySub"),
      mapLink: "https://maps.app.goo.gl/W26wJWcRSuDPEAGFA",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-teal-100">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        <h2 className="text-center text-4xl font-extrabold text-teal-800 tracking-tight">
          {t("ourLocation")}
        </h2>
        {locations.map((location, index) => (
          <LocationItem
            key={index}
            {...location}
            isReversed={index % 2 === 1} // Alternate reverse layout for every other item
          />
        ))}
      </div>
    </section>
  );
}

// Location Item Component
const LocationItem = React.memo(({ map, building, city, sub, mapLink, isReversed }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`grid lg:grid-cols-12 gap-8 items-center py-12 ${
        isReversed ? "lg:grid-flow-row-dense" : ""
      }`}
    >
      {/* Map Section */}
      <div
        className={`lg:col-span-6 xl:col-span-7 relative overflow-hidden rounded-lg shadow-lg ${
          isReversed ? "lg:order-2" : ""
        }`}
      >
        <img
          src={map}
          alt=""
          className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div
        className={`lg:col-span-6 xl:col-span-5 flex flex-col space-y-6 ${
          isReversed ? "lg:order-1" : ""
        }`}
      >
        {/* Location Details */}
        <Card
          customClass="bg-teal-50 shadow-md hover:shadow-lg"
          title={<Trans i18nKey={building} />}
          description={
            <>
              <span className="font-semibold text-teal-700">{city}</span>: {sub}
            </>
          }
        />

        {/* Get Directions */}
        <Card
          customClass="bg-white shadow-md hover:shadow-lg"
          title={t("getDirections")}
          action={
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 no-underline"
            >
              <button className="flex items-center  space-x-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition">
                <IoIosPin size={20} />
                <span>{t("directionsButton")}</span>
              </button>
            </a>
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
