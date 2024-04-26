"use client";
import { Banner } from "@/components/Banner";
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
      <main>
        <section className='w-full windscreen:max-w-[1566px]  dark:bg-gray-900 bg-zinc-100 desktop:h-screen flex mx-auto shadow-md rounded-b-md'>
          <Banner />
        </section>
        <section className='dark:bg-slate-900 windscreen:max-w-[1566px] mx-auto bg-slate-200 rounded-b-lg h-full pb-20 pt-20'>
          <Residencia />
        </section>

        <section className='flex flex-col items-center windscreen:max-w-[1566px] mx-auto my-20 h-[52rem] bg-transparent'>
          <div>
            <h1 className='flex justify-center w-full gap-2 items-center text-slate-950 dark:text-white/90 text-xl lg:text-2xl desktop:text-3xl antialiased text-center py-2 font-semibold font-Roboto'>
              Pensando na sua Empresa{" "}
              <span className='text-ouro'>
                <MdLocationOn />
              </span>
            </h1>
          </div>
          <Sobre />
        </section>

        <Footer />
      </main>
    </section>
  );
}
