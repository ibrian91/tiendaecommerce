import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CarritoProvider } from "./context/CarritoContext";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
      
    </>
  );
};

export default App;
