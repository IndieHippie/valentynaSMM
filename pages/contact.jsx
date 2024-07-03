import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";

const contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero heading={t("contact1")} message={t("contact2")} />
      <Contact />
    </div>
  );
};

export default contact;
