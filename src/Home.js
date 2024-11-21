import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiHeadphones } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';  // Importing react-countup

import empower from "./empower.jpeg";
import growth from "./growth.jpeg";
import afi from "./afi.png";
import tbefulllogo from "./tbefulllogo.png";
import bg from "./bg.jpeg";
import free from "./free.png";
import visionBg from './visionbg.jpeg';
import vision from "./vision.png";
import impact from "./impact.png";
import goal from "./goal.png";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col justify-center items-center space-y-10">
      <HeroSection />
      
      <div className="flex flex-wrap justify-center lg:space-x-8">
        <VisionSection />
        <GoalSection />
      </div>
      <ImpactSection />
      <CallToAction />
    </section>
  );
}

export const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-teal-900 py-12 text-center flex flex-col items-center space-y-8">
      <h2 className="text-4xl text-white font-extrabold mb-4">{t("ctaTitle")}</h2>
      <p className="text-lg text-teal-100 mb-6">{t("ctaDescription")}</p>

      <div className="flex flex-col items-center space-y-6">
        {/* Call to Action Button */}
        <Link to="/contact" class="flex w-40 h-10 justify-center no-underline rounded text-white bg-amber-600 items-center p-1 text-center hover:bg-amber-500 font-extrabold ">{t("Get Started")}</Link>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();

  const carouselItems = [
    { imgSrc: free, slogan: t("freeSlogan"), description: t("freePara"), link: "https:t.me/BetelAmeha" },
    { imgSrc: empower, slogan: t("mainSlogan"), description: t("mainPara"), link: "https:t.me/BetelAmeha" },
    { imgSrc: growth, slogan: t("secondSlogan"), description: t("secondPara"), link: "https:t.me/BetelAmeha" }
  ];

  return (
    <Carousel controls={false} className="w-full">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} className="relative h-[80vh]">
          <img src={item.imgSrc} alt={item.slogan} className="inset-0 object-cover w-full h-full" loading="lazy" />
          <div className="absolute inset-0 bg-teal-800/50"></div>
          <Carousel.Caption className="flex flex-col h-full justify-center items-center">
            <h1 className="uppercase">{item.slogan}</h1>
            <p className="text-sm text-teal-100">{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-700 shadow-lg text-xl mt-10 shadow-white">{t("join")}</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const VisionSection = () => {
  const { t } = useTranslation();

  return (
    <div className="group hover:scale-105 transition-all duration-300 ease-in-out shadow-md shadow-teal-900 px-4 py-6 w-72 flex flex-col rounded items-center text-center border-t-4 border-amber-400 bg-teal-600 my-10">
      <img src={vision} alt="Vision" className="h-64 w-64 mb-4 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" loading="lazy" />
      <h2 className="text-white uppercase font-extrabold my-2 group-hover:text-teal-900 transition-colors duration-300 ease-in-out">Our <span className="text-teal-900">Vision</span></h2>
      <p className="text-white mt-2 font-medium group-hover:text-teal-200 transition-colors duration-300 ease-in-out">{t("vision")}</p>
    </div>
  );
};

const GoalSection = () => {
  const { t } = useTranslation();

  return (
    <div className="group hover:scale-105 transition-all duration-300 ease-in-out shadow-md shadow-teal-900 px-4 py-6 w-72 flex flex-col rounded items-center text-center border-t-4 border-blue-600 bg-teal-600 my-10">
      <img src={goal} alt="Goal" className="h-64 w-64 mb-4 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" loading="lazy" />
      <h2 className="text-white uppercase font-extrabold my-2 group-hover:text-amber-400 transition-colors duration-300 ease-in-out">Our <span className="text-amber-400">Goal</span></h2>
      <p className="text-white mt-2 font-medium group-hover:text-teal-200 transition-colors duration-300 ease-in-out">{t("goal")}</p>
    </div>
  );
};

const ImpactSection = () => {
    
  const { t } = useTranslation();

  return (
    <div className="w-full bg-teal-100 py-16 px-4 flex flex-col items-center justify-center text-center space-y-8">
    {/* Section Title */}
    <h2 className="text-3xl sm:text-4xl text-teal-800 font-extrabold mb-4">
      {t("impactTitle")}
    </h2>

    {/* Impact Description */}
    <p className="text-lg sm:text-xl text-teal-700 max-w-3xl mx-auto mb-6">{t("impactDescription")}</p>

    {/* Image and Statistics */}
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
      <img
        src={impact}
        alt="Impact"
        className="h-48 w-48 sm:h-64 sm:w-64 object-contain rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
      />

      {/* Impact Statistics */}
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-3xl text-teal-900 font-bold">
          {/* Counter */}
          <CountUp start={0} end={62823} duration={5} separator="," delay={0}>
            {({ countUpRef }) => (
              <span ref={countUpRef} className="text-amber-400">
                2,500+
              </span>
            )}
          </CountUp>
          <span className="text-amber-400">{t("peopleJoined")}</span>
        </h3>
        <p className="text-teal-600 font-semibold text-lg">{t("impactStatsDescription")}</p>
      </div>
    </div>
  </div>
  );
};
