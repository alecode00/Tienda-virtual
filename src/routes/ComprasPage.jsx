import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";

export const ComprasPage = () => {
  const fetchData = useContext(ProductosContext);

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
