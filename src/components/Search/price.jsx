"use client"
import {
  RiMoneyDollarBoxLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";

import { HouseContext } from './houseContext';

export function PriceRange( {handleClick} ) {
  const { price, setPrice } = useContext(HouseContext)
  const [preço, setPreço] = useState("Preços");


  const [isOpen, setIsOpen] = useState(false);
  const valores = [
    { value: "Todos" },
    { value: "500000 à 1000000" },
    { value: "1000001 à 2000000" },
    { value: "2000001 à 3000000" },
    { value: "3000001 à 5000000" },
  ];

    
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMoneyDollarBoxLine className='dropdown-icon-primary' />
        <div>
          <div className='text-base font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Selecione um valor</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {valores.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className='cursor-pointer hover:text-violet-700'
              as='li'
              key={index}
            >
              {`R$${price.value}`}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
