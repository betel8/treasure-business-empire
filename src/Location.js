import { useTranslation } from "react-i18next";
import jemoMap from "./map jemo.png";




export default function Location() {
  const { t } = useTranslation();


  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-teal-800 mb-8">{t("ourLocation")}</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="relative w-full h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={jemoMap}
              alt={t("mapAlt")}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-teal-700">{t("office")}</h3>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">{t("addis")}</span>: {t("detailSub")}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-teal-700">{t("getDirections")}</h3>
              <button className="mt-4 px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                {t("directionsButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
