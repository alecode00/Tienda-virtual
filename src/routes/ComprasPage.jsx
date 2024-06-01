/* import { useContext } from "react"; */
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
/* import { ProductosProvider } from "../context/ProductosProvider"; */



const urlBase = "https://fakestoreapi.com/products";

export const ComprasPage = () => {
  
/* const fetchData = useContext(ProductosProvider) */

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
    <>
      <h1>Compras</h1>
      <hr />
      
        {fetchData.map((item) => (
          <>
            
              <Card
              key={item.id}
                imagen={item.image}
                titulo={item.title}
                description={item.description}
                precio={item.price}
              ></Card>
            
          </>
        ))}
      
    </>
  );
};
