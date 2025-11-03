import "bootstrap/dist/css/bootstrap.min.css";
/*import './App.css'*/
import ItemsCount from "./components/ItemsCount";
import ItemListContainer from "./components/ItemsListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer Saludo="Bienvenido a React" />}/>
        <Route path="/category/:type"element={<ItemListContainer Saludo="Categoria elegida:" />}/>

        <Route path="/Item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
