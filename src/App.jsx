import { NavBar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="BIENVENIDO" />
    </>
  );
}

export default App;
