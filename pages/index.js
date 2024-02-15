import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SMM Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/sun.png' />
      </Head>
      <Hero heading='Valentyna Slavinska' message='SMM з душею музиканта і навпаки.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
