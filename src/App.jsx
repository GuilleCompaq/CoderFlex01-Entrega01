import "bootstrap/dist/css/bootstrap.min.css";
/*import './App.css'*/
import ItemsCount from "./components/ItemsCount";
import ItemListContainer from "./components/ItemsListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
//proveedor de contexto
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/checkout";


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer Saludo="Bienvenido a React" />}/>
        <Route path="/category/:type"element={<ItemListContainer Saludo="Categoria elegida:" />}/>

        <Route path="/Item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
