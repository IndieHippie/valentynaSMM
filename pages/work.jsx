import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import { useTranslation } from "react-i18next";


const Work = () => {
    const { t } = useTranslation();

  return (
    <div>
      <Hero heading={t("work2")} message={t("work3")} />
      <Portfolio />
    </div>
  );
};

export default Work;
