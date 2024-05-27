"use client";
import { Banner } from "@/components/Banner";
import { ButtonWhats } from '@/components/ButtonWhats';
import DarkMode from "@/components/DarkMode";
import { DataPrevisão } from "@/components/DataPrev";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Residencia } from "@/components/Residencias";
import { Sobre } from "@/components/Sobre";
import { MdLocationOn } from "react-icons/md";

export default function Home() {

  return (
    <section>
      <Header />
      <DarkMode />
      <DataPrevisão />
      <ButtonWhats />
      <main>
        <section className='w-full windscreen:max-w-[1566px]  dark:bg-gray-900 bg-zinc-100 desktop:h-screen flex mx-auto shadow-md rounded-b-md'>
          <Banner />
        </section>
        <section id='residence' className='dark:bg-slate-900 windscreen:max-w-[1566px] mx-auto bg-slate-200 rounded-b-lg h-full pb-20 pt-20'>
          <Residencia />
        </section>

        <Footer />
      </main>
    </section>
  );
}
