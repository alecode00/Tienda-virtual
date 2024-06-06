import { PropTypes } from "prop-types";
import { CarritoContext } from "./CarritoContext";
import { useReducer } from "react";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  CarritoProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRTIO] Añadir compra":
        return [...state, action.payload];
      case "[CARRTIO] aumentar cantidad":
        return state.map((item) => {
          const cantidad = item.cantidad + 1;
          if (item.id == action.payload) {
            return { ...item, cantidad: cantidad };
          }
          return item;
        });
      case "[CARRTIO] disminuir cantidad":
        return state.map((item) => {
          const cantidad = item.cantidad - 1;
          if (item.id == action.payload && item.cantidad > 1) {
            return { ...item, cantidad: cantidad };
          }
          return item;
        });
      case "[CARRTIO] eliminar compra":
        return state.filter((compra) => compra.id !== action.payload);
      case "[CARRITO] vaciar carrito":
        return action.payload;

      default:
        return state;
    }
  };
  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRTIO] Añadir compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidadProducto = (id) => {
    const action = {
      type: "[CARRTIO] aumentar cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidadProducto = (id) => {
    const action = {
      type: "[CARRTIO] disminuir cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRTIO] eliminar compra",
      payload: id,
    };
    dispatch(action);
  };
  const vaciarCarrito = () => {
    const action = {
      type: "[CARRITO] vaciar carrito",
      payload: initialState,
    };
    dispatch(action);
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  return (
    <>
      <CarritoContext.Provider
        value={{
          listaCompras,
          agregarCompra,
          aumentarCantidadProducto,
          disminuirCantidadProducto,
          eliminarCompra,
          vaciarCarrito
        }}
      >
        {children}
      </CarritoContext.Provider>
    </>
  );
};
