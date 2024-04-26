import { useContext, useEffect, useState } from "react";
import { ImSpinner2 } from 'react-icons/im'
import { Apartamentos } from "./apartamentos";
import Link from "next/link";
import { HouseContext } from "../Search/houseContext";
import { MdApartment } from "react-icons/md";
export function Residencia() {
  const { data, loading } = useContext(HouseContext);
  const [itensVisiveis, setItensVisiveis] = useState(6); // Define o número inicial de itens visíveis
  const itensPorPagina = 6; // Número de itens a serem exibidos por página
  const mostrarMaisItens = () => {
    setItensVisiveis(prev => prev + itensPorPagina); // Aumenta o número de itens visíveis quando o botão é clicado
  };

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-ouro text-4xl mt-[200px]' />
    )
  }

  if (data.length < 1) {
    return <h1 className='text-center text-3xl text-gray-400 mt-32'>Desculpe, nada encontrado</h1>
  }

  return (
    <section className='mb-20 h-auto'>
      <div className='flex justify-center w-full gap-2 items-center text-slate-950 dark:text-white/90 text-xl lg:text-2xl desktop:text-3xl antialiased text-center py-2 font-semibold font-Roboto'>Veja as opções disponíveis
      <MdApartment color='#DAA520' /></div>
      <div className='container desktop:max-w-[1366px] mx-auto dark:bg-slate-800 bg-slate-100 py-10 shadow-lg'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data.slice(0, itensVisiveis).map((residencia, index) => {
            return (
              <Link href={`/apartamentos/${residencia.id}`} key={index}>
                <Apartamentos residencia={residencia} />
              </Link>
            );
          })}
        </div>
        {itensVisiveis < data.length && (
          <button onClick={mostrarMaisItens} className="text-center block mx-auto mt-4 px-4 py-2 bg-ouro text-white rounded-md shadow-lg focus:outline-none hover:bg-blue-600">
            Mostrar Mais
          </button>
        )}
      </div>
    </section>
  );
}
