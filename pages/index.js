import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import { useTranslation } from "react-i18next";


export default function Home() {
    const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>SMM Portfolio</title>
        <meta name='SMM&Content' content='Slavinska portfolio' />
        <link rel='icon' href='/sun.png' />
      </Head>
      <Hero heading={t("name")} message={t("quote1")} />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
