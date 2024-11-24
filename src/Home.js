import React, { useMemo } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import empower from "./empower.jpeg";
import growth from "./growth.jpeg";
import free from "./free.png";
import vision from "./vision.png";
import impact from "./impact.png";
import goal from "./goal.png";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
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

// Call to Action Section
const CallToAction = React.memo(() => {
  const { t } = useTranslation();
  const memoizedT = useMemo(() => t, [t]);

  return (
    <div className="w-full bg-teal-900 py-12 text-center flex flex-col items-center space-y-8">
      <h2 className="text-4xl text-white font-extrabold mb-4">{memoizedT("ctaTitle")}</h2>
      <p className="text-lg text-teal-100 mb-6">{memoizedT("ctaDescription")}</p>
      <Link
        to="/contact"
        className="w-40 h-10 flex justify-center items-center rounded text-white bg-amber-600 font-extrabold hover:bg-amber-500"
      >
        {memoizedT("ctaButton")}
      </Link>
    </div>
  );
});

// Hero Section with Carousel
const HeroSection = React.memo(() => {
  const { t } = useTranslation();
  const memoizedT = useMemo(() => t, [t]);

  const slides = [
    { imgSrc: free, slogan: memoizedT("freeSlogan"), description: memoizedT("freePara"), link: "https://t.me/BetelAmeha" },
    { imgSrc: empower, slogan: memoizedT("mainSlogan"), description: memoizedT("mainPara"), link: "https://t.me/BetelAmeha" },
    { imgSrc: growth, slogan: memoizedT("secondSlogan"), description: memoizedT("secondPara"), link: "https://t.me/BetelAmeha" },
  ];

  return (
    <Carousel controls={false} className="w-full">
      {slides.map((item, index) => (
        <Carousel.Item key={index} className="relative h-[80vh] md:h-[90vh]">
          {/* Background Image */}
          <img src={item.imgSrc} alt={item.slogan} className="object-cover w-full h-full" loading="lazy" />
          <div className="absolute inset-0 bg-teal-950/40"></div>

          {/* Caption Overlay */}
          <Carousel.Caption className="flex flex-col h-full justify-center items-center">
            <h1 className="uppercase font-bold">{item.slogan}</h1>
            <p className="text-sm text-teal-100">{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-700 shadow-lg text-xl mt-10">
                {memoizedT("join")}
              </button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
});

// Vision Section
const VisionSection = React.memo(() => {
  const { t } = useTranslation();
  const memoizedT = useMemo(() => t, [t]);

  return (
    <Container
      customClass="border-t-4 border-blue-600"
      titleCustomClass="text-teal-800"
      img={vision}
      description={memoizedT("visionDescription")}
      ftitle="Our"
      stitle="Vision"
    />
  );
});

// Goal Section
const GoalSection = React.memo(() => {
  const { t } = useTranslation();
  const memoizedT = useMemo(() => t, [t]);

  return (
    <Container
      customClass="border-t-4 border-amber-600"
      titleCustomClass="text-amber-400"
      img={goal}
      description={memoizedT("goalDescription")}
      ftitle="Our"
      stitle="Goal"
    />
  );
});

// Impact Section with Statistics
const ImpactSection = React.memo(() => {
  const { t } = useTranslation();
  const memoizedT = useMemo(() => t, [t]);

  return (
    <div className="w-full bg-teal-100 py-16 px-4 flex flex-col items-center text-center space-y-8">
      <h2 className="text-3xl sm:text-4xl text-teal-900 font-extrabold">{memoizedT("impactTitle")}</h2>
      <p className="text-lg sm:text-xl text-teal-700 max-w-3xl">{memoizedT("impactDescription")}</p>
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
        {/* Image */}
        <img
          src={impact}
          alt="Impact"
          className="h-48 w-48 sm:h-64 sm:w-64 object-contain rounded-lg shadow-lg hover:scale-105 transition duration-300"
          loading="lazy"
        />
        {/* Counter */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-3xl text-teal-900 font-bold">
            <CountUp start={0} end={62823} duration={5} separator="," delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} className="text-amber-400">2,500+</span>}
            </CountUp>
            <span className="text-amber-400">{memoizedT("peopleJoined")}</span>
          </h3>
          <p className="text-teal-600 font-semibold text-lg">{memoizedT("impactStatsDescription")}</p>
        </div>
      </div>
    </div>
  );
});

// Reusable Container Component
const Container = React.memo(({ img, description, ftitle, stitle, customClass, titleCustomClass }) => {
  return (
    <div
      className={`group hover:scale-105 transition-all duration-300 shadow-md shadow-teal-900 px-4 w-80 flex flex-col rounded items-center text-center bg-teal-600 my-3 ${customClass}`}
    >
      <img
        src={img}
        alt={stitle}
        className="h-64 w-64 mb-4 group-hover:opacity-80 transition-opacity duration-300"
        loading="lazy"
      />
      <h2 className="text-white uppercase font-extrabold my-2 group-hover:text-amber-400">
        {ftitle} <span className={titleCustomClass}>{stitle}</span>
      </h2>
      <p className="text-white mt-2 font-medium group-hover:text-teal-200">{description}</p>
    </div>
  );
});
