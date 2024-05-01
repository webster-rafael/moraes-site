"use client";
import { useContext, useState } from "react";
import { HouseContext } from "@/components/Search/houseContext";
import { useRouter } from "next/router";
import DarkMode from "@/components/DarkMode";
import Link from "next/link";

export default function Sobre() {
  const [name, setUserName] = useState("Entrar");
  const [foto, setFoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("userName", name);
    localStorage.setItem("userFoto", URL.createObjectURL(foto));
  };

  return (
    <main className='w-full flex justify-center items-center h-screen lg:h-screen overflow-hidden'>
      <DarkMode />
      <div className='relative lg:flex items-center h-full lg:h-[35rem] desktop:h-[45rem] lg:w-4/6 dark:bg-slate-800 bg-slate-950 shadow-lg shadow-black/80 lg:rounded-lg'>
        <div className='w-3/6 hidden md:block'>
          <img
            className='h-[45rem] lg:h-[35rem] desktop:h-[45rem] w-full rounded-t-lg shadow-lg shadow-black/90'
            src='https://dwvapp.b-cdn.net/1680541410039_de244f07-6f22-4328-8428-6ce91f3360ff.jpg'
            alt=''
          />
          <div className='hidden lg:flex relative w-full h-full justify-center font-primary'>
            <button className='flex absolute flex-col w-[17rem] rounded-lg text-start px-4 justify-center bottom-0 transform translate-y-2/4 h-[6rem] bg-zinc-100 dark:bg-slate-950 dark:text-ouro shadow-lg'>
              <h1 className='font-semibold'>Encontre o melhor negócio</h1>
              <h4 className='text-sm dark:text-white'>
                Venha fazer parte dessa história
              </h4>
            </button>
          </div>
        </div>

        <div className='md:w-4/6 p-10 h-[40rem] font-jakarta dark:text-zinc-50 relative'>
          <div className='w-full flex items-center uppercase gap-2'>
            <img
              className='size-10 lg:size-14 rounded-full p-0.5 bg-black'
              src='Moraes/logo.png'
              alt=''
            />
            <span className='text-white text-lg font-jakarta font-medium'>
              Bela{" "}
              <span className='bg-ouro p-1 rounded-lg'>Santa Catarina</span>
            </span>
          </div>

          <div className='w-full flex justify-center text-center mb-6 lg:mb-0 mt-10'>
            <h1 className='text-2xl font-medium text-slate-50'>
              Faça seu Login
            </h1>
          </div>
          <div className=''>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3 w-full mx-auto md:max-w-[30rem]'
              action=''
            >
              <label
                htmlFor='email-address-icon'
                className='block text-sm font-medium dark:text-gray-50 text-white '
              >
                Seu Nome
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                  </svg>
                </div>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type='text'
                  name='name'
                  id='email-address-icon'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Maria de Fátima'
                />
              </div>

              <label
                htmlFor='email'
                className='block text-sm font-medium dark:text-gray-50 text-white '
              >
                Seu E-mail
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 16'
                  >
                    <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
                    <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
                  </svg>
                </div>
                <input
                  type='email'
                  name='email'
                  id='email-address-icon'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@gmail.com'
                />
              </div>

              <label
                className='flex text-sm font-medium dark:text-gray-50 text-white '
                htmlFor='user_avatar'
              >
                Carregar Foto
              </label>
              <div className='flex gap-3'>
                <input
                  onChange={(e) => setFoto(e.target.files[0])}
                  name='foto'
                  className='flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-3/5 ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  aria-describedby='user_avatar_help'
                  id='user_avatar'
                  type='file'
                />
                 <button
                type='submit'
                className='flex justify-center items-center text-white  rounded-lg w-3/6 bg-blue-500'
              >
                Confirmar Foto
              </button>
                
              </div>

              <div
                className='mt-1 text-sm text-gray-500 dark:text-gray-500'
                id='user_avatar_help'
              >
                <p className='text-xs'>
                  Uma foto de perfil é útil para confirmar que você está
                  conectado à sua conta
                </p>
              </div>

              <div className='flex items-start mb-5'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                    required
                  />
                </div>
                <label
                  htmlFor='terms'
                  className='flex items-center ms-2 m-auto text-xs font-medium dark:text-gray-50 text-gray-300 gap-1'
                >
                  Concordo com a utilização dos meus dados para otimizar a{" "}
                  <a
                    href='#'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    experiência no site.
                  </a>
                </label>
              </div>
              <Link
                  href='/'
                  className='text-white bg-ouro hover:bg-ouro/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Confirmar Foto
                </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
