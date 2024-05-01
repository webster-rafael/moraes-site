import { SiHomebridge } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";

export function Sobre() {
  return (
    <div className='relative flex items-start md:items-center md:w-5/6 h-[70rem] lg:h-[45rem] dark:bg-slate-800 bg-zinc-200 shadow-lg m-auto'>
      <div className='lg:w-3/6'>
        <img
          className='hidden md:flex h-[45rem] w-full rounded-t-lg shadow-lg shadow-black/90'
          src='https://dwvapp.b-cdn.net/1680541410039_de244f07-6f22-4328-8428-6ce91f3360ff.jpg'
          alt=''
        />
        <div className='relative w-full h-full md:flex justify-center font-primary hidden'>
          <button className='flex absolute flex-col w-[17rem] rounded-lg text-start px-4 justify-center bottom-0 transform translate-y-2/4 h-[6rem] bg-zinc-100 dark:bg-slate-950 dark:text-ouro shadow-lg'>
            <div className=' mx-auto relative w-full'>
              <SiHomebridge className='absolute top-0 transform -translate-y-2/4 right-0 translate-x-2/4 text-4xl bg-white rounded-full text-blue-700 dark:text-ouro dark:bg-black' />
            </div>
            <h1 className='font-semibold'>Encontre o melhor negócio</h1>
            <h4 className='text-sm dark:text-white'>
              Navegue por milhares de propriedades
            </h4>
          </button>
        </div>
      </div>

      <div className='lg:w-4/6 grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 h-screen lg:h-[40rem] font-jakarta dark:text-zinc-50 md:relative'>
        <div className='w-full h-full flex items-end flex-col p-3'>
          <img
            className='flex items-start size-16'
            src='/Moraes/icon-1.png'
            alt=''
          />
          <div className='flex h-full flex-col tracking-tighter'>
            <h1 className='font-semibold text-start w-full text-xl pb-5'>
              Seguro de propriedade
            </h1>
            <h3 className='opacity-70'>
              Oferecemos aos nossos clientes proteção patrimonial com cobertura
              de responsabilidade civil e seguro para uma vida melhor.
            </h3>
          </div>
        </div>
        <div className=' w-full h-full flex items-end flex-col p-3'>
          <img
            className='flex items-end size-16'
            src='/Moraes/icon-2.png'
            alt=''
          />
          <div className='flex h-full flex-col tracking-tighter'>
            <h1 className='font-semibold text-start w-full text-xl pb-5'>
              Melhor preço
            </h1>
            <h3 className='opacity-70'>
              Não tem certeza de quanto deve cobrar pelo seu imóvel? Não precisa
              se preocupar, deixe-nos fazer os números para você.
            </h3>
          </div>
        </div>
        <div className=' w-full h-full flex items-end flex-col p-3'>
          <img
            className='flex items-end size-16'
            src='/Moraes/icon-3.png'
            alt=''
          />
          <div className='flex h-full flex-col tracking-tighter'>
            <h1 className='font-semibold text-start w-full text-xl pb-5'>
              Comissão mais baixa
            </h1>
            <h3 className='opacity-70'>
              Você não precisa mais negociar comissões e pechinchar com outros
              agentes, custa apenas 2%!
            </h3>
          </div>
        </div>
        <div className=' w-full h-full flex items-end flex-col p-3'>
          <img
            className='flex items-end size-16'
            src='/Moraes/icon-4.png'
            alt=''
          />
          <div className='flex h-full flex-col tracking-tighter'>
            <h1 className='font-semibold text-start w-full text-xl pb-5'>
              Controle Geral
            </h1>
            <h3 className='opacity-70'>
              Faça um tour virtual e agende visitas antes de alugar ou comprar
              qualquer imóvel. Você obtém controle geral.
            </h3>
          </div>
        </div>
        <div className='w-full col-span-2 flex justify-center absolute bottom-7 md:bottom-0 transform right-1 md:right-0 md:translate-y-[130%]'>
          <button className='w-[10rem] flex justify-center items-center gap-1 py-2 text-zinc-50 rounded-lg hover:bg-slate-800 bg-slate-950 dark:hover:bg-opacity-80 dark:bg-ouro'>
            Saiba mais <MdContactSupport size={23} className='text-slate-50 dark:text-slate-900' />
          </button>
        </div>
      </div>
    </div>
  );
}
