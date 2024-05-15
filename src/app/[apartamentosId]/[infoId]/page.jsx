'use client'
import { apartmentData } from "@/app/data";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";
import { FaCar } from "react-icons/fa";

import { useState } from "react";
import { Header } from "@/components/Header";
import DarkMode from "@/components/DarkMode";

export default function Info({ params }) {
  const id = params.infoId;

  const data = apartmentData.find((house) => {
    return house.id === parseInt(id);
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [galeryOpen, setGaleryOpen] = useState(false);
  const toggleGalery = () => {
    setGaleryOpen(!galeryOpen);
  };

  function enviarMensagem() {
    var mensagem = `Olá, gostaria de saber sobre o imóvel ${data.residencial}, localizado na cidade de ${data.cidade}.`;
    var url = `https://api.whatsapp.com/send?phone=5547997261914&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

  return (
    <>
      <Header />
      <DarkMode />
      <section className='mt-24 lg:mt-[5.1rem] desktop:mt-28'>
        <div className='bg-gray-300 h-full mx-auto windscreen:min-h-[50rem] lg:h-[34.5rem] desktop:h-full mb-1 windscreen:max-w-[1500px]'>
          <div className='flex w-full mx-auto h-full justify-center flex-col lg:flex-row lg:items-start lg:justify-between shadow-lg shadow-black/60 bg-slate-950'>
            <div className='flex flex-col h-full items-start lg:flex-row '>
              <div className='max-w-[768px] h-full lg:h-[33rem] desktop:h-full bg-slate-950 flex justify-center flex-col text-center items-center'>
                <div className='mb-10 mx-auto w-full justify-center  lg:mb-1 desktop:mb-5 md:mx-auto xl:w-full flex h-full'>
                  <img
                    className='sm:w-screen md:max-w-[500px] desktop:w-[700px] h-[500px] lg:h-[28rem] windscreen:h-[47rem] windscreen:rounded-b-[100px]'
                    src={data.foto}
                    alt=''
                  />
                </div>
                <div className=' flex justify-between items-center w-2/4 text-ouro mb-4'>
                  <div className='text-center flex flex-col items-center w-20'>
                    <BiBed />
                    <div className='text-center'>{data.dormitórios}</div>
                  </div>

                  <div className='text-center flex flex-col items-center w-20'>
                    <BiBath />
                    <div className='text-center'>{data.banheiros}</div>
                  </div>

                  <div className='text-center flex flex-col items-center w-20'>
                    <MdOutlineBathroom />
                    <div className='text-center'>{data.suítes}</div>
                  </div>

                  <div className='text-center flex flex-col items-center w-20'>
                    <FaCar />
                    <div className='text-center'>{data.estacionamento}</div>
                  </div>

                  <div className='text-center flex flex-col items-center w-20'>
                    <BiArea />
                    <div className='text-center'>{data.metragem}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-1 flex-col'>
              <div className='flex justify-between items-center h-20 md:px-4 desktop:px-4 lg:px-4 bg-slate-950'>
                <div className='lg:flex items-center justify-center my-auto gap-2 px-2'>
                  <h2 className='windscreen:text-2xl xl:text-lg text-xs font-semibold text-white'>
                    {data.residencial}
                  </h2>
                  <h3 className='windscreen:text-lg xl:text-base text-xs bg-ouro text-white px-1 text-center rounded-lg lg:uppercase font-semibold py-1'>
                    {data.cidade}
                  </h3>
                </div>
                <div className=' lg:mb-0 flex xl:flex-row items-end py-0 md:items-center gap-x-2 text-xs md:py-4 lg:py-0'>
                  <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
                    <div className='bg-green-500 text-xs lg:text-xs h-8 md:h-10 items-center flex text-white px-2 lg:px-3 rounded-full'>
                      {data.rua}, N-{data.número}
                    </div>
                    <div className='bg-violet-500 h-8 md:h-10 items-center flex text-white px-2 lg:px-3 rounded-full'>
                      {data.bairro}
                    </div>
                  </div>
                </div>
                <button
                onClick={enviarMensagem}  className='desktop:text-2xl lg:text-lg xl:text-xl text-xs flex flex-col my-auto font-semibold bg-ouro px-3 py-1 rounded-lg text-white hover:transition hover:scale-105 hover:bg-yellow-600'>
                  R${data.valor}
                </button>
              </div>

              <div className='h-screen md:h-full'>
                <iframe
                  className='w-full h-[100%] lg:h-[29rem] desktop:h-[46.52rem]'
                  src={data.link}
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
