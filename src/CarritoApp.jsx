import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./routes/ComprasPage";
import { CarritosPage } from "./routes/CarritosPage";
/* import { ProductosProvider } from "./context/ProductosProvider"; */

export const CarritoApp = () => {
  return (
    <>
      {/* <ProductosProvider> */}
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage />}></Route>
            <Route path="/carrito" element={<CarritosPage />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      {/* </ProductosProvider> */}
    </>
  );
};
