"use client";

import { IoHome } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { MdApartment } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { useContext, useEffect, useState } from "react";

import Link from 'next/link';

export function Header() {
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const photo = localStorage.getItem("userFoto");
    setUserName(name);
    setUserPhoto(photo);
  }, []);

  return (
    <header className='fixed top-0 dark:bg-slate-950 bg-slate-100 flex w-full windscreen:h-24 px-4 desktop:px-20 shadow-md z-10 text-zinc-50 justify-between items-center font-jakarta'>
      <div className='flex w-16 lg:w-[20rem] items-center'>
        <div className='flex gap-1 items-center w-full h-20 rounded-full'>
          <img
            className='size-10 lg:size-14 rounded-full p-0.5 bg-black'
            src='/Moraes/logo.png'
            alt=''
          />
          <div className='hidden md:flex justify-center items-center pl-2 font-Aniyah text-sm desktop:text-md'>
            <span className=' w-full xl:items-center gap-1 font-bold dark:text-ouro text-black'>
              Bela Santa Catarina
              <span />
            </span>
          </div>
        </div>
      </div>

      <div className='flex-1 flex md:hidden'>
        <button className='-ml-3' onClick={toggleMenu}>
          {menuOpen ? (
            <MdClose color='#DAA520' size='22' />
          ) : (
            <HiMenu color='#DAA520' size='22' />
          )}
        </button>

        {menuOpen && (
          <div
            className='md:hidden flex absolute bg-slate-950 w-[55%] top-[6.5rem] left-2 rounded-xl'
            id='menu'
          >
            <nav className='w-full'>
              <Link
                className='text-white/80 hover:bg-slate-900 rounded-t-xl overflow-hidden object-contain flex gap-3 items-center px-3 py-5 w-full antialiased text-sm'
                href='/'
              >
                <span>
                  <IoHome color='#DAA520' size='25' />
                </span>
                Início
              </Link>
              <Link
                className='text-white/80 hover:bg-slate-900 overflow-hidden object-contain flex gap-3 items-center px-3 py-4 w-full antialiased text-sm'
                href='/#residence'
              >
                <span>
                  <MdApartment color='#DAA520' size='25' />
                </span>
                Imóveis
              </Link>
            

              <a
                className='text-white/80 hover:bg-slate-900 overflow-hidden object-contain flex gap-3 items-center px-3 py-5 w-full antialiased text-sm'
                href='https://api.whatsapp.com/send?phone=5547997261914&text=Ol%C3%A1,%20Gostaria%20de%20Saber%20mais'
              >
                <span>
                  <MdContactPhone color='#DAA520' size='25' />
                </span>
                Contato
              </a>

              <a
                className='text-white/80 hover:bg-slate-900 overflow-hidden object-contain flex gap-3 items-center px-3 py-5 border-t border-white/40 w-full antialiased text-sm rounded-b-xl'
                href=''
              >
                <span>
                  <MdContactSupport color='#DAA520' size='25' />
                </span>
                Suporte
              </a>
            </nav>
          </div>
        )}
      </div>
      <nav className='lg:flex items-center px-2 text-center bg-gray-950 h-16 windscreen:w-[25%] rounded-lg mx-auto justify-center text-sm gap-8 uppercase hidden desktop:w-[20%]'>
        <Link
          className='flex justify-center px-1 text-center items-center gap-1 font-medium rounded-lg w-20 py-3 bg-zinc-700'
          href='/'
        >
          <span>
            <IoHome color='#fff' size='18' />
          </span>
          Início
        </Link>
        <Link
          className='flex items-center justify-center px-1 gap-1 font-medium rounded-lg w-20 py-3 hover:bg-zinc-700'
          href='/#residence'
        >
          Imóveis
        </Link>
       
        <a
          className='flex items-center justify-center px-1 gap-1 font-medium rounded-lg w-20 py-3 hover:bg-zinc-700'
          href='https://api.whatsapp.com/send?phone=5547997261914&text=Ol%C3%A1,%20Gostaria%20de%20Saber%20mais'
        >
          Contato
        </a>
      </nav>

      <div className='flex items-center gap-2'>
        <a href=''></a>
        <span className='text-black dark:text-white/90 text-xs lg:text-base font-medium'>
          Bem-Vindo,{" "}
          <Link href='/login' className='text-xs lg:text-base text-ouro dark:text-black p-2 px-2 rounded-md dark:bg-ouro bg-black font-semibold'>
            {userName ? userName : 'Login'}
          </Link>
        </span>
        <img
          className='size-10 rounded-full border border-ouro'
          src={userPhoto ? userPhoto : '/Moraes/Users.png'}
          alt=''
        />
      </div>
    </header>
  );
}
