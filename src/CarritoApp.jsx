import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./routes/ComprasPage";
import { CarritosPage } from "./routes/CarritosPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <>
      <ProductosProvider>
        <CarritoProvider>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ComprasPage />}></Route>
              <Route path="/carrito" element={<CarritosPage />}></Route>
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
          </div>
        </CarritoProvider>
      </ProductosProvider>
    </>
  );
};
