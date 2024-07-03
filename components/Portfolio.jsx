import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1240px] mx-auto py-16 ">
      <h1 className="text-center font-bold text-2xl p-4">{t("about")}</h1>
      <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
        <div className="hidden sm:block">
          <p>SMM, Digital Creator</p>
        </div>
      </div>
      <h2 className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum
        tenetur ullam, fuga eligendi molestias nisi facere accusamus aspernatur
        porro unde id maiores corporis, quisquam qui repellendus animi soluta
        eius.
      </h2>
      <div className="text-center py-4">
        <h5 className="font-bold text-center underline text-[18px] py-2">
          {/* {t("skills")} */}
          Послуги
        </h5>
        <p className="py-2">
          {/* {t("")} */}
          Повне ведення акаунту: упаковка профілю, аналіз ЦА та конкурентів,
          стратегія, контент план, написання постів, візуал, звіт (потижневий,
          помісячний).
          <br /> Зйомка контенту на 2 тижні - 1 година: 10 готових фото, 2
          змонтовані reels.
        </p>
      </div>
      <div className="py-4">
        <h5 className="font-bold text-center underline text-[18px] py-2">
          {/* {t("skills")} */}
          Разові послуги
        </h5>
        <ul className="leading-relaxed left-aligned py-2 px-2">
          <li>- сценарії та монтаж reels без зйомки </li>
          <li>- створення
          візуалу без зйомки (9 постів, обкладинки+наповнення highlights, шапка
          профілю і логотип)</li>
          <li>- «банка ідей»: розробка 100 ідей для розвитку
          вашого блогу (stories, рубрики, офери).</li>
          {/* {t("")} */}
        </ul>
      </div>
      <div className="py-4">
        <h5 className="font-bold text-center underline text-[18px] py-2">
          {/* {t("skills")} */}
          Копірайтинг{" "}
        </h5>
        <ul className="leading-relaxed left-aligned py-2 px-2">
          <li>- написання рекламних текстів (різна тематика)</li>
          <li>- редагування текстів</li>
          <li>- розробка tone of voice саме для вашого блогу.</li>
          {/* {t("")} */}
        </ul>
      </div>
      <div className="text-center py-4">
        <h5 className="font-bold text-center underline text-[18px] py-2">
          {t("skills")}
        </h5>
        <p className="py-2">
          {/* {t("")} */}
          {t("skills1")}
          <span className="px-2">|</span> {t("skills2")}l
          <span className="px-2">|</span> {t("skills3")}
          <span className="px-2">|</span> {t("skills4")}
        </p>
      </div>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
