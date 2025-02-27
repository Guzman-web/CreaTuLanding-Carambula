import "./navbar.css";
import { Link } from "react-router";
import { CartWidget } from "../../common/cartWidget/CartWidget";
export const NavBar = () => {
  return (
    <>
      <nav>
        <img className="logo" src="../src/logo.png" />
        <h1>MapacheShop</h1>
        <ul>
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
          <Link style={{ color: "white" }} to="/category/deportivas">
            deportivas
          </Link>
          <Link style={{ color: "white" }} to="/category/urbanas">
            urbanas
          </Link>
          <Link style={{ color: "white" }} to="/cart">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </>
  );
};
