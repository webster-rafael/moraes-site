"use client";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";

import { HouseContext } from "./houseContext";

export function Country() {
  const { cidade, setCidade, cidades } = useContext(HouseContext);
  useContext(HouseContext);
  const sortedCidades = [...cidades].sort((a, b) => a.localeCompare(b));

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-base font-medium leading-tight'>{cidade}</div>
          <div className='text-[13px] '>Selecione sua Cidade</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {sortedCidades.map((cidade, index) => {
          return (
            <Menu.Item
              onClick={() => setCidade(cidade)}
              className='cursor-pointer hover:text-violet-700'
              as='li'
              key={index}
            >
              {cidade}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
