import { NavBar } from "./components/layouts/navbar/Navbar";
import { Footer } from "./components/layouts/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="BIENVENIDO" />
      <Footer />
    </>
  );
}

export default App;
