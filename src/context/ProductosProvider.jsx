import { PropTypes } from "prop-types";
import { ProductosContext } from "./ProductosContext";
import { useEffect, useState } from "react";

const urlBase = "https://fakestoreapi.com/products";

export const ProductosProvider = ({ children }) => {
  ProductosProvider.propTypes = {
    children: PropTypes.element,
  };

  const [fetchData, setFetchData] = useState([]);

  const fetchDataAsync = async () => {
    try {
      const response = await fetch(urlBase);
      const data = await response.json();
      setFetchData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  /* const fetchDataPromise = () => {
      try {
        fetch(urlBase)
          .then((response) => response.json())
          .then((json) => {
            setFetchData(json);
            console.log(json);
          });
      } catch (error) {
        console.error(error);
      }
    }; */

  useEffect(() => {
    fetchDataAsync();
  }, []);
  return (
    <ProductosContext.Provider value={fetchData}>
      {children}
    </ProductosContext.Provider>
  );
};
