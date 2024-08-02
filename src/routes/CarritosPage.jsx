import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

let mensaje = "Su compra ha sido realizada";
const mensajeError = "No se realizó la compra. Ingrese productos en el carrito";
export const CarritosPage = () => {
  const {
    listaCompras,
    aumentarCantidadProducto,
    disminuirCantidadProducto,
    eliminarCompra,
    vaciarCarrito,
  } = useContext(CarritoContext);

  
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const buy = () => {
    vaciarCarrito();
    if (listaCompras.length > 0) {
      alert(mensaje);
    } else {
      alert(mensajeError);
    }
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="row">Item</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((compra) => (
            <tr key={compra.id}>
              <th scope="row">{compra.id}</th>
              <td>{compra.title}</td>
              <td>{compra.price}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-ouline-primary"
                  onClick={() => disminuirCantidadProducto(compra.id)}
                >
                  -
                </button>
                <button type="button" className="btn btn-primary">
                  {compra.cantidad}
                </button>
                <button
                  type="button"
                  className="btn btn-ouline-primary"
                  onClick={() => aumentarCantidadProducto(compra.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(compra.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <td>
            <b>TOTAL:</b>
          </td>
          <td></td>
          <td></td>
          <td>${calcularTotal()}</td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary" onClick={buy}>
          Comprar
        </button>
      </div>
    </>
  );
};
