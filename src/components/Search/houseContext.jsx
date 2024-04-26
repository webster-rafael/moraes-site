"use client";
import { apartmentData } from "@/app/data";
import { createContext, useEffect, useState } from "react";
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [cidade, setCidade] = useState("Todos");
  const [cidades, setCidades] = useState([]);
  const [data, setData] = useState(apartmentData);
  const [price, setPrice] = useState("Todos");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const todasCidades = data.map((data) => {
      return data.cidade;
    });
    const cidadesUnicas = ["Todos", ...new Set(todasCidades)];
    setCidades(cidadesUnicas);
  }, []);

  const handleClick = () => {
    setLoading(true)
    const isDefault = (str) => {
      return str.split(" ").includes("Todos");
    };
    const minPrice = parseInt(price.split(" ")[0]);

    const maxPrice = parseInt(price.split(" ")[2]);


    const newHouses = apartmentData.filter((house) => {
      const housePrice = parseFloat(house.valor.replace(/\./g, '').replace(',', '.'));

      if (
        house.cidade === cidade &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(cidade) && isDefault(price)) {
        return house;
      }

      if (!isDefault(cidade) && isDefault(price)) {
        return house.cidade === cidade;
      }

      if (!isDefault(price) && isDefault(cidade)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
    });
    setTimeout(()=> {
      return (
        newHouses.length < 1 ? setData([]) : setData(newHouses),
      setLoading(false)
    )
    }, 1000)
  };
  

  return (
    <HouseContext.Provider
      value={{
        userData, // Incluindo dados do usuário no contexto
        setUserData, // Função para atualizar dados do usuário
        data,
        cidades,
        cidade,
        setCidade,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick,
        loading
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
