"use client";
import { useContext } from "react";
import { Country } from "./country";
// import { PriceRange } from "./price";

import { HouseContext } from "./houseContext";
import { RiSearch2Line } from "react-icons/ri";

export function Search() {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className='px-[30px] py-6 lg:py-4 desktop:py-6 max-w-2xl desktop:max-w-auto lg:ml-5 desktop:ml-10 flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-28 desktop:-top-10 lg:shadow-lg dark:bg-ouro bg-white lg:backdrop-blur rounded-lg'>
      <Country />
      {/* <Property /> */}
      {/* <PriceRange /> */}
      <button
        onClick={() => handleClick()}
        className='dark:bg-slate-900 dark:border bg-ouro dark:hover:bg-slate-800 hover:bg-opacity-75 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center dark:text-ouro text-white'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
}
