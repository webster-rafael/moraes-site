import Link from "next/link";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";

export function Apartamentos({ residencia }) {

  function enviarMensagem() {
    var mensagem = `Olá, gostaria de saber sobre o imóvel ${residencia.residencial}, localizado na cidade de ${residencia.cidade}.`;
    var url = `https://api.whatsapp.com/send?phone=5547997261914&text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
  }
  return (
    <section
      className='bg-slate-900 shadow-md p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'
      id='residence'
    >
      <img
        className='mb-8 rounded-tl-[70px] rounded-br-[70px] w-full object-center h-[390px]'
        src={residencia.foto}
        alt=''
      />
      <div className='mb-4 flex gap-x-2 text-xs'>
        <div className='bg-ouro rounded-full text-black py-1 px-3'>
          {residencia.residencial}
        </div>
        <div className='bg-violet-500 rounded-full flex items-center text-white px-3'>
          {residencia.cidade}
        </div>
      </div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-ouro gap-1'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>{residencia.dormitórios}</div>
        </div>

        <div className='flex items-center text-ouro gap-1'>
          <div className='text-[20px]'>
            <MdOutlineBathroom />
          </div>
          <div>{residencia.banheiros}</div>
        </div>

        <div className='flex items-center text-ouro gap-1'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>{residencia.suítes}</div>
        </div>

        <div className='flex items-center text-ouro gap-1'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>{residencia.metragem}</div>
        </div>
      </div>
      <div className='h-full flex justify-between items-center my-2'>
        <div className='flex justify-center items-center text-lg font-semibold text-white'>
          <button
            onClick={enviarMensagem}
            className='px-4 py-1 bg-ouro rounded-lg'
            href={`https://api.whatsapp.com/send?phone=5547997261914&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre%20o%20im%C3%B3vel%20${residencia.residencial},%20localizado%20na%20cidade%20de%20${residencia.cidade}.`}
          >
         R${residencia.valor}
          </button>
        </div>
        <div className='flex justify-center items-center text-black/80 text-sm font-semibold bg-ouro rounded-full px-3 py-1 uppercase'>
          {residencia.construtora}
        </div>
      </div>
    </section>
  );
}
