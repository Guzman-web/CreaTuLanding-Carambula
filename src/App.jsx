import { NavBar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ChatWidget } from "./components/common/chatWidget/ChatWidget";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="BIENVENIDO" />
      <ChatWidget />
    </>
  );
}

export default App;
