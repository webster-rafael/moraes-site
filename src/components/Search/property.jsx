'use client'
import { RiHome3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { useEffect, useState } from "react";
import { apartmentData } from "@/app/data"

export function Property() {
  const [propriedade, setPropriedade] = useState("Propriedades")
  const [propriedades, setPropriedades] = useState([])

  useEffect(() => {
    setPropriedades(apartmentData)
    const todasPropriedades = apartmentData.map((item) => {
        return item.residencial
      });
      const residencial = [... new Set(todasPropriedades)]
      setPropriedades(residencial)
  }, []);

  
  
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-base font-medium leading-tight'>
            {propriedade}
          </div>
          <div className='text-[13px] '>Selecione um Imóvel</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {propriedades.map((propriedade, index) => {
          return (
            <Menu.Item
              onClick={() => setPropriedade(propriedade)}
              className='cursor-pointer hover:text-violet-700'
              as='li'
              key={index}
            >
              {propriedade}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
