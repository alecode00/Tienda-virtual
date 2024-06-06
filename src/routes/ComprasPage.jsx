import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const fetchData = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

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
            handleAgregar={() => handleAgregar(item)}
            handleQuitar={() => handleQuitar(item.id)}
          ></Card>
        </>
      ))}
    </>
  );
};
