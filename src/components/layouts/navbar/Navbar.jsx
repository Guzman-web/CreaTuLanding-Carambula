import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
export const NavBar = () => {
  return (
    <>
      <nav>
        <img className="logo" src="../src/logo.png" />
        <h1>MapacheShop</h1>
        <ul>
          <li>Home</li>
          <li>Productos</li>
          <li>Contacto</li>
          <CartWidget />
        </ul>
      </nav>
    </>
  );
};
