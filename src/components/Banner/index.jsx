"use client"
import { useEffect, useState } from 'react';
import { Search } from '../Search';


export function Banner() {

    const [currentBanner, setCurrentBanner] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner === 4 ? 1 : prevBanner + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className='h-full lg:max-h-[640px] mb-8 xl:mb-24 pt-32 lg:pt-16'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:m-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-3xl dark:text-white/90 lg:text-[50px] font-semibold leading-none mb-6'>
                        <span className='text-ouro'>Compre</span> o Imóvel Dos Seus Sonhos Conosco.
                    </h1>
                </div>
                <div className='flex-1 flex justify-end items-end mt-10'>
                    <img className='h-auto lg:w-[600px] lg:h-[530px] desktop:h-[700px] rounded-tl-[80px] rounded-br-[80px] lg:rounded-tl-[30%] w-[90%] lg:mx-0 mx-auto lg:rounded-br-[30%]' src={`Moraes/banner-${currentBanner}.jpg`} alt="Banner do Site" />
                </div>
            </div>
            <Search />
        </section>
    )
}