import { PropTypes } from "prop-types";
import "../styles/card.css";
import { useState } from "react";

const initialStateAdded = false;

export const Card = ({ imagen, titulo, description, precio, handleAgregar, handleQuitar}) => {
  Card.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    handleAgregar: PropTypes.func.isRequired,
    handleQuitar: PropTypes.func.isRequired,

  };
  const [added, setAdded] = useState(initialStateAdded);

  const handleFalseAdded = () => {
    handleQuitar()
    setAdded(false);
  };
  const handleTrueAdded = () => {
    handleAgregar()
    setAdded(true);
  };

  return (
    <>
      <div className="tarjeta">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
          <h3 className="tarjeta-titulo">{titulo}</h3>
          <p className="tarjeta-description">{description}</p>
          <p className="tarjeta-precio">{precio} </p>
          {added ? (
            <button
              type="button"
              className="boton-quitar"
              onClick={handleFalseAdded}
            >
              Quitar Articulo
            </button>
          ) : (
            <button
              type="button"
              className="boton-agregar"
              onClick={handleTrueAdded}
            >
              Agregar Articulo
            </button>
          )}
        </div>
      </div>
    </>
  );
};
