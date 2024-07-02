import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("ukr");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`font-serif ${
          selectedLanguage === "en" ? "text-active font-bold" : "text-gray-500"
        }`}
      >
        Eng
      </button>{" "}
      |{" "}
      <button
        onClick={() => handleLanguageChange("ukr")}
        className={`font-serif ${
          selectedLanguage === "ukr" ? "text-active font-bold" : "text-gray-500"
        }`}
      >
        Укр
      </button>
    </div>
  );
}

export default LanguageSwitcher;
